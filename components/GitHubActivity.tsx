type ContributionDay = {
  date: string;
  count: number | null;
  level: number;
};

type ContributionResponse = {
  total?: Record<string, number>;
  contributions?: ContributionDay[];
};

const username = "Stephware";
const profileUrl = `https://github.com/${username}`;

function getContributionLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 4) return 1;
  if (count <= 14) return 2;
  if (count <= 39) return 3;
  return 4;
}

function parseNumber(value: string | undefined) {
  if (!value) return null;
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function countFromTooltip(value: string) {
  const text = value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (/no contributions?/i.test(text)) return 0;

  const match = text.match(/([\d,]+)\s+contributions?/i);
  return parseNumber(match?.[1]);
}

function parseGitHubContributionHtml(html: string) {
  const totalMatch = html.match(/([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/i);
  const total = parseNumber(totalMatch?.[1]);

  const countsByReference = new Map<string, number>();
  const tooltipPattern = /<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/gi;

  for (const match of html.matchAll(tooltipPattern)) {
    const attributes = match[1] ?? "";
    const count = countFromTooltip(match[2] ?? "");
    if (count === null) continue;

    const id = attributes.match(/\bid="([^"]+)"/i)?.[1];
    const target = attributes.match(/\bfor="([^"]+)"/i)?.[1];

    if (id) countsByReference.set(id, count);
    if (target) countsByReference.set(target, count);
  }

  const days: ContributionDay[] = [];
  const dayPattern = /<(?:td|rect)\b[^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"[^>]*>/gi;

  for (const match of html.matchAll(dayPattern)) {
    const tag = match[0];
    const date = match[1];
    const directCount = parseNumber(tag.match(/\bdata-count="([\d,]+)"/i)?.[1]);
    const id = tag.match(/\bid="([^"]+)"/i)?.[1];
    const describedBy = tag.match(/\baria-describedby="([^"]+)"/i)?.[1];
    const githubLevel = Number(tag.match(/\bdata-level="(\d+)"/i)?.[1] ?? 0);

    let count = directCount;
    if (count === null && id) count = countsByReference.get(id) ?? null;
    if (count === null && describedBy) count = countsByReference.get(describedBy) ?? null;

    // Preserve GitHub's intensity when the exact tooltip count is missing.
    // Do not invent contribution counts for those days.
    days.push({
      date,
      count,
      level: count === null ? Math.max(0, Math.min(4, githubLevel)) : getContributionLevel(count),
    });
  }

  return { days, total };
}

async function getContributionYear(): Promise<{ days: ContributionDay[]; total: number | null }> {
  // Primary source: GitHub's own public contribution calendar. This is the
  // same profile calendar GitHub renders and can include anonymized private
  // contributions when the account has private contributions enabled.
  try {
    const response = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        headers: {
          Accept: "text/html",
          "User-Agent": "Stephen-Pinacate-Portfolio",
        },
        next: { revalidate: 900 },
      },
    );

    if (response.ok) {
      const parsed = parseGitHubContributionHtml(await response.text());
      if (parsed.days.length > 0) return parsed;
    }
  } catch {
    // Fall through to the public contribution API below.
  }

  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 900 } },
    );

    if (response.ok) {
      const data = (await response.json()) as ContributionResponse;
      const days = (data.contributions ?? []).map((day) => ({
        ...day,
        level: getContributionLevel(day.count ?? 0),
      }));
      const total = data.total
        ? Object.values(data.total).reduce((sum, value) => sum + value, 0)
        : days.reduce((sum, day) => sum + (day.count ?? 0), 0);

      if (days.length > 0) return { days, total };
    }
  } catch {
    // Fall through to the public-event fallback below.
  }

  // If the contribution sources are unavailable, don't manufacture an
  // all-zero calendar from public events: events aren't contribution counts.
  return { days: [], total: null };
}

function formatDate(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

type CalendarWeek = {
  key: string;
  monthLabel: string;
  days: (ContributionDay | null)[];
};

function createCalendarWeeks(contributions: ContributionDay[], year: number): CalendarWeek[] {
  // Display March 1 through December 31 of the selected calendar year.
  // Pad each week Sunday–Saturday and never invent future contributions.
  const now = new Date().toISOString().slice(0, 10);
  const firstDate = `${year}-03-01`;
  const lastDate = `${year}-12-31`;
  const byDate = new Map(
    contributions
      .filter((day) => day.date >= firstDate && day.date <= lastDate && day.date <= now)
      .map((day) => [day.date, day]),
  );
  const first = new Date(`${firstDate}T00:00:00Z`);
  const last = new Date(`${lastDate}T00:00:00Z`);
  first.setUTCDate(first.getUTCDate() - first.getUTCDay());
  last.setUTCDate(last.getUTCDate() + (6 - last.getUTCDay()));

  const weeks: CalendarWeek[] = [];
  let currentWeek: (ContributionDay | null)[] = [];
  let weekDates: string[] = [];

  for (let current = new Date(first); current <= last; current.setUTCDate(current.getUTCDate() + 1)) {
    const date = current.toISOString().slice(0, 10);
    weekDates.push(date);
    currentWeek.push(byDate.get(date) ?? null);
    if (currentWeek.length === 7) {
      // Month labels must also appear for upcoming months (November and
      // December), when there are correctly no contributions to render.
      const monthStart = weekDates.find((day) => day >= firstDate && day <= lastDate && day.endsWith("-01"));
      weeks.push({
        key: date,
        monthLabel: monthStart
          ? new Date(`${monthStart}T00:00:00Z`).toLocaleDateString("en-US", {
              month: "short",
              timeZone: "UTC",
            })
          : "",
        days: currentWeek,
      });
      currentWeek = [];
      weekDates = [];
    }
  }

  return weeks;
}

export async function GitHubActivity() {
  const { days, total } = await getContributionYear();
  const now = new Date();
  // In January and February, continue showing the preceding March–December.
  const calendarYear = now.getUTCMonth() < 2 ? now.getUTCFullYear() - 1 : now.getUTCFullYear();
  const weeks = days.length ? createCalendarWeeks(days, calendarYear) : [];

  return (
    <div className="github-contributions" data-reveal>
      <div className="github-contributions-header">
        <span>10 — github</span>
        <a href={profileUrl} target="_blank" rel="noreferrer" aria-label="Open Stephware on GitHub">
          @{username.toUpperCase()} ↗
        </a>
      </div>

      {weeks.length > 0 ? (
        <div className="github-calendar-card">
          <div className="github-calendar-title">
            <strong>
              {total === null
                ? "GitHub contributions in the last year"
                : total.toLocaleString("en-US") + " contributions in the last year"}
            </strong>
            <p className="github-calendar-period">Showing March–December {calendarYear} · Future dates left blank</p>
          </div>

          <div className="github-calendar-layout">
            <div className="github-weekdays" aria-hidden="true">
              <span />
              <span>Mon</span>
              <span />
              <span>Wed</span>
              <span />
              <span>Fri</span>
              <span />
            </div>

            {/* The scroll viewport starts on the newest weeks on mobile;
                the inner calendar stays chronological left-to-right. */}
            <div
              className="github-calendar-scroll"
              dir="rtl"
              role="img"
              aria-label={"GitHub contribution calendar from March to December " + calendarYear + "; future dates blank"}
            >
              <div className="github-calendar-inner" dir="ltr">
                <div className="github-calendar-months" aria-hidden="true">
                  {weeks.map((week) => (
                    <span className="github-calendar-month-slot" key={week.key}>
                      {week.monthLabel ? <span>{week.monthLabel}</span> : null}
                    </span>
                  ))}
                </div>
                <div className="github-calendar-grid">
                  {weeks.flatMap((week) =>
                    week.days.map((day, dayIndex) =>
                      day ? (
                        <span
                          key={day.date}
                          className={"github-calendar-day github-level-" + day.level}
                          title={formatDate(day.date) + ": " + (
                            day.count === null
                              ? "contribution level " + day.level
                              : day.count + " contribution" + (day.count === 1 ? "" : "s")
                          )}
                        />
                      ) : (
                        <span
                          className="github-calendar-day github-calendar-empty"
                          aria-hidden="true"
                          key={week.key + "-" + dayIndex}
                        />
                      ),
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="github-calendar-footer">
            <a href={profileUrl} target="_blank" rel="noreferrer">
              View contribution history on GitHub ↗
            </a>
            <div className="github-calendar-legend" aria-label="Contribution intensity from less to more">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span className={"github-calendar-day github-level-" + level} key={level} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="github-calendar-unavailable">
          Contribution calendar temporarily unavailable.{" "}
          <a href={profileUrl} target="_blank" rel="noreferrer">View it on GitHub ↗</a>
        </div>
      )}
    </div>
  );
}
