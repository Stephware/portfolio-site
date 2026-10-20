type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total?: Record<string, number>;
  contributions?: ContributionDay[];
};

type GitHubEvent = {
  created_at: string;
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

    // GitHub occasionally changes the calendar markup. If an exact tooltip
    // count cannot be matched, preserve the visible GitHub activity level
    // instead of incorrectly treating an active day as empty.
    if (count === null) {
      count = [0, 1, 5, 15, 40][Math.max(0, Math.min(4, githubLevel))] ?? 0;
    }

    days.push({
      date,
      count,
      level: getContributionLevel(count),
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
        level: getContributionLevel(day.count),
      }));
      const total = data.total
        ? Object.values(data.total).reduce((sum, value) => sum + value, 0)
        : days.reduce((sum, day) => sum + day.count, 0);

      if (days.length > 0) return { days, total };
    }
  } catch {
    // Fall through to the public-event fallback below.
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 900 },
      },
    );

    if (!response.ok) return { days: buildEmptyYear(), total: null };

    const events = (await response.json()) as GitHubEvent[];
    const counts = new Map<string, number>();
    for (const event of events) {
      const key = event.created_at.slice(0, 10);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }

    const days = buildEmptyYear().map((day) => {
      const count = counts.get(day.date) ?? 0;
      return {
        ...day,
        count,
        level: getContributionLevel(count),
      };
    });

    return { days, total: null };
  } catch {
    return { days: buildEmptyYear(), total: null };
  }
}

function buildEmptyYear(): ContributionDay[] {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  return Array.from({ length: 371 }, (_, index) => {
    const date = new Date(today);
    date.setUTCDate(today.getUTCDate() - (370 - index));
    return { date: date.toISOString().slice(0, 10), count: 0, level: 0 };
  });
}

function formatDate(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export async function GitHubActivity() {
  const { days, total } = await getContributionYear();
  const visibleDays = days.slice(-371);

  return (
    <div className="github-dot-tracker" data-reveal>
      <div className="github-dot-header">
        <span>10 — github</span>
        <a href={profileUrl} target="_blank" rel="noreferrer" aria-label="Open Stephware on GitHub">
          @{username.toUpperCase()} ↗
        </a>
      </div>

      <div className="github-dot-scroll" role="img" aria-label="GitHub contribution activity for the last year">
        <div className="github-dot-grid">
          {visibleDays.map((day) => (
            <span
              className={`github-dot github-dot-${Math.max(0, Math.min(4, day.level))}`}
              key={day.date}
              title={`${formatDate(day.date)}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
            />
          ))}
        </div>
      </div>

      <p className="github-dot-total">
        {total === null
          ? "CONTRIBUTION TOTAL TEMPORARILY UNAVAILABLE"
          : `${total.toLocaleString("en-US")} CONTRIBUTIONS IN THE LAST YEAR`}
      </p>
    </div>
  );
}
