"use client";

import { useEffect, useRef, ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<import("lenis").default | null>(null);

  useEffect(() => {
    let rafId: number;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
