"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "+50", label: "Projetos" },
  { value: "+5", label: "Anos" },
  { value: "+30", label: "Clientes" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Heading
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Text
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        }
      );

      // Stats
      const statItems = statsRef.current?.querySelectorAll(".stat-item");
      if (statItems) {
        gsap.fromTo(
          statItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
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
      id="about"
      className="relative py-24 md:py-40 px-6 md:px-16 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top line */}
        <div
          ref={lineRef}
          className="h-[1px] bg-white/10 mb-16 md:mb-24 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <div>
            <p className="text-text-secondary text-xs tracking-[0.3em] uppercase font-body mb-6">
              Sobre nós
            </p>
            <h2
              ref={headingRef}
              className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight text-text-primary"
            >
              Transformamos ideias em{" "}
              <span className="gradient-text">experiências</span> extraordinárias
            </h2>
          </div>

          {/* Right */}
          <div ref={textRef} className="flex flex-col gap-8 md:pt-20">
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              A GMX Digital é uma agência boutique especializada em criar
              experiências digitais de alto impacto. Combinamos design sofisticado
              com tecnologia de ponta para entregar projetos que elevam marcas ao
              próximo nível.
            </p>
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              Nossa abordagem une estratégia, estética e performance em cada
              projeto — do branding ao desenvolvimento, do motion ao digital.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-8 mt-20 md:mt-32 pt-12 border-t border-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="font-display font-bold text-5xl md:text-7xl gradient-text block">
                {stat.value}
              </span>
              <span className="font-body text-text-secondary text-sm md:text-base tracking-widest uppercase mt-2 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
