"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "Nexus Platform",
    category: "Web Design & Development",
    year: "2024",
    color: "#1a1a2e",
    size: "large",
  },
  {
    id: 2,
    title: "Lumis Brand",
    category: "Branding & Identity",
    year: "2024",
    color: "#16213e",
    size: "small",
  },
  {
    id: 3,
    title: "Orbit UI",
    category: "UI/UX Design",
    year: "2023",
    color: "#0f3460",
    size: "small",
  },
  {
    id: 4,
    title: "Pulse Motion",
    category: "Motion & Animation",
    year: "2023",
    color: "#1b1b3a",
    size: "large",
  },
  {
    id: 5,
    title: "Vega Strategy",
    category: "Digital Strategy",
    year: "2023",
    color: "#14213d",
    size: "small",
  },
  {
    id: 6,
    title: "Echo Commerce",
    category: "Web Design & Development",
    year: "2022",
    color: "#1a1035",
    size: "small",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-40 px-6 md:px-16 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <p className="text-text-secondary text-xs tracking-[0.3em] uppercase font-body mb-4">
              Nossos Trabalhos
            </p>
            <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight text-text-primary">
              Selected <br />
              <span className="gradient-text">Works</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-text-secondary hover:text-white text-sm tracking-widest uppercase transition-colors duration-200 font-body pb-1 border-b border-text-secondary hover:border-white"
          >
            Ver todos
          </a>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card group relative overflow-hidden rounded-sm cursor-pointer ${
                project.size === "large"
                  ? "md:col-span-8"
                  : "md:col-span-4"
              } ${i % 3 === 0 && project.size === "large" ? "md:col-start-1" : ""}`}
              style={{ aspectRatio: project.size === "large" ? "16/9" : "4/3" }}
            >
              {/* Placeholder image */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundColor: project.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/5" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <p className="text-text-secondary text-xs tracking-widest uppercase font-body mb-2">
                  {project.category}
                </p>
                <h3 className="font-display font-bold text-white text-2xl md:text-3xl">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1 font-body">
                  {project.year}
                </p>
              </div>

              {/* Always visible title on bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-end justify-between">
                  <span className="font-display font-medium text-white/60 text-sm">
                    {project.title}
                  </span>
                  <span className="text-text-secondary text-xs font-body">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
