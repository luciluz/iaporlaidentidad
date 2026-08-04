"use client";

import { useRef, useState, useCallback } from "react";
import { useLang } from "../context/LanguageContext";
import { t, tx } from "../lib/translations";

export default function ProyectosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLang();

  const projects = t.proyectos.items;

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveIndex(index);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.scrollWidth / projects.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), projects.length - 1));
  }, [projects.length]);

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-6 border-l-2 border-accent pl-3">
          {tx(t.proyectos.label, lang)}
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight max-w-xl">
            {tx(t.proyectos.heading, lang)}
          </h2>
          <p className="text-neutral-600 text-base max-w-sm leading-relaxed">
            {tx(t.proyectos.subtitle, lang)}
          </p>
        </div>
      </div>

      {/* Horizontal scroll carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 md:px-12 snap-x"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {projects.map((project, i) => (
          <div
            key={project.number}
            className="snap-center flex-shrink-0 w-[min(85vw,420px)] bg-white rounded-2xl p-8 flex flex-col gap-5 border border-neutral-200 hover:border-accent/30 transition-colors duration-200"
          >
            <div className="flex items-start justify-between">
              <span className="text-4xl font-bold text-neutral-200 leading-none">
                {project.number}
              </span>
              <span className="inline-block bg-accent-muted text-accent text-xs font-semibold px-3 py-1 rounded-full">
                {tx(project.tag, lang)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 leading-snug">
              {tx(project.title, lang)}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed flex-1">
              {tx(project.description, lang)}
            </p>
            {project.link && (
              <a
                href={`https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-medium hover:underline mt-auto"
              >
                {project.link} →
              </a>
            )}
            <div className="text-xs text-neutral-400 font-medium">
              {i + 1} {tx(t.proyectos.of, lang)} {projects.length}
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators + arrow controls */}
      <div className="flex items-center justify-center gap-4 mt-8 px-6">
        <button
          onClick={() => scrollTo(Math.max(activeIndex - 1, 0))}
          className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-accent hover:text-white hover:border-accent transition-colors disabled:opacity-30"
          disabled={activeIndex === 0}
          aria-label={tx(t.proyectos.prev, lang)}
        >
          ‹
        </button>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-accent"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollTo(Math.min(activeIndex + 1, projects.length - 1))}
          className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-accent hover:text-white hover:border-accent transition-colors disabled:opacity-30"
          disabled={activeIndex === projects.length - 1}
          aria-label={tx(t.proyectos.next, lang)}
        >
          ›
        </button>
      </div>
    </section>
  );
}
