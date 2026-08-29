import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? "project-card-featured" : ""}`}>
      <div className={`project-visual project-visual-${project.number}`} aria-label={`${project.title} project visual area`}>
        <div className="visual-grid" aria-hidden="true" />
        <div className="project-visual-label">
          <span className="micro-label">{project.imageLabel}</span>
          <strong>{project.number}</strong>
          <span>{project.scope ?? "Software project"}</span>
        </div>
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span>Project {project.number}</span>
          {project.featured ? <span className="inverted-chip">Featured</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <dl className="project-facts">
          <div>
            <dt>Ownership</dt>
            <dd>{project.ownership}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <div className="project-contribution">
          <span className="micro-label">My contribution</span>
          <p>{project.contribution}</p>
        </div>

        <div className="tag-row">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          {project.repository ? (
            <a href={project.repository} target="_blank" rel="noreferrer">Repository ↗</a>
          ) : (
            <span>{project.repositoryLabel ?? "Private source"}</span>
          )}
        </div>
      </div>
    </article>
  );
}
