import {
  coursework,
  education,
  experience,
  headerLinks,
  links,
  notes,
  papers,
  projectArchive,
  projects,
  researchInterests,
} from "./data/portfolio";
import FooterTerminal from "./components/footer-terminal";
import GoldenGateSketch from "./components/golden-gate-sketch";
import { IconLink } from "./components/icon-link";
import LocationMarkers from "./components/location-markers";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="underline decoration-[#9aa08f] decoration-1 underline-offset-[5px] transition hover:text-[#315f48] hover:decoration-[#315f48]"
    >
      {children}
    </a>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[#deded4] py-10 sm:py-12">
      <h2 className="mb-7 font-serif-display text-2xl text-[#161712] sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function DashList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-[15px] leading-7 text-[#393b34]">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[18px_1fr] gap-2">
          <span className="pt-[1px] font-mono-note text-[#7c806f]">-</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <GoldenGateSketch />
      <LocationMarkers />
      <div className="relative z-10 mx-auto w-full max-w-[780px] px-5 py-7 sm:px-6 sm:py-10">
        <header className="flex flex-col gap-7 border-b border-[#deded4] pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[560px]">
            <p className="font-mono-note text-xs uppercase tracking-[0.18em] text-[#65685c]">
              Portfolio
            </p>
            <h1 className="mt-5 font-serif-display text-5xl leading-none text-[#11120e] sm:text-6xl">
              Yash Khairnar
            </h1>
            <p className="mt-5 max-w-[35rem] text-lg leading-8 text-[#393b34]">
              AI/ML engineer and CS graduate student at SJSU focused on multi-modal
              AI systems. Welcome to my space.
            </p>
          </div>

          <div className="flex shrink-0 items-end gap-4 sm:flex-col sm:items-end">
            <img
              src="/Yash.jpeg"
              alt="Yash Khairnar"
              className="h-24 w-24 rounded-[6px] border border-[#d7d7cb] object-cover object-[center_30%] sm:h-28 sm:w-28"
            />
            <div className="flex flex-wrap gap-2 font-mono-note text-[13px] text-[#50544a] sm:justify-end">
              {headerLinks.map((link) => (
                <IconLink key={link.label} href={link.href} label={link.label} iconOnly />
              ))}
            </div>
          </div>
        </header>

        <nav
          aria-label="Main navigation"
          className="sticky top-0 z-10 -mx-5 border-b border-[#deded4] bg-[color:var(--background)]/94 px-5 py-3 backdrop-blur sm:-mx-6 sm:px-6"
        >
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono-note text-[13px] text-[#4d5047]">
            <a href="#education" className="transition hover:text-[#315f48]">
              education
            </a>
            <a href="#work" className="transition hover:text-[#315f48]">
              experience
            </a>
            <a href="#research" className="transition hover:text-[#315f48]">
              research/coursework
            </a>
            <a href="#notes" className="transition hover:text-[#315f48]">
              writing
            </a>
            <a href="#experience" className="transition hover:text-[#315f48]">
              experience
            </a>
            <a href="#archive" className="transition hover:text-[#315f48]">
              archive
            </a>
            <a href="#contact" className="transition hover:text-[#315f48]">
              contact
            </a>
          </div>
        </nav>


        <Section id="education" title="Education">
          <div className="space-y-6">
            {education.map((item) => (
              <article
                key={`${item.school}-${item.degree}`}
                className="flex gap-4 border-t border-[#e5e5dc] pt-5 first:border-t-0 first:pt-0 items-start transition-transform duration-300 hover:-translate-y-1"
              >
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.logoAlt}
                    className="shrink-0"
                    style={{ width: 64, height: 64, objectFit: 'contain' }}
                  />
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-medium text-[#20221d]">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#565a50]">
                    {item.school}
                  </p>
                  <p className="text-[13px] leading-6 text-[#74786a]">
                    {item.location}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#565a50]">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-7">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.org}`}
                className="flex gap-4 border-t border-[#e5e5dc] pt-5 first:border-t-0 first:pt-0 items-start transition-transform duration-300 hover:-translate-y-1"
              >
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.org}
                    className="shrink-0"
                    style={{ width: 80, height: 80, objectFit: 'contain' }}
                  />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-[15px] font-medium text-[#20221d]">
                      {item.role}
                    </h3>
                    <p className="font-mono-note text-[13px] leading-6 text-[#74786a] shrink-0">
                      {item.dates}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-[#565a50]">
                    {item.org}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#565a50]">
                    {item.points.map((point) => (
                      <li key={point} className="grid grid-cols-[16px_1fr] gap-2">
                        <span className="font-mono-note text-[#7c806f]">-</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" title="Research / Coursework">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 font-mono-note text-xs uppercase tracking-[0.16em] text-[#74786a]">
                Interests
              </h3>
              <DashList items={researchInterests} />
            </div>
            <div>
              <h3 className="mb-4 font-mono-note text-xs uppercase tracking-[0.16em] text-[#74786a]">
                Selected Coursework
              </h3>
              <DashList items={coursework} />
            </div>
          </div>
        </Section>

        <Section id="papers" title="Paper Reproductions">
          <div className="space-y-6">
            {papers.map((paper) => (
              <article
                key={paper.title}
                className="grid gap-2 border-t border-[#e5e5dc] pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[64px_1fr] transition-transform duration-300 hover:-translate-y-1"
              >
                <time className="font-mono-note text-[13px] text-[#777b6c]">
                  {paper.year}
                </time>
                <div>
                  <h3 className="text-sm font-medium text-[#20221d]">
                    <ExternalLink href={paper.link}>{paper.title}</ExternalLink>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#565a50]">
                    {paper.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="work" title="Projects">
          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid gap-3 border-t border-[#e5e5dc] pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[64px_1fr] transition-transform duration-300 hover:-translate-y-1"
              >
                <time className="font-mono-note text-[13px] text-[#777b6c]">
                  {project.year}
                </time>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-serif-display text-[22px] leading-7 text-[#151611]">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 font-mono-note text-[13px]">
                      {project.caseStudy ? (
                        <IconLink href={`/work/${project.slug}`} label="case study" />
                      ) : null}
                      {project.links.map((link) => (
                        <IconLink key={link.label} href={link.href} label={link.label} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-[15px] leading-7 text-[#363832]">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono-note text-[12px] leading-6 text-[#6d7164]">
                    {project.stack}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="notes" title="Writing">
          <div className="grid gap-4 sm:grid-cols-2">
            {notes.map((note) => (
              <article
                key={note.title}
                className="overflow-hidden rounded-lg border border-[#deded4] bg-white transition hover:border-[#315f48] hover:shadow-sm"
              >
                <a href={note.href} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={note.image}
                    alt={note.title}
                    className="h-40 w-full object-cover transition hover:opacity-90"
                  />
                </a>
                <div className="flex h-full flex-col gap-2 p-4">
                  <h3 className="text-[15px] font-medium leading-5 text-[#20221d]">
                    <ExternalLink href={note.href}>{note.title}</ExternalLink>
                  </h3>
                  <p className="flex-1 text-sm leading-5 text-[#5a5d54]">{note.detail}</p>
                  <div className="flex items-center justify-end pt-1">
                    <span className="inline-block rounded bg-[#f0f0eb] px-2 py-1 font-mono-note text-[11px] text-[#65685c]">
                      medium
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>


        <Section id="archive" title="Project Archive">
          <div className="space-y-6">
            {projectArchive.map((project) => (
              <article
                key={project.title}
                className="grid gap-2 border-t border-[#e5e5dc] pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[64px_1fr] transition-transform duration-300 hover:-translate-y-1"
              >
                <time className="font-mono-note text-[13px] text-[#777b6c]">
                  {project.year}
                </time>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[15px] font-medium text-[#20221d]">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 font-mono-note text-[13px]">
                      {project.links.map((link) => (
                        <IconLink key={link.label} href={link.href} label={link.label} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#565a50]">
                    {project.description}
                  </p>
                  <p className="mt-2 font-mono-note text-[12px] leading-6 text-[#6d7164]">
                    {project.stack}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-6 sm:grid-cols-[1fr_220px]">
            <p className="text-[15px] leading-7 text-[#393b34]">
              Email is the best way to reach me.
            </p>
            <div className="flex flex-col gap-2 font-mono-note text-[13px] text-[#50544a]">
              {links.map((link) => (
                <IconLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
          </div>
        </Section>

        <footer className="border-t border-[#deded4] py-8 font-mono-note text-xs text-[#74786a]">
          <p>Last updated May 2026.</p>
          <FooterTerminal />
        </footer>
      </div>
    </main>
  );
}
