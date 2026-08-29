import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/achievements";
import { organizations } from "@/data/organizations";
import { participations } from "@/data/participations";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />

      <main id="main" className="site-main">
        <section className="hero section" id="top">
          <div className="hero-halftone halftone" aria-hidden="true" />
          <div className="eyebrow-row reveal reveal-1">
            <span>Portfolio / 2026</span>
            <span>Philippines</span>
          </div>

          <div className="hero-copy reveal reveal-2">
            <p className="micro-label">Hello, I’m</p>
            <h1>stephen<br />pinacate.</h1>
            <p className="hero-lead">
              A full-stack developer and computer engineering student building practical software across web, mobile, desktop, and AI-assisted systems.
            </p>
          </div>

          <div className="hero-actions reveal reveal-3">
            <a className="primary-button" href="#projects">Explore my work <span>↓</span></a>
            <a className="text-link" href="https://github.com/Stephware" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>

          <div className="hero-stats reveal reveal-4">
            <div><span className="micro-label">Focus</span><strong>Full-stack + practical AI</strong></div>
            <div><span className="micro-label">Core stack</span><strong>.NET · React · SQL</strong></div>
            <div><span className="micro-label">Builds</span><strong>Web · Mobile · Desktop</strong></div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading index="02" label="selected work" title="Systems built around real operational problems.">
            <p>From multi-branch clinic operations and university workflows to public-transport navigation and numerical computing, these projects show the range of problems I like turning into usable software.</p>
          </SectionHeading>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
          </div>
        </section>

        <section className="section" id="achievements">
          <SectionHeading index="03" label="achievements" title="Recognition across academics, competitions, and organizations.">
            <p>A record of academic distinctions, technical competition results, scholarships, and organizational recognition — presented with the context behind each milestone.</p>
          </SectionHeading>
          <div className="achievement-list">
            {achievements.map((item, index) => (
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
        </section>

        <section className="section" id="leadership">
          <SectionHeading index="04" label="leadership & organizations" title="Roles that grew with responsibility.">
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
          <SectionHeading index="05" label="competitions & participation" title="Technical competition experience beyond the podium.">
            <p>Not every valuable competition ends with an award. These entries highlight technical environments where I tested networking, electronics, troubleshooting, and problem-solving skills.</p>
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
          <SectionHeading index="06" label="about & skills" title="Full-stack work, grounded in systems thinking.">
            <p>I work across the software stack and enjoy projects where architecture, data, interface design, and real operational constraints have to work together.</p>
          </SectionHeading>
          <div className="about-grid">
            <div className="about-copy">
              <p>I’m a Computer Engineering student focused on full-stack software development and practical AI integration. My projects span clinic operations, academic workflows, transportation, numerical computing, and mobile applications.</p>
              <p>Alongside development, I’ve taken on progressively larger leadership roles in AUF CEA and ICpEP.se, giving me experience working with teams, organizations, and real institutional processes — not only code.</p>
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
          <p className="section-index">07 — contact</p>
          <div className="contact-copy">
            <span className="micro-label">Let’s build something useful.</span>
            <h2>Have an opportunity,<br />project, or idea?</h2>
            <p>My public contact details, LinkedIn profile, and résumé can be added here once the final links are ready.</p>
            <div className="hero-actions">
              <a className="primary-button" href="https://github.com/Stephware" target="_blank" rel="noreferrer">View GitHub ↗</a>
              <span className="text-link muted">Email — add later</span>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <span>© 2026 Stephen Pinacate</span>
          <span>Designed with restraint. Built to evolve.</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}
