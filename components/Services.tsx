"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Sites e aplicações web de alto desempenho com design excepcional.",
  },
  {
    number: "02",
    title: "Branding & Identity",
    description:
      "Identidades visuais únicas que comunicam a essência da sua marca.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas e experiências de usuário que convertem e encantam.",
  },
  {
    number: "04",
    title: "Motion & Animation",
    description:
      "Animações e motion design que dão vida à sua marca digital.",
  },
  {
    number: "05",
    title: "Digital Strategy",
    description:
      "Estratégia digital integrada para maximizar presença e resultados.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current?.querySelectorAll(".service-item");
      const lines = itemsRef.current?.querySelectorAll(".service-line");

      if (items) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (lines) {
        gsap.fromTo(
          lines,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.inOut",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: itemsRef.current,
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
      id="services"
      className="py-24 md:py-40 px-6 md:px-16 bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <p className="text-text-secondary text-xs tracking-[0.3em] uppercase font-body mb-4">
            O que fazemos
          </p>
          <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight text-text-primary">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
        </div>

        <div ref={itemsRef}>
          {services.map((service) => (
            <div key={service.number}>
              <div className="service-line h-[1px] bg-white/10 origin-left" />
              <div
                className="service-item glass-card group py-6 md:py-8 px-4 rounded-lg flex flex-col md:flex-row md:items-center gap-4 md:gap-0 cursor-pointer hover:pl-6 transition-all duration-300 my-1"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                <span className="relative z-10 font-display text-text-secondary text-sm font-bold w-16">
                  {service.number}
                </span>
                <h3 className="relative z-10 font-display font-bold text-2xl md:text-4xl text-text-primary group-hover:gradient-text transition-all duration-300 md:flex-1">
                  {service.title}
                </h3>
                <p className="relative z-10 font-body text-text-secondary text-sm md:text-base max-w-xs leading-relaxed md:ml-auto">
                  {service.description}
                </p>
                <span className="relative z-10 hidden md:block ml-12 text-text-secondary group-hover:text-white transition-colors duration-200">
                  →
                </span>
              </div>
            </div>
          ))}
          <div className="service-line h-[1px] bg-white/10 origin-left" />
        </div>
      </div>
    </section>
  );
}
