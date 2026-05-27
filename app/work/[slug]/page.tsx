import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IconLink } from "@/app/components/icon-link";
import { projects } from "@/app/data/portfolio";

const caseStudyProjects = projects.filter((project) => project.caseStudy);

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function TextLink({
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

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#deded4] py-8 sm:py-10">
      <h2 className="mb-5 font-serif-display text-2xl text-[#161712]">{title}</h2>
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

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Yash Khairnar`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.slug === slug);

  if (!project?.caseStudy) {
    notFound();
  }

  const study = project.caseStudy;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <article className="mx-auto w-full max-w-[780px] px-5 py-7 sm:px-6 sm:py-10">
        <nav className="mb-10 font-mono-note text-[13px] text-[#50544a]">
          <TextLink href="/">index</TextLink>
        </nav>

        <header className="border-b border-[#deded4] pb-10">
          <p className="font-mono-note text-xs uppercase tracking-[0.18em] text-[#65685c]">
            Case study / {project.year}
          </p>
          <h1 className="mt-5 font-serif-display text-5xl leading-none text-[#11120e] sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[42rem] text-lg leading-8 text-[#393b34]">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 font-mono-note text-[13px] text-[#50544a]">
            {project.links.map((link) => (
              <IconLink key={link.label} href={link.href} label={link.label} />
            ))}
          </div>
          <p className="mt-5 font-mono-note text-[12px] leading-6 text-[#6d7164]">
            {project.stack}
          </p>
        </header>

        <figure className="border-b border-[#deded4] py-8 sm:py-10">
          <img
            src={project.image}
            alt={`${project.title} interface`}
            className="w-full rounded-[6px] border border-[#d7d7cb] bg-white object-cover"
          />
        </figure>

        <CaseSection title="Problem">
          <p className="text-[15px] leading-7 text-[#393b34]">{study.problem}</p>
        </CaseSection>

        <CaseSection title="System Shape">
          <ol className="space-y-3 text-[15px] leading-7 text-[#393b34]">
            {study.architecture.map((step, index) => (
              <li key={step} className="grid grid-cols-[28px_1fr] gap-3">
                <span className="font-mono-note text-[13px] text-[#74786a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection title="Highlights">
          <DashList items={study.highlights} />
        </CaseSection>

        <CaseSection title="Lessons">
          <DashList items={study.lessons} />
        </CaseSection>

        <CaseSection title="What I Would Do Next">
          <p className="text-[15px] leading-7 text-[#393b34]">{study.next}</p>
        </CaseSection>

        <footer className="border-t border-[#deded4] py-8 font-mono-note text-xs text-[#74786a]">
          <TextLink href="/">Back to index</TextLink>
        </footer>
      </article>
    </main>
  );
}
