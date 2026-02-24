"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CURSOR_FOLLOW_SPEED = 0.12;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide cursor on touch/coarse-pointer devices
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      !window.matchMedia("(pointer: fine)").matches;
    if (isTouchDevice) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let rafId: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * CURSOR_FOLLOW_SPEED;
      outlineY += (mouseY - outlineY) * CURSOR_FOLLOW_SPEED;

      gsap.set(outline, {
        x: outlineX,
        y: outlineY,
      });

      rafId = requestAnimationFrame(animateOutline);
    };

    const handleMouseEnter = () => {
      outline.classList.add("hovering");
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      outline.classList.remove("hovering");
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    document.addEventListener("mousemove", moveCursor);
    rafId = requestAnimationFrame(animateOutline);

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor]"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={outlineRef} className="cursor-outline" aria-hidden="true" />
    </>
  );
}
