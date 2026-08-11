import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { education, experience, papers, projects, researchInterests } from "./data/portfolio";
import WritingCarousel from "./components/writing-carousel";

export default function Home() {
  return (
    <main className="terrain-site">
      <nav className="terrain-nav">
        <a href="#top" className="terrain-logo"><span>Y</span></a>
        <div><a href="#experience">EXPERIENCE</a><a href="#work">PROJECTS</a><a href="#education">EDUCATION</a><a href="#writing">WRITING</a></div>
        <a href="mailto:yashkvk7@gmail.com">CONTACT ↗</a>
      </nav>

      <section className="terrain-hero" id="top">
        <img src="/hero-neural-terrain.png" alt="A lone person standing on moss-covered terrain and looking into a vast galaxy" />
        <div className="hero-grain" />
        <p className="hero-kicker">YASH KHAIRNAR</p>
        <h1>WELCOME TO MY SPACE</h1>
        <p className="hero-credit">AI / ML ENGINEER<br />SAN JOSE, CALIFORNIA</p>
        <a href="#about" className="hero-scroll">DISCOVER MY WORK <ArrowDown size={14} /></a>
      </section>

      <section className="terrain-intro" id="about">
        <p className="section-code">[ 001 / ABOUT ]</p>
        <h2>About <em> Me.</em></h2>
        <div className="intro-grid">
          <div className="intro-bio">
            <p>Hi, I&apos;m a <strong>Master&apos;s student in Computer Science</strong> at <strong>San José State University</strong>.</p>
            <p>I currently work as a <strong>Graduate Researcher with the SJSU Research Foundation</strong> with Dr. Tshukudu and collaborate with <strong>Dr. Yuejiang Liu at Stanford University</strong>. My research focuses on <strong>self-improving, action-conditioned world models</strong> and <strong>long-horizon planning</strong> for intelligent agents. In Summer 2026, I also served as an <strong>AI/ML Instructor for Stanford AI4ALL</strong>, working with students on artificial intelligence, machine learning, and robotics.</p>
            <p>My broader interests span <strong>Large Language Models, Agentic AI, Reinforcement Learning, Computer Vision, Robotics, and Autonomous Systems</strong>. Prior to graduate school, I worked on industry projects involving the development, training, fine-tuning, optimization, and deployment of machine learning models. My experience spans <strong>AI/ML engineering, computer vision, backend systems, agent-based architectures, and autonomous systems</strong>.</p>
            <p>I particularly enjoy working at the intersection of <strong>world models, agents, and embodied intelligence</strong>, while continuing to explore how learning-based systems can become more adaptive, capable, and autonomous.</p>
            <p>I&apos;m always interested in connecting with researchers, engineers, and organizations working on AI, machine learning, robotics, world models, and intelligent systems.</p>
            <p className="opportunity-note">Currently seeking New Grad 2027 full-time opportunities in AI/ML, Machine Learning Engineering, and Software Engineering.</p>
            <a className="resume-download" href="/YashKhairnar_resume.pdf" download><Download size={15} /> DOWNLOAD RÉSUMÉ <span>PDF</span></a>
          </div>
          <div className="interest-list">
            <p className="interest-label">CURRENT INTERESTS</p>
            {researchInterests.map((item, i) => <p key={item}><span>0{i + 1}</span>{item}</p>)}
            {papers.map((paper) => <a className="paper-lab-card" key={paper.title} href={paper.link} target="_blank" rel="noreferrer"><span>PAPER REPRODUCTIONS &amp; LABS</span><strong>{paper.title}</strong><small>{paper.detail}</small><span className="paper-arrow">EXPLORE LABS <ArrowUpRight size={14} /></span></a>)}
          </div>
        </div>
      </section>

      <section className="terrain-path" id="experience">
        <header className="terrain-heading"><p className="section-code">[ 002 / EXPERIENCE ]</p><h2>Where I&apos;ve worked<br />and <em>what I built.</em></h2></header>
        <div className="path-list">
          {experience.map((item, i) => <article key={`${item.role}-${item.org}`}><span>0{i + 1}</span><p>{item.dates}</p><div className="path-role"><div className="org-logo"><img src={item.logo} alt={`${item.org} logo`} /></div><div><h3>{item.role}</h3><p>{item.org}</p></div></div><p>{item.points[0]}</p></article>)}
        </div>
      </section>

      <section className="terrain-work" id="work">
        <header className="terrain-heading"><p className="section-code">[ 003 / PROJECTS ]</p><h2>Selected <em>Projects.</em></h2></header>
        <div className="terrain-projects">
          {projects.slice(0, 6).map((project, i) => (
            <article className="terrain-project" key={project.slug}>
              <div className="project-image"><img src={project.image} alt={`${project.title} project`} /><span>FIG. {String(i + 1).padStart(2, "0")}</span></div>
              <div className="project-info">
                <p>{project.year} / EXPERIMENT {String(i + 1).padStart(2, "0")}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.stack}</small>
                <div>{project.caseStudy && <Link href={`/work/${project.slug}`}>CASE STUDY <ArrowUpRight size={14} /></Link>}{project.links.slice(0, 1).map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label.toUpperCase()} <ArrowUpRight size={14} /></a>)}</div>
              </div>
            </article>
          ))}
        </div>
        <Link className="all-work" href="/projects">EXPLORE THE FULL ARCHIVE <ArrowUpRight size={15} /></Link>
      </section>

      <section className="terrain-path terrain-education" id="education">
        <header className="terrain-heading"><p className="section-code">[ 004 / EDUCATION ]</p><h2>Academic<br /><em>foundation.</em></h2></header>
        <div className="path-list education-list">
          {education.map((item, i) => <article key={item.school}><span>0{i + 1}</span><p>{item.location}</p><div className="path-role"><div className="org-logo"><img src={item.logo} alt={item.logoAlt} /></div><div><h3>{item.degree}</h3><p>{item.school}</p></div></div><p>{item.detail}</p></article>)}
        </div>
      </section>

      <section className="terrain-writing" id="writing">
        <header className="terrain-heading"><p className="section-code">[ 005 / WRITING ]</p><h2>Ideas, explained<br />from <em>first principles.</em></h2><Link href="/blog" className="writing-archive-link">VIEW ALL WRITING <ArrowUpRight size={14} /></Link></header>
        <WritingCarousel />
      </section>

      <section className="terrain-contact">
        <p className="section-code">[ 006 / CONTACT ]</p>
        <h2>Let&apos;s build what<br />comes <em>next.</em></h2>
        <a href="mailto:yashkvk7@gmail.com">YASHKVK7@GMAIL.COM <ArrowUpRight /></a>
        <footer><p>© 2026 YASH KHAIRNAR</p><div><a href="https://github.com/YashKhairnar">GITHUB</a><a href="https://www.linkedin.com/in/yashkhairnar11/">LINKEDIN</a></div><p>37.3387° N / 121.8853° W</p></footer>
      </section>
    </main>
  );
}
