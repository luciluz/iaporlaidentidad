"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { t, tx } from "../lib/translations";

const navHrefs = [
  { key: "mision" as const, href: "#mision" },
  { key: "abuelas" as const, href: "#abuelas" },
  { key: "porQueIA" as const, href: "#por-que-ia" },
  { key: "proyectos" as const, href: "#proyectos" },
  { key: "equipo" as const, href: "#equipo" },
  { key: "contacto" as const, href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logos */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Image
            src="/images/logo-abuelas.png"
            alt="Abuelas de Plaza de Mayo"
            width={80}
            height={40}
            className="h-9 w-auto object-contain"
          />
          <div className="w-px h-6 bg-neutral-300" />
          <Image
            src="/images/Logo_exactas.svg"
            alt="FCEyN - UBA"
            width={80}
            height={40}
            className="h-9 w-auto object-contain"
          />
          <div className="w-px h-6 bg-neutral-300" />
          <Image
            src="/images/logo-quantit.svg"
            alt="Quantit"
            width={80}
            height={40}
            className="h-7 w-auto object-contain"
          />
        </div>

        {/* Desktop nav + lang switcher */}
        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1">
            {navHrefs.map(({ key, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="px-3 py-1.5 text-sm font-medium text-neutral-700 hover:text-accent rounded-md transition-colors hover:bg-accent-muted cursor-pointer whitespace-nowrap"
              >
                {tx(t.nav[key], lang)}
              </button>
            ))}
          </nav>

          {/* Language toggle */}
          <div className={`ml-3 flex items-center gap-0.5 rounded-full p-0.5 transition-all duration-300 ${
            scrolled
              ? "bg-neutral-100 border border-neutral-200"
              : "bg-white/10 border border-white/20"
          }`}>
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                lang === "es"
                  ? scrolled ? "bg-accent text-white shadow-sm" : "bg-white/90 text-accent shadow-sm"
                  : scrolled ? "text-neutral-500 hover:text-neutral-700" : "text-white/70 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                lang === "en"
                  ? scrolled ? "bg-accent text-white shadow-sm" : "bg-white/90 text-accent shadow-sm"
                  : scrolled ? "text-neutral-500 hover:text-neutral-700" : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile: lang switcher + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {/* Language toggle mobile */}
          <div className={`flex items-center gap-0.5 rounded-full p-0.5 transition-all duration-300 ${
            scrolled
              ? "bg-neutral-100 border border-neutral-200"
              : "bg-white/10 border border-white/20"
          }`}>
            <button
              onClick={() => setLang("es")}
              className={`px-2.5 py-0.5 text-xs font-bold rounded-full transition-all duration-200 ${
                lang === "es"
                  ? scrolled ? "bg-accent text-white shadow-sm" : "bg-white/90 text-accent shadow-sm"
                  : scrolled ? "text-neutral-500" : "text-white/70"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-0.5 text-xs font-bold rounded-full transition-all duration-200 ${
                lang === "en"
                  ? scrolled ? "bg-accent text-white shadow-sm" : "bg-white/90 text-accent shadow-sm"
                  : scrolled ? "text-neutral-500" : "text-white/70"
              }`}
            >
              EN
            </button>
          </div>

          <button
            className="flex flex-col gap-1.5 p-2 rounded-md hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span
              className={`block w-5 h-0.5 bg-neutral-800 transition-transform duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-neutral-800 transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-neutral-800 transition-transform duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 flex flex-col gap-2">
          {navHrefs.map(({ key, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="text-left px-3 py-2 text-sm font-medium text-neutral-700 hover:text-accent hover:bg-accent-muted rounded-md transition-colors cursor-pointer"
            >
              {tx(t.nav[key], lang)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
