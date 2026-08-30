import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const hasPreview = Boolean(project.previewImage);
  const usesFeaturedPreview = hasPreview && project.featured;

  const visualCore = (
    <div
      className={`project-visual project-visual-${project.number} ${hasPreview ? "project-visual-with-image" : ""}`}
      aria-label={`${project.title} project visual area`}
    >
      {project.previewImage ? (
        <>
          <Image
            src={project.previewImage}
            alt={project.previewAlt ?? `${project.title} project interface`}
            fill
            sizes="(max-width: 767px) 100vw, 60vw"
            className="project-preview-image"
          />
          <div className="project-preview-wash" aria-hidden="true" />
        </>
      ) : null}

      <div className="visual-grid" aria-hidden="true" />
      <div className={`project-visual-label ${hasPreview ? "project-visual-label-preview" : ""}`}>
        {!usesFeaturedPreview ? <span className="micro-label">{project.imageLabel}</span> : null}
        <strong>{project.number}</strong>
        {!usesFeaturedPreview ? <span>{project.scope ?? "Software project"}</span> : null}
      </div>
    </div>
  );

  const visual = usesFeaturedPreview ? (
    <div className="project-preview-column">
      {project.detailPath ? (
        <Link
          className="project-preview-image-link"
          href={project.detailPath}
          aria-label={`View ${project.title} case study`}
        >
          {visualCore}
        </Link>
      ) : visualCore}

      <div className="project-preview-meta">
        <span className="micro-label">{project.imageLabel}</span>
        <span className="project-preview-scope">{project.scope ?? "Software project"}</span>
      </div>
    </div>
  ) : project.detailPath ? (
    <Link
      className={hasPreview ? "project-preview-image-link" : undefined}
      href={project.detailPath}
      aria-label={`View ${project.title} case study`}
    >
      {visualCore}
    </Link>
  ) : visualCore;

  return (
    <article className={`project-card ${project.featured ? "project-card-featured" : ""}`}>
      {visual}

      <div className="project-copy">
        <div className="project-meta">
          <span>Project {project.number}</span>
          <div className="project-meta-chips">
            {project.status ? <span className="outline-chip">{project.status}</span> : null}
            {project.featured ? <span className="inverted-chip">Featured</span> : null}
          </div>
        </div>

        <h3>
          {project.detailPath ? <Link href={project.detailPath}>{project.title}</Link> : project.title}
        </h3>
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

        {project.impactPlaceholder ? (
          <div className="project-impact-placeholder">
            <span className="micro-label">Impact / outcome · reserved</span>
            <p>{project.impactPlaceholder}</p>
          </div>
        ) : null}

        <div className="tag-row">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          {project.detailPath ? <Link href={project.detailPath}>View case study →</Link> : null}
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live system ↗</a> : null}
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
