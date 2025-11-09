import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    index: 0,
    title: "AetherForge",
    link: "https://www.loom.com/share/0916e2bfdd9e4918a204b51bcea43627",
    photo: "AetherForge.png",
    description:
      "It's a multi-agent AI IDE that allows multiple humans and specialized AI agents to edit the same codebase simultaneously using Gemini orchestration and Automerge (CRDTs) for conflict-free, real-time collaboration.",
    tech: ["CrewAI", "Agentic Workflow", "Automerge", "React.js"],
  },
  {
    index: 1,
    title: "CuriosityAI",
    link: "https://vimeo.com/1130720129?share=copy&fl=sv&fe=ci",
    photo: "curiosityAI.png",
    description:
      "An AI-powered agentic system that identifies innovation gaps in research landscapes using embedding inversion and retrieval-augmented generation, autonomously producing novel invention abstracts, sketches, and proposals to democratize R&D.",
    tech: [
      "CalHacks 12.0",
      "Machine learning",
      "Agentic AI",
      "Voice Agent",
      "Embedding Inversion",
      "RAG",
    ],
  },
  {
    index: 2,
    title: "ResuMatch",
    link: "https://drive.google.com/file/d/14aywsnvRjfeiIVkjFd6e3aDEQWGt9f9K/view",
    photo: "Resumatch.png",
    description:
      "ResuMatch is an AI-powered platform that recommends the most relevant job postings using Tavily and enhances user resumes through a self-improving reinforcement learning agent.",
    tech: ["Next.js", "Tavily", "Reinforcement Learning", "LangGraph", "Git", "Flask"],
  },
  {
    index: 3,
    title: "Slique",
    link: "https://www.slique.vercel.app",
    photo: "Slique.png",
    description:
      "A platform for connecting Fashion Models to Brand recruiters. Built with features like job posting, searching, application, real-time chatting, and online contract-based hiring.",
    tech: ["Next.js", "TailwindCSS", "FastAPI", "PostgreSQL", "AWS RDS", "Git"],
  },
  {
    index: 4,
    title: "Image Colorizer",
    link: "https://github.com/YashKhairnar/ImageColorizer",
    photo: "Image_Colorizer.jpg",
    description:
      "Give colors to your black and white photographs using deep learning models.",
    tech: ["Flask", "HTML/CSS", "NumPy", "OpenCv", "GAN", "Model Finetuning"],
  },
  {
    index: 5,
    title: "4Bit",
    link: "https://github.com/YashKhairnar/4BIT",
    photo: "Genetic-code.jpg",
    description:
      "A tool designed to diagnose lung cancer with the help of multi-omics data and CT scan images.",
    tech: ["Python", "Keras", "Tensorflow", "Multi Omics", "Biomarkers", "Genetic Mutations"],
  },
  {
    index: 6,
    title: "Roomie Radar",
    link: "https://github.com/YashKhairnar/RoomieRadar",
    photo: "roomieRadar.jpeg",
    description:
      "Roommate matching app that uses preference-based compatibility scoring to suggest the best fits.",
    tech: ["Next.js", "Machine Learning"],
  },
];

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
  const onInit = () => {
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  // Initialize + listen
  onInit();
  emblaApi.on("select", onSelect);
  emblaApi.on("reInit", onInit);

  // ✅ Cleanup must return void
  return () => {
    emblaApi.off("select", onSelect);
    emblaApi.off("reInit", onInit);
  };
}, [emblaApi]);


  return (
    <div className="w-full flex flex-col items-center">
      {/* Viewport */}
      <div className="embla overflow-hidden w-full" ref={emblaRef}>
        <div className="embla__container flex gap-4 px-4 sm:px-6 md:px-8">
          {projects.map((project) => (
            <div
              key={project.index}
              className="
                embla__slide
                min-w-0
                flex-[0_0_88%]
                sm:flex-[0_0_70%]
                lg:flex-[0_0_48%]
                xl:flex-[0_0_32%]
              "
            >
              <article className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <img
                    src={project.photo}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <header className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </header>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-indigo-600 dark:bg-indigo-400 scale-110"
                : "bg-zinc-400 dark:bg-zinc-600 hover:bg-zinc-500 dark:hover:bg-zinc-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
