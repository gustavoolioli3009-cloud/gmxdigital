"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SCROLL_HIDE_THRESHOLD = 100;

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (navRef.current) {
        if (currentScroll > lastScroll && currentScroll > SCROLL_HIDE_THRESHOLD) {
          gsap.to(navRef.current, { yPercent: -100, duration: 0.4, ease: "power2.inOut" });
        } else {
          gsap.to(navRef.current, { yPercent: 0, duration: 0.4, ease: "power2.inOut" });
        }
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    if (!menuRef.current) return;
    const links = menuRef.current.querySelectorAll(".menu-link");

    if (isOpen) {
      gsap.set(menuRef.current, { display: "flex" });
      gsap.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        links,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", delay: 0.1 }
      );
    } else {
      gsap.to(links, {
        y: -40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between mix-blend-difference"
      >
        <a
          href="#"
          className="font-display text-2xl font-bold text-white tracking-tight"
          aria-label="GMX Digital - Home"
        >
          GMX
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-6 flex flex-col justify-between group"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-[1px] bg-white transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[11px]" : ""
            }`}
          />
          <span
            className={`block h-[1px] bg-white transition-all duration-300 ${
              isOpen ? "opacity-0 w-0" : "w-full"
            }`}
          />
          <span
            className={`block h-[1px] bg-white transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[11px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#0a0a0a] z-40 flex-col items-center justify-center"
        style={{ display: "none" }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="menu-link font-display text-6xl md:text-8xl font-bold text-white/20 hover:text-white transition-colors duration-300 tracking-tight"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-12 left-8 md:left-16 flex gap-6">
          {["Instagram", "LinkedIn", "Behance"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-text-secondary hover:text-white text-sm tracking-widest uppercase transition-colors duration-200 font-body"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
