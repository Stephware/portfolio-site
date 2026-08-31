import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { PortfolioPlaceholderStyles } from "@/components/PortfolioPlaceholderStyles";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/achievements";
import {
  careerLinks,
  currentBuild,
  experiencePlaceholders,
  futureProofPlaceholders,
  postGraduationProfile,
  recommendationPlaceholders,
} from "@/data/career";
import { education } from "@/data/education";
import { organizations } from "@/data/organizations";
import { participations } from "@/data/participations";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.homepage === "featured");
  const moreProjects = projects.filter((project) => project.homepage === "more");
  const primaryAchievements = achievements.filter((item) => !item.earlier);
  const earlierAchievements = achievements.filter((item) => item.earlier);

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
                <a className="text-link" href="https://github.com/Stephware" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="text-link" href="mailto:pinacate.stephen@gmail.com">Email ↗</a>
              </div>
            </div>

            <figure className="portrait-slot">
              <Image
                className="portrait-image"
                src="/stephen-pinacate.webp"
                alt="Stephen Pinacate"
                fill
                priority
                sizes="(max-width: 767px) 272px, 208px"
              />
              <div className="portrait-shade" aria-hidden="true" />
              <figcaption>Stephen Pinacate · 2026</figcaption>
            </figure>
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
        </section>

        <section className="section" id="experience">
          <SectionHeading index="03" label="experience & career proof" title="Reserved now. Replaced with verified proof as it becomes available.">
            <p>These placeholders keep the next career-ready pieces visible so they can be filled with real OJT experience, links, metrics, certifications, and post-graduation positioning later.</p>
          </SectionHeading>

          <div className="career-proof-grid">
            {experiencePlaceholders.map((item) => (
              <article className="career-placeholder-card" key={`${item.organization}-${item.role}`}>
                <div className="placeholder-card-meta">
                  <span>{item.period}</span>
                  <span className="reserved-chip">Reserved</span>
                </div>
                <span className="micro-label">Experience / OJT</span>
                <h3>{item.role}</h3>
                <strong>{item.organization}</strong>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}

            <article className="career-placeholder-card current-build-card">
              <div className="placeholder-card-meta">
                <span>Currently building</span>
                <span className="reserved-chip active-chip">In progress</span>
              </div>
              <span className="micro-label">Thesis / active development</span>
              <h3>{currentBuild.title}</h3>
              <strong>{currentBuild.status}</strong>
              <p>{currentBuild.description}</p>
              <div className="tag-row compact-tags">
                {currentBuild.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <p className="placeholder-reminder">{currentBuild.reminder}</p>
            </article>
          </div>

          <div className="career-subsection recruiter-placeholder-panel">
            <div className="career-subsection-heading">
              <span className="micro-label">Recruiter links · reserved</span>
              <h3>Replace these with final, working links before applications.</h3>
            </div>
            <div className="reserved-link-grid">
              {careerLinks.map((item) => (
                <div className="reserved-link" key={item.label}>
                  <strong>{item.label}</strong>
                  <span>Not linked yet</span>
                  <p>{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <details className="future-proof-details">
            <summary>
              <span>
                <span className="micro-label">Later additions</span>
                <strong>Certifications, technical writing & graduation updates</strong>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div className="future-proof-content">
              <div className="future-proof-grid">
                {futureProofPlaceholders.map((item) => (
                  <article key={item.title}>
                    <span className="reserved-chip">Reserved</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <small>{item.examples}</small>
                  </article>
                ))}
              </div>

              <article className="graduation-copy-placeholder">
                <span className="micro-label">Post-graduation hero copy · reserved</span>
                <h3>{postGraduationProfile.eyebrow}</h3>
                <p>{postGraduationProfile.lead}</p>
                <strong>{postGraduationProfile.educationLine}</strong>
                <small>{postGraduationProfile.availability}</small>
                <p className="placeholder-reminder">{postGraduationProfile.heroStatReminder}</p>
              </article>
            </div>
          </details>
        </section>

        <section className="section" id="recommendations">
          <SectionHeading index="04" label="recommendations" title="External proof from people who have worked with me.">
            <p>This section is reserved for verified recommendations once they are available, so professional and academic validation can stand on its own instead of being buried inside experience.</p>
          </SectionHeading>
          <div className="recommendation-grid">
            {recommendationPlaceholders.map((item) => (
              <article className="recommendation-placeholder" key={item.relationship}>
                <span className="micro-label">{item.relationship}</span>
                <blockquote>“{item.quote}”</blockquote>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="achievements">
          <SectionHeading index="05" label="achievements" title="Recognition across academics, competitions, and organizations.">
            <p>Recent and career-relevant distinctions stay visible first, while earlier mathematics awards remain available without crowding the main story.</p>
          </SectionHeading>
          <div className="achievement-list">
            {primaryAchievements.map((item, index) => (
              <article className="achievement-row" key={`${item.year}-${item.title}`}>
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

          {earlierAchievements.length > 0 ? (
            <details className="earlier-achievements">
              <summary>
                <span>Earlier academic distinctions</span>
                <span aria-hidden="true">+</span>
              </summary>
              <div className="achievement-list">
                {earlierAchievements.map((item, index) => (
                  <article className="achievement-row" key={`${item.year}-${item.title}`}>
                    <span className="achievement-year">{item.year}</span>
                    <div>
                      <span className="micro-label">{item.eyebrow}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <span className="achievement-index">E{index + 1}</span>
                  </article>
                ))}
              </div>
            </details>
          ) : null}
        </section>

        <section className="section" id="leadership">
          <SectionHeading index="06" label="leadership & organizations" title="Roles that grew with responsibility.">
            <p>My leadership work spans student government, Computer Engineering organizations, and technical support roles within the AUF College of Engineering and Architecture community.</p>
          </SectionHeading>
          <div className="timeline leadership-timeline">
            {organizations.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.role}-${item.organization}`}>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <span className="micro-label">{item.organization}</span>
                  <h3>{item.role}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="competitions">
          <SectionHeading index="07" label="competitions & participation" title="Technical competition experience beyond the podium.">
            <p>These entries show technical environments where I tested networking, electronics, troubleshooting, and problem-solving skills even when the result was participation rather than a placement.</p>
          </SectionHeading>
          <div className="participation-grid">
            {participations.map((item, index) => (
              <article className="participation-card" key={item.title}>
                <div className="participation-meta">
                  <span>{item.year}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading index="08" label="about & skills" title="Full-stack work, grounded in systems thinking.">
            <p>I work across the software stack and enjoy projects where architecture, data, interface design, and real operational constraints have to work together.</p>
          </SectionHeading>
          <div className="about-grid">
            <div className="about-copy">
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
            <div className="stack-panel skills-panel">
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

        <section className="section contact-section" id="contact">
          <div className="contact-halftone halftone" aria-hidden="true" />
          <p className="section-index">09 — contact</p>
          <div className="contact-copy">
            <span className="micro-label">Open to software opportunities.</span>
            <h2>Building useful systems,<br />one problem at a time.</h2>
            <p>GitHub is available now. Resume, LinkedIn, and professional email are intentionally reserved above so the final links can be added before applications.</p>
            <div className="hero-actions">
              <a className="primary-button" href="https://github.com/Stephware" target="_blank" rel="noreferrer">View GitHub ↗</a>
              <a className="text-link" href="#experience">Career placeholders ↑</a>
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
