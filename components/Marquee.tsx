"use client";

const items = [
  "DESIGN",
  "•",
  "DEVELOPMENT",
  "•",
  "BRANDING",
  "•",
  "MOTION",
  "•",
  "STRATEGY",
  "•",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section
      className="py-12 md:py-16 bg-[#111111] border-y border-white/10 overflow-hidden"
      aria-label="Services ticker"
    >
      <div
        className="flex animate-marquee whitespace-nowrap"
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            tabIndex={-1}
            className={`font-display font-bold text-4xl md:text-6xl tracking-tight mr-8 ${
              item === "•"
                ? "text-[#6366f1]"
                : "text-transparent [-webkit-text-stroke:1px_rgba(245,245,245,0.3)]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
