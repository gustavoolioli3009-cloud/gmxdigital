"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        emailRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: emailRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        socialsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-40 px-6 md:px-16 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-text-secondary text-xs tracking-[0.3em] uppercase font-body mb-8">
          Fale conosco
        </p>

        <h2
          ref={headingRef}
          className="font-display font-bold text-[clamp(2.5rem,7vw,6rem)] leading-tight text-text-primary mb-16 md:mb-24"
        >
          Vamos trabalhar <br />
          <span className="gradient-text">juntos?</span>
        </h2>

        <a
          ref={emailRef}
          href="mailto:contato@gmxdigital.com"
          className="group inline-block font-display font-bold text-[clamp(1.5rem,4vw,3.5rem)] text-text-primary hover:gradient-text transition-all duration-300 border-b-2 border-white/20 hover:border-[#6366f1] pb-2"
          aria-label="Send email to GMX Digital"
        >
          contato@gmxdigital.com
          <span className="ml-4 inline-block group-hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </a>

        <div ref={socialsRef} className="flex gap-8 mt-16 md:mt-24">
          {[
            { label: "Instagram", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Behance", href: "#" },
            { label: "Dribbble", href: "#" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="font-body text-text-secondary hover:text-white text-sm tracking-widest uppercase transition-colors duration-200 pb-1 border-b border-transparent hover:border-white"
              aria-label={`GMX Digital on ${social.label}`}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
