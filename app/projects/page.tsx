import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projectArchive } from "../data/portfolio";

export default function Projects() {
  return (
    <main className="archive-page">
      <nav className="archive-nav">
        <Link href="/" className="terrain-logo"><span>Y</span> YASH KHAIRNAR</Link>
        <Link href="/"><ArrowLeft size={14} /> BACK TO PORTFOLIO</Link>
      </nav>

      <header className="archive-hero">
        <p className="section-code">[ INDEX / 001—{String(projectArchive.length).padStart(3, "0")} ]</p>
        <h1>Project<br /><em>archive.</em></h1>
        <div>
          <p>Additional projects, hackathon builds, research explorations, and earlier experiments.</p>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </header>

      <section className="archive-list" aria-label="Archived projects">
        <div className="archive-list-head"><span>NO.</span><span>YEAR</span><span>PROJECT / DESCRIPTION</span><span>TECHNOLOGIES</span></div>
        {projectArchive.map((project, index) => (
          <article className="archive-row" key={project.title}>
            <span className="archive-number">{String(index + 1).padStart(2, "0")}</span>
            <time>{project.year}</time>
            <div className="archive-main">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="archive-links">
                {project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label.toUpperCase()} <ArrowUpRight size={13} /></a>)}
              </div>
            </div>
            <p className="archive-stack">{project.stack}</p>
          </article>
        ))}
      </section>


      <footer className="archive-footer"><p>© 2026 YASH KHAIRNAR</p><p>SAN JOSE, CALIFORNIA</p></footer>
    </main>
  );
}
