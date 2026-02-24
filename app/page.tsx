"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Skip navigation for keyboard and screen-reader users */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#6366f1] focus:text-white focus:rounded focus:text-sm focus:font-body"
      >
        Ir para o conteúdo principal
      </a>
      <CustomCursor />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <SmoothScroll>
        <main className="relative">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Services />
          <Marquee />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
