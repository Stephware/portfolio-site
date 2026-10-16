import Link from "next/link";
import { GitHubActivity } from "@/components/GitHubActivity";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Navigation } from "@/components/Navigation";
import { PortfolioPlaceholderStyles } from "@/components/PortfolioPlaceholderStyles";
import { ProjectCard } from "@/components/ProjectCard";
import { ResumePreviewLink } from "@/components/ResumePreview";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/achievements";
import { currentBuilds } from "@/data/career";
import { education } from "@/data/education";
import { hardwareProjects } from "@/data/hardware";
import { organizations } from "@/data/organizations";
import { participations } from "@/data/participations";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.homepage === "featured");
  const moreProjects = projects.filter((project) => project.homepage === "more");
  const primaryAchievements = achievements.filter((item) => !item.earlier).slice(0, 3);
  const recentOrganizations = organizations.slice(0, 4);
  const earlierOrganizations = organizations.slice(4);
  const primaryHardwareProjects = hardwareProjects.slice(0, 3);
  const moreHardwareProjects = hardwareProjects.slice(3);

  return (
    <>
      <PortfolioPlaceholderStyles />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />

      <main id="main" className="site-main">
        <section className="hero section" id="top">
          <div className="hero-halftone halftone" aria-hidden="true" />
          <div className="eyebrow-row reveal reveal-1">
            <span>Portfolio / 2026</span>
            <span>Philippines</span>
          </div>

          <div className="hero-main reveal reveal-2">
            <div className="hero-copy">
              <p className="micro-label">Hello, I’m</p>
              <h1>stephen<br />pinacate.</h1>
              <p className="hero-lead">
                A full-stack developer building software for real operational systems — from clinic platforms and university workflows to transportation and AI-assisted applications.
              </p>
              <p className="hero-subline">Computer Engineering · Angeles University Foundation</p>

              <div className="hero-actions">
                <a className="primary-button" href="#projects">Explore my work <span>↓</span></a>
                <ResumePreviewLink className="text-link">Resume →</ResumePreviewLink>
                <a className="text-link" href="https://www.linkedin.com/in/stephen-pinacate-3bb592319/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="text-link" href="https://github.com/Stephware" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>

            <HeroPortrait />
          </div>

          <div className="hero-credentials reveal reveal-3" aria-label="Selected achievements">
            <div><span className="micro-label">Scholarship</span><strong>DOST Scholar</strong><small>2023 — Present</small></div>
            <div><span className="micro-label">Academic</span><strong>University Scholar</strong><small>95 GWA · AUF</small></div>
            <div><span className="micro-label">Regional</span><strong>Overall Champion</strong><small>9th Regional CpE Challenge</small></div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading index="02" label="featured work" title="Systems built around real operational problems.">
            <p>My strongest projects are shown first with clear ownership, team size, technical scope, and the part I personally worked on.</p>
          </SectionHeading>

          <div className="project-grid">
            {featuredProjects.map((project) => <ProjectCard project={project} key={project.number} />)}
          </div>

          {moreProjects.length > 0 ? (
            <details className="more-projects">
              <summary>
                <span>
                  <span className="micro-label">Additional work</span>
                  <strong>View {moreProjects.length} more projects</strong>
                </span>
                <span className="more-projects-icon" aria-hidden="true">+</span>
              </summary>
              <div className="project-grid more-project-grid">
                {moreProjects.map((project) => <ProjectCard project={project} key={project.number} />)}
              </div>
            </details>
          ) : null}

          <div className="hero-actions">
            <Link className="primary-button" href="/projects">View all projects →</Link>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading index="03" label="experience & current work" title="Hands-on development across real systems.">
            <p>My experience is grounded in building and shipping software across solo and collaborative projects, with hands-on work in architecture, APIs, data, interfaces, deployment, and technical problem-solving.</p>
          </SectionHeading>

          <div className="career-proof-grid">
            {currentBuilds.map((build, index) => (
              <article className="career-placeholder-card current-build-card" data-reveal key={build.title}>
                <div className="placeholder-card-meta">
                  <span>{index === 0 ? "Thesis project" : "Current build"}</span>
                  <span className="reserved-chip active-chip">Active</span>
                </div>
                <span className="micro-label">Current work</span>
                <h3>{build.title}</h3>
                <strong>{build.status}</strong>
                <p>{build.description}</p>
                <div className="tag-row compact-tags">
                  {build.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-actions">
                  <a href={build.repository} target="_blank" rel="noreferrer">Repository ↗</a>
                </div>
              </article>
            ))}

            <article className="career-placeholder-card current-build-card" data-reveal>
              <div className="placeholder-card-meta">
                <span>Applied development</span>
                <span className="reserved-chip active-chip">Hands-on</span>
              </div>
              <span className="micro-label">Project-based experience</span>
              <h3>Full-stack systems development</h3>
              <strong>Web · Mobile · Desktop · Embedded systems</strong>
              <p>
                Built and co-built systems for clinic operations, university workflows, public transport,
                numerical computing, community platforms, and embedded projects, working across application
                architecture, databases, APIs, interfaces, deployment, and team collaboration.
              </p>
              <div className="tag-row compact-tags">
                {["ASP.NET Core", "C#", "SQL Server", "Kotlin", "Git / GitHub"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="recommendations">
          <SectionHeading index="04" label="recommendations" title="Perspectives from professors, mentors, and collaborators.">
            <p>Feedback focused on my technical work, problem-solving, reliability, leadership, and collaboration.</p>
          </SectionHeading>

          <div className="recommendation-grid">
            {["Professor / Adviser", "Faculty / Mentor", "Collaborator / Team Lead"].map((relationship) => (
              <article className="recommendation-placeholder" key={relationship}>
                <span className="micro-label">{relationship}</span>
                <div className="recommendation-placeholder-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="recommendation-placeholder-identity" aria-hidden="true">
                  <span />
                  <span />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="achievements">
          <SectionHeading index="05" label="achievements" title="Recognition across academics, competitions, and organizations.">
            <p>Selected highlights are shown here, with the complete achievement record available on the dedicated achievements page.</p>
          </SectionHeading>
          <div className="achievement-list">
            {primaryAchievements.map((item, index) => (
              <article className="achievement-row" key={item.year + "-" + item.title} data-reveal>
                <span className="achievement-year">{item.year}</span>
                <div>
                  <span className="micro-label">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="achievement-index">{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="primary-button" href="/achievements">View all achievements →</Link>
          </div>
        </section>

        <section className="section" id="leadership">
          <SectionHeading index="06" label="leadership & organizations" title="Roles that grew with responsibility.">
            <p>My leadership work spans student government, Computer Engineering organizations, and technical support roles within the AUF College of Engineering and Architecture community.</p>
          </SectionHeading>

          <div className="timeline leadership-timeline">
            {recentOrganizations.map((item) => (
              <article className="timeline-item" key={item.period + item.role + item.organization} data-reveal>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <span className="micro-label">{item.organization}</span>
                  <h3>{item.role}</h3>
                </div>
              </article>
            ))}
          </div>

          {earlierOrganizations.length > 0 ? (
            <details className="compact-details">
              <summary>
                <span>Earlier leadership roles · {earlierOrganizations.length}</span>
                <span className="compact-details-icon" aria-hidden="true">+</span>
              </summary>
              <div className="timeline leadership-timeline">
                {earlierOrganizations.map((item) => (
                  <article className="timeline-item" key={item.period + item.role + item.organization}>
                    <p className="timeline-period">{item.period}</p>
                    <div>
                      <span className="micro-label">{item.organization}</span>
                      <h3>{item.role}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </details>
          ) : null}
        </section>

        <section className="section" id="competitions">
          <SectionHeading index="07" label="competitions & participation" title="Competition experience across networking, hackathons, and electronics.">
            <p>Regional placement, finalist recognition, team leadership, and hands-on technical problem-solving across competitive environments.</p>
          </SectionHeading>
          <div className="competition-list">
            {participations.map((item, index) => (
              <article className="competition-row" key={item.title} data-reveal>
                <span className="competition-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="competition-index">{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading index="08" label="about & skills" title="Full-stack work, grounded in systems thinking.">
            <p>I work across the software stack and enjoy projects where architecture, data, interface design, and real operational constraints have to work together.</p>
          </SectionHeading>
          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <p>I’m a Computer Engineering student focused on full-stack software development and practical AI integration. My projects span clinic operations, academic workflows, transportation, numerical computing, and mobile applications.</p>
              <p>Alongside development, I’ve taken on progressively larger leadership roles in AUF CEA and ICpEP.se, giving me experience working with teams, organizations, and real institutional processes — not only code.</p>

              <article className="education-card">
                <span className="micro-label">Education</span>
                <h3>{education.institution}</h3>
                <p>{education.degree}</p>
                <div className="education-meta">
                  <span>{education.period}</span>
                  <span>{education.details.join(" · ")}</span>
                </div>
              </article>
            </div>
            <div className="stack-panel skills-panel" data-reveal>
              <p className="micro-label">Technical toolkit</p>
              {skills.map((group) => (
                <div key={group.category}>
                  <span>{group.category}</span>
                  <strong>{group.items.join(" · ")}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="hardware">
          <SectionHeading index="09" label="hardware & embedded" title="Software thinking applied to physical systems.">
            <p>Selected embedded and logic-design work covering sensing, control, actuation, and hardware-level problem-solving.</p>
          </SectionHeading>

          <div className="hardware-grid">
            {primaryHardwareProjects.map((project) => (
              <article className="hardware-card" key={project.number} data-reveal>
                <div className="hardware-card-meta">
                  <span>{project.number}</span>
                  <span>{project.status ?? "Embedded / hardware"}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="hardware-flow" aria-label={project.title + " system flow"}>
                  {project.flow.map((step) => <span key={step}>{step}</span>)}
                </div>

                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>

          {moreHardwareProjects.length > 0 ? (
            <details className="more-projects hardware-more">
              <summary>
                <span>
                  <span className="micro-label">Additional hardware work</span>
                  <strong>View {moreHardwareProjects.length} more hardware projects</strong>
                </span>
                <span className="more-projects-icon" aria-hidden="true">+</span>
              </summary>
              <div className="hardware-grid hardware-more-grid">
                {moreHardwareProjects.map((project) => (
              <article className="hardware-card" key={project.number} data-reveal>
                <div className="hardware-card-meta">
                  <span>{project.number}</span>
                  <span>{project.status ?? "Embedded / hardware"}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="hardware-flow" aria-label={project.title + " system flow"}>
                  {project.flow.map((step) => <span key={step}>{step}</span>)}
                </div>

                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
                ))}
              </div>
            </details>
          ) : null}
        </section>

        <section className="section" id="github">
          <SectionHeading index="10" label="github activity" title="Shipping work, visible in public.">
            <p>A live view of my GitHub contribution activity across the last year.</p>
          </SectionHeading>
          <GitHubActivity />
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-halftone halftone" aria-hidden="true" />
          <p className="section-index">11 — contact</p>
          <div className="contact-copy">
            <span className="micro-label">Open to software opportunities.</span>
            <h2>Building useful systems,<br />one problem at a time.</h2>
            <p>For software opportunities, project discussions, and collaboration, my resume, LinkedIn, GitHub, and email are available below.</p>
            <div className="hero-actions">
              <ResumePreviewLink className="primary-button">View Resume →</ResumePreviewLink>
              <a className="text-link" href="/Stephen-Pinacate-Resume.pdf" download="Stephen-Pinacate-Resume.pdf">Download Resume ↓</a>
              <a className="text-link" href="https://www.linkedin.com/in/stephen-pinacate-3bb592319/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="text-link" href="https://github.com/Stephware" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="text-link" href="mailto:pinacate.stephen@gmail.com">Email ↗</a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <span>© 2026 Stephen Pinacate</span>
          <span>Full-stack software · practical systems · continuous learning</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}
