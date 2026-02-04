import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    index: 10,
    title: 'Nook',
    link: 'https://nookstudio.online',
    photo: 'nook.png',
    description:
      "Find cafes nearby and much more",
    tech: ["Next.js", "Machine Learning", "React Native", "AWS", "CI/CD"],
  },
  {
    index: 9,
    title: 'Malware Classification',
    link: 'https://github.com/YashKhairnar/Malware-Classification',
    photo: 'malware.png',
    description: 'A comprehensive machine learning project for classifying malware samples into 12 different families',
    tech: ['PyTorch', 'CNN', 'DenseNet121', 'SVM', 'Grid Search', 'encoder-decoder', 'Machine Learning', 'Deep Learning']
  },
  {
    index: 8,
    title: 'Sentinel',
    link: 'https://dashboard.thesentinel.site',
    photo: 'sentinel.png',
    description: 'Serverless email marketing platform built on AWS with real-time analytics, AI-powered content generation, and multi-region deployment.',
    tech: ['AWS Lambda', 'AWS S3', 'AWS API Gateway', 'DynamoDB', 'SQS', 'SNS', 'SES', 'Terraform', 'Next.js', 'GitHub Actions']
  },
  {
    index: 7,
    title: "Agies",
    link: "https://github.com/YashKhairnar/Agies",
    photo: "Agies.png",
    description:
      "An AI-powered automated bug fixing agent that analyzes Sentry errors, identifies problematic code, proposes fixes, tests them in a sandbox environment, and creates draft pull requests.",
    tech: ["Agentic AI", "LangGraph", "Streamlit", "Sentry", "CodeRabbit", "Daytone Sandbox", "Github API"],
  },
  {
    index: 6,
    title: "AetherForge",
    link: "https://www.loom.com/share/0916e2bfdd9e4918a204b51bcea43627",
    photo: "AetherForge.png",
    description:
      "It's a multi-agent AI IDE that allows multiple humans and specialized AI agents to edit the same codebase simultaneously using Gemini orchestration and Automerge (CRDTs) for conflict-free, real-time collaboration.",
    tech: ["CrewAI", "Agentic Workflow", "Automerge", "React.js"],
  },
  {
    index: 5,
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
    index: 4,
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
    index: 2,
    title: "Image Colorizer",
    link: "https://github.com/YashKhairnar/ImageColorizer",
    photo: "Image_Colorizer.jpg",
    description:
      "Give colors to your black and white photographs using deep learning models.",
    tech: ["Flask", "HTML/CSS", "NumPy", "OpenCv", "GAN", "Model Finetuning"],
  },
  {
    index: 1,
    title: "4Bit",
    link: "https://github.com/YashKhairnar/4BIT",
    photo: "Genetic-code.jpg",
    description:
      "A tool designed to diagnose lung cancer with the help of multi-omics data and CT scan images.",
    tech: ["Python", "Keras", "Tensorflow", "Multi Omics", "Biomarkers", "Genetic Mutations"],
  },
  {
    index: 0,
    title: "Roomie Radar",
    link: "https://github.com/YashKhairnar/RoomieRadar",
    photo: "roomieRadar.jpeg",
    description:
      "Roommate matching app that uses preference-based compatibility scoring to suggest the best fits.",
    tech: ["Next.js", "Machine Learning"],
  }
];

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
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
              <TiltCard>
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
                        className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 hover:text-orange-900 dark:hover:text-orange-200 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition"
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
                          className="inline-flex items-center rounded-full bg-orange-50 dark:bg-orange-900/20 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-orange-700 dark:text-orange-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltCard>
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
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex
              ? "bg-orange-600 dark:bg-orange-400 scale-110"
              : "bg-orange-100 dark:bg-zinc-800 hover:bg-orange-200 dark:hover:bg-zinc-700"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};
