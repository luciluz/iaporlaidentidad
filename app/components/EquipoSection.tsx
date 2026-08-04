"use client";

import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import { t, tx } from "../lib/translations";

const directivos = [
  { roleKey: "director" as const, name: "Edgar Altszyler", affiliation: "Quantit / UBA" },
  { roleKey: "codirector" as const, name: "Juan Esteban Kamienkowski", affiliation: "UBA / CONICET" },
];

const investigadores = [
  { name: "Edgar Altszyler", affiliation: "Quantit / UBA" },
  { name: "Juan Esteban Kamienkowski", affiliation: "UBA / CONICET" },
  { name: "Damián Blasi", affiliation: "Universitat Pompeu Fabra" },
  { name: "Luciano del Corro", affiliation: "Universidad de San Andrés" },
  { name: "Iván Bercovich", affiliation: "UCSB, ScOp VC" },
  { name: "Germán Rosati", affiliation: "UNSAM / CONICET" },
  { name: "Leandro Lombardi", affiliation: "UBA" },
];

const estudiantes = [
  "Nicolás Rubinstein", "Abi Oppenheim", "Cecilia Bolaños", "Facundo González",
  "Facundo Solar", "Ignacio Rodríguez Sañudo", "Bruno Rezza",
  "María Agustina Burgos Pesqueira", "Pablo Contreras Kallens",
  "Tiziana Solari Saban", "Micaela Hirsch", "Federico Blasi",
  "Luciano Ruz Veloso", "Sofía Cácharo Hernáez",
];

export default function EquipoSection() {
  const { lang } = useLang();

  return (
    <section id="equipo" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-6 border-l-2 border-accent pl-3">
          {tx(t.equipo.label, lang)}
        </span>

        {/* Header: text left, image right */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight mb-4">
              {tx(t.equipo.heading, lang)}
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              {tx(t.equipo.body, lang)}
            </p>
          </div>
          {/* Image — fills the right column, contained to that height */}
          <div className="relative w-full h-64 md:h-full md:min-h-[220px] rounded-2xl overflow-hidden">
            <Image
              src="/images/0-infinito.jpg"
              alt="De 0 a infinito — IA por la Identidad"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Directivos */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-5">
              {tx(t.equipo.directivos, lang)}
            </h3>
            <div className="flex flex-col gap-4">
              {directivos.map((d) => (
                <div key={d.name} className="border-l-2 border-accent pl-4">
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
                    {tx(t.equipo[d.roleKey], lang)}
                  </p>
                  <p className="font-semibold text-neutral-800">{d.name}</p>
                  <p className="text-neutral-500 text-sm">{d.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investigadores */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-5">
              {tx(t.equipo.investigadores, lang)}
            </h3>
            <div className="flex flex-col gap-3">
              {investigadores.map((inv) => (
                <div key={inv.name}>
                  <p className="font-medium text-neutral-800">{inv.name}</p>
                  <p className="text-neutral-500 text-sm">{inv.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Estudiantes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-5">
              {tx(t.equipo.estudiantes, lang)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {estudiantes.map((name) => (
                <span
                  key={name}
                  className="inline-block bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full border border-neutral-200"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
