import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? "project-card-featured" : ""}`}>
      <div className={`project-visual project-visual-${project.number}`}>
        <div className="visual-grid" aria-hidden="true" />
        <div className="project-visual-label">
          <span className="micro-label">{project.imageLabel}</span>
          <strong>{project.number}</strong>
          <span>Screenshot / product visual coming next</span>
        </div>
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span>Project {project.number}</span>
          {project.featured ? <span className="inverted-chip">Featured</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          <span>Details verified from project work</span>
          {project.repository ? (
            <a href={project.repository} target="_blank" rel="noreferrer">Repository ↗</a>
          ) : (
            <span>{project.repositoryLabel ?? "Repository not public"}</span>
          )}
        </div>
      </div>
    </article>
  );
}
