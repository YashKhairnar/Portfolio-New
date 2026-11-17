import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectArchive, projects } from "../data/portfolio";

export const metadata: Metadata = { title: "Projects — Yash Khairnar" };

export default function Projects() {
  const all = [
    ...projects.map((p) => ({ ...p, internal: Boolean(p.caseStudy) })),
    ...projectArchive.map((p) => ({ ...p, slug: p.title, internal: false })),
  ];

  return (
    <main className="page">
      <header className="site-header">
        <Link href="/" className="wordmark">Yash Khairnar</Link>
        <nav><Link href="/">← Home</Link></nav>
      </header>

      <section className="intro">
        <h1>Projects</h1>
        <p className="muted">Research builds, products, hackathon projects, and earlier experiments.</p>
      </section>

      <section>
        <ul className="entries">
          {all.map((project) => (
            <li key={project.slug} className="entry static">
              <div className="entry-head">
                <h3>
                  {project.internal ? <Link href={`/work/${project.slug}`}>{project.title}</Link> : project.title}
                </h3>
                <span className="meta">{project.year}</span>
              </div>
              <p>{project.description}</p>
              <p className="meta">{project.stack}</p>
              <div className="link-row small">
                {project.internal && <Link href={`/work/${project.slug}`}>Case study</Link>}
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}<ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
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
