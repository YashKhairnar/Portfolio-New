import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/portfolio";

const caseStudyProjects = projects.filter((project) => project.caseStudy);
type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return caseStudyProjects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} — Yash Khairnar`, description: project.description } : { title: "Project Not Found" };
}

function StudySection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="study-section"><p>{number}</p><div><h2>{title}</h2>{children}</div></section>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.slug === slug);
  if (!project?.caseStudy) notFound();
  const study = project.caseStudy;

  return <main className="study-page">
    <nav className="study-nav"><Link href="/"><ArrowLeft size={14} /> BACK TO PORTFOLIO</Link><span>CASE STUDY / {project.year}</span></nav>
    <header className="study-hero"><p className="section-code">[ PROJECT / {project.year} ]</p><h1>{project.title}</h1><p>{project.description}</p><div>{project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label.toUpperCase()} <ArrowUpRight size={14} /></a>)}</div></header>
    <figure className="study-visual"><img src={project.image} alt={`${project.title} interface`} /><figcaption>{project.stack}</figcaption></figure>
    <div className="study-body">
      <StudySection number="01" title="The Problem"><p>{study.problem}</p></StudySection>
      <StudySection number="02" title="System Architecture"><ol>{study.architecture.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, "0")}</span>{step}</li>)}</ol></StudySection>
      <StudySection number="03" title="Highlights"><ul>{study.highlights.map((item) => <li key={item}>{item}</li>)}</ul></StudySection>
      <StudySection number="04" title="Lessons"><ul>{study.lessons.map((item) => <li key={item}>{item}</li>)}</ul></StudySection>
      <StudySection number="05" title="What Comes Next"><p>{study.next}</p></StudySection>
    </div>
    <footer className="study-footer"><Link href="/#work"><ArrowLeft size={14} /> BACK TO SELECTED PROJECTS</Link><span>YASH KHAIRNAR / 2026</span></footer>
  </main>;
}
