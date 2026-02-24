"use client";

import { useEffect, useRef, useCallback } from "react";
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
    tag: "WEB",
  },
  {
    number: "02",
    title: "Branding & Identity",
    description:
      "Identidades visuais únicas que comunicam a essência da sua marca.",
    tag: "BRAND",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas e experiências de usuário que convertem e encantam.",
    tag: "DESIGN",
  },
  {
    number: "04",
    title: "Motion & Animation",
    description:
      "Animações e motion design que dão vida à sua marca digital.",
    tag: "MOTION",
  },
  {
    number: "05",
    title: "Digital Strategy",
    description:
      "Estratégia digital integrada para maximizar presença e resultados.",
    tag: "STRATEGY",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    // 3D tilt via rAF
    requestAnimationFrame(() => {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -5;
      const rotateY = ((x - cx) / cx) * 5;
      card.style.transform = `perspective(1000px) translateY(-10px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    card.style.setProperty("--mouse-x", "-9999px");
    card.style.setProperty("--mouse-y", "-9999px");
    card.style.transform = "";
  }, []);

  useEffect(() => {
    const cardEls =
      cardsRef.current?.querySelectorAll<HTMLElement>(".glass-card");
    cardEls?.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".glass-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      cardEls?.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-40 px-6 md:px-16 bg-[#080810]"
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

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`glass-card rounded-xl p-8 cursor-pointer${
                i === 4 ? " md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ willChange: "transform" }}
            >
              {/* Corner accents */}
              <div className="glass-corner glass-corner-tl" />
              <div className="glass-corner glass-corner-tr" />
              <div className="glass-corner glass-corner-bl" />
              <div className="glass-corner glass-corner-br" />

              {/* Content above glass effects */}
              <div className="relative z-[3]">
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-display font-bold text-4xl leading-none"
                    style={{
                      color: "var(--gmx-blue)",
                      textShadow: "0 0 20px rgba(0,242,254,0.5)",
                    }}
                  >
                    {service.number}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-body px-2 py-1"
                    style={{
                      color: "rgba(0,242,254,0.7)",
                      border: "1px solid rgba(0,242,254,0.2)",
                      background: "rgba(0,242,254,0.05)",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
