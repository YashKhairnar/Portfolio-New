import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/portfolio";

const caseStudyProjects = projects.filter((project) => project.caseStudy);
type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.slug === slug);
  return project
    ? { title: `${project.title} — Yash Khairnar`, description: project.description }
    : { title: "Project Not Found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.slug === slug);
  if (!project?.caseStudy) notFound();
  const study = project.caseStudy;

  return (
    <main className="page">
      <header className="site-header">
        <Link href="/" className="wordmark">Yash Khairnar</Link>
        <nav><Link href="/#work">← Work</Link></nav>
      </header>

      <section className="intro">
        <p className="meta">{project.year}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="link-row">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}<ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </section>

      {project.image && (
        <figure className="figure">
          <img src={project.image} alt={`${project.title}`} />
          <figcaption>{project.stack}</figcaption>
        </figure>
      )}

      <article className="prose">
        <h2>Problem</h2>
        <p>{study.problem}</p>

        <h2>How it works</h2>
        <ol>{study.architecture.map((step) => <li key={step}>{step}</li>)}</ol>

        {study.results && (
          <>
            <h2>Results</h2>
            <div className="table-wrap">
              <table>
                <thead><tr>{study.results.headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {study.results.rows.map((row) => (
                    <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            {study.results.note && <p className="meta">{study.results.note}</p>}
          </>
        )}

        <h2>Highlights</h2>
        <ul>{study.highlights.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2>Lessons</h2>
        <ul>{study.lessons.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2>Next</h2>
        <p>{study.next}</p>
      </article>

      <footer className="site-footer">
        <Link href="/#work">← Back to work</Link>
        <span>© 2026 Yash Khairnar</span>
      </footer>
    </main>
  );
}
