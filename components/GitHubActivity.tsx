type GitHubEvent = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload?: {
    action?: string;
    ref_type?: string;
    commits?: Array<{ sha: string }>;
    pull_request?: { number?: number };
    issue?: { number?: number };
    release?: { tag_name?: string };
  };
};

const username = "Stephware";
const profileUrl = `https://github.com/${username}`;

async function getPublicEvents(): Promise<GitHubEvent[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];
    return (await response.json()) as GitHubEvent[];
  } catch {
    return [];
  }
}

function toDayKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function buildActivityDays(events: GitHubEvent[]) {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const counts = new Map<string, number>();
  for (const event of events) {
    const key = event.created_at.slice(0, 10);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return Array.from({ length: 28 }, (_, index) => {
    const date = new Date(today);
    date.setUTCDate(today.getUTCDate() - (27 - index));
    const key = toDayKey(date);
    const count = counts.get(key) ?? 0;

    return {
      key,
      count,
      level: count === 0 ? 0 : count === 1 ? 1 : count <= 3 ? 2 : count <= 6 ? 3 : 4,
      label: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }),
    };
  });
}

function eventDescription(event: GitHubEvent) {
  const action = event.payload?.action;

  switch (event.type) {
    case "PushEvent": {
      const count = event.payload?.commits?.length ?? 0;
      return count > 0 ? `Pushed ${count} commit${count === 1 ? "" : "s"}` : "Pushed commits";
    }
    case "PullRequestEvent":
      return `${action ? `${action[0]?.toUpperCase()}${action.slice(1)}` : "Updated"} pull request${event.payload?.pull_request?.number ? ` #${event.payload.pull_request.number}` : ""}`;
    case "IssuesEvent":
      return `${action ? `${action[0]?.toUpperCase()}${action.slice(1)}` : "Updated"} issue${event.payload?.issue?.number ? ` #${event.payload.issue.number}` : ""}`;
    case "CreateEvent":
      return `Created ${event.payload?.ref_type ?? "repository activity"}`;
    case "WatchEvent":
      return "Starred repository";
    case "ForkEvent":
      return "Forked repository";
    case "ReleaseEvent":
      return `Published release${event.payload?.release?.tag_name ? ` ${event.payload.release.tag_name}` : ""}`;
    default:
      return event.type.replace(/Event$/, "").replace(/([a-z])([A-Z])/g, "$1 $2");
  }
}

function formatEventDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export async function GitHubActivity() {
  const events = await getPublicEvents();
  const days = buildActivityDays(events);
  const recent = events.slice(0, 6);
  const activeDays = days.filter((day) => day.count > 0).length;
  const repositories = new Set(events.map((event) => event.repo.name)).size;
  const latest = events[0]?.created_at;

  return (
    <div className="github-activity-shell">
      <div className="github-activity-summary">
        <div className="github-profile-line">
          <div>
            <span className="micro-label">github.com/{username}</span>
            <h3>Public development activity</h3>
          </div>
          <a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">
            Open GitHub ↗
          </a>
        </div>

        <div className="github-stats" aria-label="GitHub public activity summary">
          <div>
            <span>28-day active days</span>
            <strong>{activeDays}</strong>
          </div>
          <div>
            <span>Recent repositories</span>
            <strong>{repositories}</strong>
          </div>
          <div>
            <span>Latest public activity</span>
            <strong>{latest ? formatEventDate(latest) : "Unavailable"}</strong>
          </div>
        </div>

        <div className="github-calendar-wrap">
          <div className="github-calendar-header">
            <span>Last 28 days</span>
            <span>Public GitHub events · refreshes hourly</span>
          </div>
          <div className="github-calendar" aria-label="GitHub public activity over the last 28 days">
            {days.map((day) => (
              <span
                className={`github-day github-day-${day.level}`}
                key={day.key}
                title={`${day.label}: ${day.count} public event${day.count === 1 ? "" : "s"}`}
                aria-label={`${day.label}: ${day.count} public GitHub event${day.count === 1 ? "" : "s"}`}
              />
            ))}
          </div>
          <div className="github-calendar-legend" aria-hidden="true">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => <i className={`github-day github-day-${level}`} key={level} />)}
            <span>More</span>
          </div>
        </div>
      </div>

      <div className="github-recent">
        <div className="github-recent-heading">
          <span className="micro-label">Recent public activity</span>
          <span>{events.length > 0 ? `${events.length} events loaded` : "GitHub API unavailable"}</span>
        </div>

        {recent.length > 0 ? (
          <div className="github-event-list">
            {recent.map((event, index) => (
              <a
                className="github-event"
                href={`https://github.com/${event.repo.name}`}
                target="_blank"
                rel="noreferrer"
                key={event.id}
              >
                <span className="github-event-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{eventDescription(event)}</strong>
                  <span>{event.repo.name}</span>
                </div>
                <time dateTime={event.created_at}>{formatEventDate(event.created_at)}</time>
              </a>
            ))}
          </div>
        ) : (
          <div className="github-empty-state">
            <p>Live GitHub activity could not be loaded right now.</p>
            <a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">View profile directly ↗</a>
          </div>
        )}
      </div>
    </div>
  );
}
