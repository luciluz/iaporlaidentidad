"use client";

import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import { t, tx } from "../lib/translations";

export default function AbuelasSection() {
  const { lang } = useLang();

  return (
    <section id="abuelas" className="py-24 md:py-32 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: label, heading, image */}
          <div>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-6 border-l-2 border-accent pl-3">
              {tx(t.abuelas.label, lang)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight mb-6">
              {tx(t.abuelas.heading, lang)}
            </h2>
            {/* Image below the heading */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/donde-estan.jpeg"
                alt="¿Dónde están? — Abuelas de Plaza de Mayo"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: body text */}
          <div className="flex flex-col gap-6">
            <p className="text-neutral-700 text-lg leading-relaxed">
              {tx(t.abuelas.p1, lang)}{" "}
              <strong className="text-neutral-900">
                {tx(t.abuelas.p1strong, lang)}
              </strong>{" "}
              {tx(t.abuelas.p1rest, lang)}
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              {tx(t.abuelas.p2, lang)}{" "}
              <strong className="text-neutral-900">
                {tx(t.abuelas.p2strong, lang)}
              </strong>{" "}
              {tx(t.abuelas.p2rest, lang)}
            </p>
            <p className="text-neutral-600 text-base leading-relaxed italic border-l-2 border-neutral-300 pl-4">
              {tx(t.abuelas.quote, lang)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
