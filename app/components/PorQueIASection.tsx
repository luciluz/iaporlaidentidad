"use client";

import { useLang } from "../context/LanguageContext";
import { t, tx } from "../lib/translations";

export default function PorQueIASection() {
  const { lang } = useLang();

  return (
    <section id="por-que-ia" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-6 border-l-2 border-accent pl-3">
          {tx(t.porQueIA.label, lang)}
        </span>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mt-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight mb-6 whitespace-pre-line">
              {tx(t.porQueIA.heading, lang)}
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              {tx(t.porQueIA.p1, lang)}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-neutral-700 text-lg leading-relaxed">
              {tx(t.porQueIA.p2a, lang)}{" "}
              <strong className="text-neutral-900">
                {tx(t.porQueIA.p2strong, lang)}
              </strong>
              {tx(t.porQueIA.p2b, lang)}{" "}
              <strong className="text-accent">{tx(t.porQueIA.p2c, lang)}</strong>
            </p>

            <div className="bg-accent-muted border border-accent/20 rounded-xl p-6">
              <p className="text-neutral-700 leading-relaxed text-sm">
                {lang === "es" ? (
                  <>
                    En{" "}
                    <strong>{tx(t.porQueIA.calloutDate, lang)}</strong>,{" "}
                    {tx(t.porQueIA.callout1, lang)}
                  </>
                ) : (
                  <>
                    In{" "}
                    <strong>{tx(t.porQueIA.calloutDate, lang)}</strong>,{" "}
                    {tx(t.porQueIA.callout1, lang)}
                  </>
                )}
              </p>
              <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                {tx(t.porQueIA.callout2, lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
