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
    <div className="github-dot-tracker">
      <div className="github-dot-header">
        <span>09 — github</span>
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
          ? "PUBLIC ACTIVITY · CONTRIBUTION TOTAL TEMPORARILY UNAVAILABLE"
          : `${total.toLocaleString("en-US")} CONTRIBUTIONS IN THE LAST YEAR`}
      </p>
    </div>
  );
}
