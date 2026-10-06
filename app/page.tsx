import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { experience, notes, projects } from "./data/portfolio";

const focusAreas = [
  { title: "World Models & Reinforcement Learning", detail: "Learning environment dynamics, exploration, and planning." },
  { title: "Language Model Training & Evaluation", detail: "Understanding the pipeline from data and training to adaptation, evaluation, and inference." },
  { title: "Computer Vision & Inference", detail: "Building and deploying visual systems efficiently." },
];

export default function Home() {
  const leadProjects = projects.slice(0, 4);

  return (
    <main className="manual-site">
      <div className="manual-topline"><span>YASH KHAIRNAR / PERSONAL OPERATING MANUAL</span><span>VER. 2026.10</span><span>AVAILABLE FOR NEW GRAD 2027</span></div>
      <nav className="manual-nav"><a href="#top" className="manual-wordmark">YK<span>.</span></a><div><a href="#work">INDEX / WORK</a><a href="#method">METHOD</a><a href="#log">LOG</a><a href="#contact">CONTACT</a></div><a className="manual-menu" href="mailto:yashkvk7@gmail.com">INQUIRE <ArrowUpRight size={15} /></a></nav>

      <section className="manual-lead" id="top">
        <div className="manual-lead-label"><span>01</span><span>INTRODUCTION</span><span>AI / ML ENGINEER<br />SAN JOSE, CA</span></div>
        <h1>AI / ML<br /><span>ENGINEER.</span></h1>
        <div className="manual-hero-tags"><span>WORLD MODELS</span><span>LM TRAINING</span><span>VISION SYSTEMS</span></div>
        <div className="manual-lead-side"><p className="manual-hero-tagline">Learning, reasoning, and perception.</p><p>I&apos;m an MSCS student at San José State University, graduating in May 2027. My current research explores action-conditioned world models, and my industry experience includes deploying computer vision systems and optimizing inference.</p><p>I&apos;m interested in how agents learn unfamiliar environments, how language models are trained and evaluated, and how visual representations support intelligent behavior.</p><div className="manual-hero-links"><a href="#method">RESEARCH <ArrowUpRight size={14} /></a><a href="#work">ENGINEERING <ArrowUpRight size={14} /></a><a href="https://github.com/YashKhairnar" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} /></a><a href="/YashKhairnar_resume.pdf" download>RESUME <ArrowUpRight size={14} /></a></div></div>
        <div className="manual-stamp">YK<br /><small>CS / AI<br />01—26</small></div>
      </section>

      <section className="manual-statement" id="method">
        <div className="manual-label"><span>02</span><span>STATEMENT</span></div>
        <div className="manual-statement-content"><p className="manual-big-copy">I build and study systems that learn from data, experience, and perception.</p><div className="manual-small-copy"><p>My work sits between research and engineering: make the idea legible, make the system useful, then learn from what breaks.</p><a className="manual-download" href="/YashKhairnar_resume.pdf" download><Download size={16} /> DOWNLOAD RÉSUMÉ</a></div></div>
        <div className="manual-focus-heading"><span>FOCUS AREAS</span><span>WHAT I EXPLORE</span></div>
        <div className="manual-disciplines">{focusAreas.map((area, index) => <div key={area.title}><span>0{index + 1}</span><strong>{area.title}</strong><p>{area.detail}</p><ArrowUpRight size={16} /></div>)}</div>
      </section>

      <section className="manual-work" id="work">
        <div className="manual-label manual-label-light"><span>03</span><span>WORK INDEX</span><span>SELECTED BUILDS / 2025—26</span></div>
        <div className="manual-work-head"><h2>Selected<br /><em>systems.</em></h2><p>Four ways of making intelligence useful: retrieve it, translate it, coordinate it, deploy it.</p></div>
        <div className="manual-project-list">{leadProjects.map((project, index) => <article className="manual-project" key={project.slug}><div className="manual-project-num">0{index + 1}</div><div className="manual-project-main"><div className="manual-project-title"><span>{project.year} / {project.stack.split(",")[0]}</span><h3>{project.title}</h3></div><p>{project.description}</p><div className="manual-project-footer"><small>{project.stack}</small>{project.caseStudy ? <Link href={`/work/${project.slug}`}>CASE STUDY <ArrowUpRight size={14} /></Link> : <a href={project.links[0]?.href} target="_blank" rel="noreferrer">OPEN PROJECT <ArrowUpRight size={14} /></a>}</div></div><div className="manual-project-thumb"><img src={project.image} alt={project.title} /></div></article>)}</div><Link className="manual-all-work" href="/projects">VIEW COMPLETE PROJECT INDEX <ArrowRight size={16} /></Link>
      </section>

      <section className="manual-log" id="log">
        <div className="manual-label"><span>04</span><span>FIELD LOG</span></div>
        <div className="manual-log-grid"><h2>A timeline of<br /><em>useful mistakes.</em></h2><div className="manual-log-list">{experience.slice(0, 5).map((item, index) => <article key={`${item.role}-${item.org}`}><span className="manual-log-index">0{index + 1}</span><time>{item.dates}</time><div><h3>{item.role}</h3><p>{item.org}</p><p className="manual-log-detail">{item.points[0]}</p></div></article>)}</div></div>
      </section>

      <section className="manual-notes"><div className="manual-label"><span>05</span><span>READING ROOM</span><a href="https://yashkhairnar.medium.com" target="_blank" rel="noreferrer">ALL NOTES <ArrowUpRight size={14} /></a></div><div className="manual-notes-head"><h2>Notes from<br /><em>the bench.</em></h2><p>Explanations, comparisons, and first-principles thinking about the systems I build.</p></div><div className="manual-notes-grid">{notes.slice(0, 3).map((note, index) => <a className="manual-note" key={note.title} href={note.href} target="_blank" rel="noreferrer"><span>0{index + 1} / ESSAY</span><h3>{note.title}</h3><p>{note.detail}</p><strong>READ <ArrowUpRight size={14} /></strong></a>)}</div></section>

      <section className="manual-contact" id="contact"><div className="manual-label manual-label-light"><span>06</span><span>FINAL PAGE</span></div><div className="manual-contact-copy"><p className="manual-overline">IF THE PROBLEM IS INTERESTING,</p><h2>Let&apos;s get<br /><i>to work.</i></h2><a href="mailto:yashkvk7@gmail.com">YASHKVK7@GMAIL.COM <ArrowUpRight size={20} /></a></div><div className="manual-contact-side"><p>Open to AI/ML engineering, machine learning engineering, and software engineering roles.</p><div><a href="https://github.com/YashKhairnar" target="_blank" rel="noreferrer"><Github size={17} /> GITHUB</a><a href="https://www.linkedin.com/in/yashkhairnar11/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN</a></div></div><footer><span>© 2026 YASH KHAIRNAR</span><span>MADE IN SAN JOSE / 37.3387° N</span><span>END OF MANUAL</span></footer></section>
    </main>
  );
}
