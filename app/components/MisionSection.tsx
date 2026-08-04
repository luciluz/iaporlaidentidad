"use client";

import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import { t, tx } from "../lib/translations";

export default function MisionSection() {
  const { lang } = useLang();

  return (
    <section id="mision" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text — left */}
          <div>
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-6 border-l-2 border-accent pl-3">
              {tx(t.mision.label, lang)}
            </span>
            <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed mb-8">
              {tx(t.mision.body1, lang)}{" "}
              <strong className="font-semibold">
                {tx(t.mision.body1strong, lang)}
              </strong>
              .
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              {tx(t.mision.body2, lang)}
            </p>
          </div>

          {/* Image — right */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/panuelo.jpg"
              alt="Pañuelo blanco de Abuelas de Plaza de Mayo"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
