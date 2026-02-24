import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeUp = (
  element: gsap.TweenTarget,
  trigger: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger as Element,
        start: "top 80%",
      },
      ...options,
    }
  );
};

export const fadeIn = (
  element: gsap.TweenTarget,
  trigger: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger as Element,
        start: "top 85%",
      },
      ...options,
    }
  );
};

export const staggerFadeUp = (
  elements: gsap.TweenTarget,
  trigger: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    elements,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger as Element,
        start: "top 80%",
      },
      ...options,
    }
  );
};

export const lineReveal = (
  element: gsap.TweenTarget,
  trigger: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut",
      transformOrigin: "left center",
      scrollTrigger: {
        trigger: trigger as Element,
        start: "top 80%",
      },
      ...options,
    }
  );
};

export const textReveal = (
  elements: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    elements,
    { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      ...options,
    }
  );
};
