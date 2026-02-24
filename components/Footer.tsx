"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 px-6 md:px-16 bg-[#111111] border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-xl text-white">GMX</span>
          <span className="text-text-secondary text-sm font-body">Digital</span>
        </div>

        <p className="font-body text-text-secondary text-sm text-center">
          Made with{" "}
          <span className="text-[#6366f1]" aria-hidden="true">
            ❤️
          </span>{" "}
          by GMX Digital — {year}
        </p>

        <div className="flex gap-6">
          {["Instagram", "LinkedIn", "Behance"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-body text-text-secondary hover:text-white text-xs tracking-widest uppercase transition-colors duration-200"
              aria-label={`GMX Digital on ${social}`}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
