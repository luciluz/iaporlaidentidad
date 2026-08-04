"use client";

import { useLang } from "../context/LanguageContext";
import { t, tx } from "../lib/translations";

export default function ContactoSection() {
  const { lang } = useLang();

  return (
    <section id="contacto" className="py-24 md:py-32 bg-accent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="inline-block text-white/60 text-sm font-semibold uppercase tracking-widest mb-6">
          {tx(t.contacto.label, lang)}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {tx(t.contacto.heading, lang)}
        </h2>
        <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          {tx(t.contacto.body, lang)}
        </p>
        <p className="inline-flex items-center gap-3 bg-white text-accent font-semibold px-8 py-4 rounded-full text-base shadow-lg select-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          iaporlaidentidad@gmail.com
        </p>
      </div>
    </section>
  );
}
