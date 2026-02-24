import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsap(
  callback: (context: gsap.Context) => void,
  deps: React.DependencyList = []
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(callback, ref);
    return () => ctx.revert();
    // deps is intentionally forwarded from the caller, who controls what triggers re-runs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
