"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.8 });

    tl.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );

    // Pulse animation for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 4,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 noise-overlay overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d1a] to-[#0a0a0a] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <h1
          ref={titleRef}
          className="font-display font-bold text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight text-text-primary mb-8"
        >
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="block">
              Criamos
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2Ref} className="block gradient-text">
              Experiências
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line3Ref} className="block">
              Digitais
            </span>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p
            ref={subtitleRef}
            className="font-body text-text-secondary text-lg md:text-xl max-w-md leading-relaxed"
          >
            Design imersivo, desenvolvimento de alta performance e estratégia
            digital que transforma marcas em experiências memoráveis.
          </p>

          <div
            ref={scrollIndicatorRef}
            className="flex flex-col items-center gap-2 opacity-0"
          >
            <span className="text-text-secondary text-xs tracking-[0.2em] uppercase font-body">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
