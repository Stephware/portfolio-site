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

async function getContributionYear(): Promise<{ days: ContributionDay[]; total: number | null }> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } },
    );

    if (response.ok) {
      const data = (await response.json()) as ContributionResponse;
      const days = data.contributions ?? [];
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
        next: { revalidate: 3600 },
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
        level: count === 0 ? 0 : count === 1 ? 1 : count <= 3 ? 2 : count <= 6 ? 3 : 4,
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

function formatDate(value: string, includeYear = true) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...(includeYear ? { year: "numeric" } : {}),
    timeZone: "UTC",
  });
}

function longestActiveStreak(days: ContributionDay[]) {
  let longest = 0;
  let current = 0;

  for (const day of days) {
    if (day.count > 0) {
      current += 1;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  }

  return longest;
}

export async function GitHubActivity() {
  const { days, total } = await getContributionYear();
  const recentDays = days.slice(-30);
  const maxCount = Math.max(1, ...recentDays.map((day) => day.count));
  const recentTotal = recentDays.reduce((sum, day) => sum + day.count, 0);
  const activeDays = recentDays.filter((day) => day.count > 0).length;
  const longestStreak = longestActiveStreak(recentDays);
  const startLabel = recentDays[0] ? formatDate(recentDays[0].date, false) : "30 days ago";
  const endLabel = recentDays.at(-1) ? formatDate(recentDays.at(-1)!.date, false) : "Today";

  return (
    <div className="github-momentum">
      <div className="github-momentum-header">
        <span>09 — github</span>
        <a href={profileUrl} target="_blank" rel="noreferrer" aria-label="Open Stephware on GitHub">
          @{username.toUpperCase()} ↗
        </a>
      </div>

      <div className="github-momentum-intro">
        <div>
          <span className="micro-label">Recent momentum</span>
          <h3>30 days of building.</h3>
        </div>
        <p>Each column is one day. Height shows relative contribution intensity; the figures below use the exact GitHub counts.</p>
      </div>

      <div className="github-rhythm" role="img" aria-label="GitHub contribution activity for the last 30 days">
        {recentDays.map((day) => {
          const height = day.count === 0 ? 3 : Math.round(24 + (day.count / maxCount) * 76);

          return (
            <div
              className={`github-rhythm-day ${day.count > 0 ? "is-active" : ""}`}
              key={day.date}
              title={`${formatDate(day.date)}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
              aria-label={`${formatDate(day.date)}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
            >
              <span className="github-rhythm-track" aria-hidden="true">
                <span className="github-rhythm-fill" style={{ height: `${height}%` }} />
              </span>
              <span className="github-rhythm-dot" aria-hidden="true" />
            </div>
          );
        })}
      </div>

      <div className="github-rhythm-axis" aria-hidden="true">
        <span>{startLabel}</span>
        <span>last 30 days</span>
        <span>{endLabel}</span>
      </div>

      <div className="github-momentum-stats">
        <div>
          <span>Contributions</span>
          <strong>{recentTotal.toLocaleString("en-US")}</strong>
          <small>last 30 days</small>
        </div>
        <div>
          <span>Active days</span>
          <strong>{activeDays}<em>/30</em></strong>
          <small>days with activity</small>
        </div>
        <div>
          <span>Longest streak</span>
          <strong>{longestStreak}</strong>
          <small>consecutive active days</small>
        </div>
      </div>

      <div className="github-momentum-footer">
        <span>
          {total === null
            ? "YEARLY TOTAL TEMPORARILY UNAVAILABLE"
            : `${total.toLocaleString("en-US")} CONTRIBUTIONS IN THE LAST YEAR`}
        </span>
        <span>LIVE GITHUB DATA · REFRESHES HOURLY</span>
      </div>
    </div>
  );
}
