"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    // Animate counter
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = `${Math.round(counter.value)}%`;
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${counter.value}%`;
        }
      },
    });

    // Animate logo
    tl.from(
      logoRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-[#0a0a0a] z-[10000] flex flex-col items-center justify-center"
    >
      <div ref={logoRef} className="text-center">
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight gradient-text mb-2">
          GMX
        </h1>
        <p className="text-text-secondary text-sm tracking-[0.3em] uppercase font-body">
          Digital
        </p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-8 md:px-16">
        <div className="flex items-center justify-between mb-3">
          <span className="text-text-secondary text-xs tracking-widest uppercase font-body">
            Loading
          </span>
          <span
            ref={countRef}
            className="text-text-primary text-sm font-display font-bold"
          >
            0%
          </span>
        </div>
        <div className="w-full h-[1px] bg-white/10 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] w-0 transition-none"
          />
        </div>
      </div>
    </div>
  );
}
