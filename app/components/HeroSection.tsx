"use client";

import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import { t, tx } from "../lib/translations";

export default function HeroSection() {
  const { lang } = useLang();

  return (
    <section
      id="portada"
      className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/foto-abuelas-exactas-quantit"
        alt="Equipo de IA por la Identidad"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm uppercase tracking-widest font-medium mb-4">
            {tx(t.hero.tag, lang)}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight whitespace-pre-line">
            {tx(t.hero.title, lang)}
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl mb-8 font-light">
            {tx(t.hero.subtitle, lang)}
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xl">
            {tx(t.hero.collab, lang)}{" "}
            <span className="text-white/80 font-medium">
              Abuelas de Plaza de Mayo
            </span>
            ,{" "}
            <span className="text-white/80 font-medium">
              {lang === "es"
                ? "la Facultad de Ciencias Exactas y Naturales (UBA)"
                : "the UBA School of Exact and Natural Sciences"}
            </span>{" "}
            {tx(t.hero.and, lang)}{" "}
            <span className="text-white/80 font-medium">Quantit</span>.
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">
          {tx(t.hero.scroll, lang)}
        </span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
