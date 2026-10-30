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
  id: string;
  type: string;
  created_at: string;
  repo?: { name: string };
  payload?: {
    action?: string;
    ref?: string | null;
    ref_type?: string;
    pull_request?: { number?: number; merged?: boolean };
    issue?: { number?: number };
  };
};

type RecentActivity = {
  id: string;
  label: string;
  detail: string;
  repository: string;
  url: string;
  date: string;
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

  // If the contribution sources are unavailable, don't manufacture an
  // all-zero calendar from public events: events aren't contribution counts.
  return { days: [], total: null };
}

function formatActivityDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function mapPublicEvent(event: GitHubEvent): RecentActivity | null {
  const repository = event.repo?.name;
  if (!repository || !/^[\w.-]+\/[\w.-]+$/.test(repository)) return null;
  if (!Number.isFinite(Date.parse(event.created_at))) return null;

  const baseUrl = `https://github.com/${repository}`;
  const payload = event.payload;
  let label: string;
  let detail: string;
  let url = baseUrl;

  switch (event.type) {
    case "PushEvent": {
      label = "Pushed code";
      const branch = payload?.ref?.replace(/^refs\/heads\//, "");
      detail = branch ? `Updated ${branch}` : "Repository updates";
      break;
    }
    case "PullRequestEvent": {
      const action = payload?.action;
      if (action === "closed" && payload?.pull_request?.merged) {
        label = "Merged a pull request";
      } else if (action === "opened") {
        label = "Opened a pull request";
      } else if (action === "reopened") {
        label = "Reopened a pull request";
      } else {
        return null;
      }
      detail = "Pull request activity";
      if (payload?.pull_request?.number) {
        url = `${baseUrl}/pull/${payload.pull_request.number}`;
      }
      break;
    }
    case "CreateEvent": {
      if (payload?.ref_type === "repository") {
        label = "Created a repository";
        detail = "New public repository";
      } else if (payload?.ref_type === "branch") {
        label = "Created a branch";
        detail = payload.ref || "New branch";
      } else {
        return null;
      }
      break;
    }
    case "ReleaseEvent": {
      if (payload?.action !== "published") return null;
      label = "Published a release";
      detail = "New version";
      url = `${baseUrl}/releases`;
      break;
    }
    case "IssuesEvent": {
      if (payload?.action !== "opened" && payload?.action !== "closed") return null;
      label = payload.action === "opened" ? "Opened an issue" : "Closed an issue";
      detail = "Issue activity";
      if (payload.issue?.number) {
        url = `${baseUrl}/issues/${payload.issue.number}`;
      }
      break;
    }
    default:
      return null;
  }

  return { id: event.id, label, detail, repository, url, date: event.created_at };
}

async function getRecentPublicActivity(): Promise<{ items: RecentActivity[]; available: boolean }> {
  // Public events require no credentials. Next.js caches the request for
  // 15 minutes so browsing the portfolio won't exhaust GitHub rate limits.
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "Stephen-Pinacate-Portfolio",
        },
        next: { revalidate: 900 },
      },
    );
    if (!response.ok) return { items: [], available: false };

    const data: unknown = await response.json();
    if (!Array.isArray(data)) return { items: [], available: false };

    const items = (data as GitHubEvent[])
      .map(mapPublicEvent)
      .filter((item): item is RecentActivity => item !== null)
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, 6);

    return { items, available: true };
  } catch {
    return { items: [], available: false };
  }
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
  const [{ days, total }, recent] = await Promise.all([
    getContributionYear(),
    getRecentPublicActivity(),
  ]);
  const visibleDays = days.slice(-371);

  return (
    <div className="github-dot-tracker" data-reveal>
      <div className="github-dot-header">
        <span>10 — github</span>
        <a href={profileUrl} target="_blank" rel="noreferrer" aria-label="Open Stephware on GitHub">
          @{username.toUpperCase()} ↗
        </a>
      </div>

      {visibleDays.length > 0 ? (
        <>
          {/* RTL scrolling starts at the newest end on narrow screens,
              while the LTR grid keeps dates in chronological order. */}
          <div className="github-dot-scroll" dir="rtl" role="img" aria-label="GitHub contribution activity over the last year; newest dates on the right">
            <div className="github-dot-grid" dir="ltr">
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
        </>
      ) : (
        <p className="github-dot-total">CONTRIBUTION CALENDAR TEMPORARILY UNAVAILABLE — VIEW ON GITHUB</p>
      )}

      <div className="github-recent">
        <div className="github-recent-heading">
          <div>
            <span className="micro-label">Recent public activity</span>
            <p>Latest code updates and collaboration across public repositories.</p>
          </div>
          <span className="github-recent-window">LAST 30 DAYS</span>
        </div>

        {recent.items.length > 0 ? (
          <ul className="github-recent-list">
            {recent.items.map((item) => (
              <li className="github-recent-item" key={item.id}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <span className="github-recent-repository">{item.repository}</span>
                  <strong>{item.label}</strong>
                  <span className="github-recent-detail">{item.detail}</span>
                  <span className="github-recent-date">{formatActivityDate(item.date)} <span aria-hidden="true">↗</span></span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="github-recent-empty">
            {recent.available
              ? "No recent public events to display. Private repository activity is not shown."
              : "Recent activity is temporarily unavailable. View the latest updates on GitHub."}
          </p>
        )}
        <a className="github-recent-profile" href={profileUrl} target="_blank" rel="noreferrer">
          View full GitHub profile ↗
        </a>
      </div>
    </div>
  );
}
