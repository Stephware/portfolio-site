import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/achievements";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

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
              A full-stack developer and computer engineering student building practical software across web, mobile, and AI-assisted systems.
            </p>
          </div>

          <div className="hero-actions reveal reveal-3">
            <a className="primary-button" href="#projects">Explore my work <span>↓</span></a>
            <a className="text-link" href="https://github.com/Stephware" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>

          <div className="hero-stats reveal reveal-4">
            <div><span className="micro-label">Focus</span><strong>Full-stack + AI</strong></div>
            <div><span className="micro-label">Primary stack</span><strong>.NET · SQL · Kotlin</strong></div>
            <div><span className="micro-label">Status</span><strong>Building & learning</strong></div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading index="02" label="selected work" title="Projects with room to tell the full story.">
            <p>These are intentionally built as case-study slots. Later each project can hold screenshots, your role, technical decisions, challenges, results, repository links, and a live demo.</p>
          </SectionHeading>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
          </div>
          <div className="reserved-row"><span>+</span><p>More projects can be added without changing the visual system.</p></div>
        </section>

        <section className="section" id="achievements">
          <SectionHeading index="03" label="achievements" title="Milestones deserve more than a badge wall.">
            <p>Awards, competitions, certifications, academic distinctions, leadership milestones, publications, and other recognition can live here with enough context to mean something.</p>
          </SectionHeading>
          <div className="achievement-list">
            {achievements.map((item, index) => (
              <article className={`achievement-row ${index === achievements.length - 1 ? "reserved" : ""}`} key={`${item.year}-${index}`}>
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

        <section className="section" id="experience">
          <SectionHeading index="04" label="experience" title="What you did, not just where you were.">
            <p>This section is prepared for internships, organizations, freelance work, research, hackathons, and leadership roles.</p>
          </SectionHeading>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.period}>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <span className="micro-label">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading index="05" label="about" title="Engineering software around real problems.">
            <p>This is where your story will go: how you became interested in software, what you care about building, and where you want to grow next.</p>
          </SectionHeading>
          <div className="about-grid">
            <div className="about-copy">
              <p>For now, this copy is intentionally light. When you’re ready, we’ll turn your background into a concise professional narrative instead of a generic “passionate developer” paragraph.</p>
              <p>We can also add a portrait, résumé, education, current availability, and the types of roles you want to pursue.</p>
            </div>
            <div className="stack-panel">
              <p className="micro-label">Current toolkit</p>
              <div><span>Backend</span><strong>C# · ASP.NET Core · EF Core</strong></div>
              <div><span>Database</span><strong>SQL Server · Supabase</strong></div>
              <div><span>Frontend</span><strong>Razor · JavaScript · TypeScript</strong></div>
              <div><span>Mobile</span><strong>Kotlin · Android</strong></div>
              <div><span>AI</span><strong>RAG · API integration</strong></div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-halftone halftone" aria-hidden="true" />
          <p className="section-index">06 — contact</p>
          <div className="contact-copy">
            <span className="micro-label">Let’s build something useful.</span>
            <h2>Have an opportunity,<br />project, or idea?</h2>
            <p>Contact details will go here once you decide which email, LinkedIn profile, résumé, and other links you want public.</p>
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
