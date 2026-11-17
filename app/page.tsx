import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { education, experience, notes, projects } from "./data/portfolio";

export default function Home() {
  const selected = projects.slice(0, 6);

  return (
    <main className="page">
      <header className="site-header">
        <Link href="/" className="wordmark">Yash Khairnar</Link>
        <nav>
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="/YashKhairnar_resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
        </nav>
      </header>

      <section className="intro">
        <h1>ML/AI engineer working across <span className="accent">LLMs, reinforcement learning, and computer vision.</span></h1>
        <p>
          I build intelligent systems that learn, reason, and act, and use CUDA, TensorRT, and ONNX
          to make them run fast. I&apos;m doing an MS in Computer Science at San José State University (Graduating May 2027).
        </p>
        <p className="muted">Seeking 2027 AI/ML engineering and research engineering roles.</p>
        <div className="link-row">
          <a href="mailto:yashkvk7@gmail.com">Email</a>
          <a href="https://github.com/YashKhairnar" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yashkhairnar11/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://yashkhairnar.medium.com" target="_blank" rel="noreferrer">Medium</a>
        </div>
      </section>

      <section id="work">
        <h2>Selected work</h2>
        <ul className="entries">
          {selected.map((project) => {
            const href = project.caseStudy ? `/work/${project.slug}` : project.links[0]?.href;
            const external = !project.caseStudy;
            return (
              <li key={project.slug}>
                <a className="entry" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <div className="entry-head">
                    <h3>{project.title}{external && <ArrowUpRight size={14} />}</h3>
                    <span className="meta">{project.year}</span>
                  </div>
                  <p>{project.description}</p>
                  <p className="meta">{project.stack}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <Link className="more" href="/projects">All projects →</Link>
      </section>

      <section>
        <h2>Experience</h2>
        <ul className="entries">
          {experience.map((item) => (
            <li key={`${item.role}-${item.org}`} className="entry static">
              <div className="entry-head">
                <h3>{item.role}</h3>
                <span className="meta">{item.dates}</span>
              </div>
              <p className="muted">{item.org}</p>
              <p>{item.points[0]}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="writing">
        <h2>Writing</h2>
        <ul className="entries">
          {notes.map((note) => (
            <li key={note.title}>
              <a className="entry" href={note.href} target="_blank" rel="noreferrer">
                <h3>{note.title}<ArrowUpRight size={14} /></h3>
                <p>{note.detail}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul className="entries">
          {education.map((item) => (
            <li key={item.school} className="entry static">
              <div className="entry-head">
                <h3>{item.school}</h3>
                <span className="meta">{item.location}</span>
              </div>
              <p className="muted">{item.degree}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <span>© 2026 Yash Khairnar</span>
        <a href="mailto:yashkvk7@gmail.com">yashkvk7@gmail.com</a>
      </footer>
    </main>
  );
}
