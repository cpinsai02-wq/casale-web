"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Menus", href: "#menus" },
  { label: "Our Story", href: "#story" },
  { label: "Spaces", href: "#spaces" },
  { label: "Events", href: "#events" },
  { label: "Contacts", href: "#footer" },
];

export function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-[#1C2B2D]">
      {/* Hero background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1773100699991-b7e6bf89a6a1?w=1920&h=1080&fit=crop&auto=format"
          alt="Elegant dining room with arched windows at Casale del Notaio"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2B2D]/55 via-[#1C2B2D]/30 to-[#1C2B2D]/75" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 md:px-16">
        {/* Logo */}
        <div className="flex flex-col text-[#D5D5B7]">
          <span className="font-serif text-[1.4rem] font-medium tracking-wide leading-none">
            CASALE
          </span>
          <span className="font-serif text-[0.7rem] tracking-[0.28em] font-normal text-[#8B6B4A] uppercase">
            DEL NOTAIO
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.href)}
                className="font-sans text-[0.8125rem] tracking-widest uppercase text-[#D5D5B7]/85 hover:text-[#D5D5B7] transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Reserve CTA */}
        <button
          onClick={() => scrollTo("#footer")}
          className="hidden md:inline-flex items-center font-sans text-[0.75rem] tracking-widest uppercase text-[#F7F7F4] border border-[#D5D5B7]/40 hover:border-[#D5D5B7]/70 hover:bg-[#D5D5B7]/10 px-5 py-2 rounded-[2px] transition-all duration-250"
        >
          Reserve a Table
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#D5D5B7]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="relative z-20 md:hidden flex flex-col px-8 py-6 gap-5 bg-[#1C2B2D]/97">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-sans text-sm tracking-widest uppercase text-[#D5D5B7] text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 flex flex-col flex-1 justify-end px-8 pb-20 md:px-16 md:pb-28 max-w-5xl">
        <p className="font-sans text-[0.75rem] tracking-[0.22em] uppercase text-[#8B6B4A] mb-6">
          Fine Dining · Exclusive Events · Sicily
        </p>

        <h1 className="text-[#F7F7F4] text-4xl md:text-6xl font-serif mb-6 max-w-[780px] leading-tight">
          Where every season<br />
          <em className="text-[#D5D5B7] not-italic font-serif italic">tells a story</em>
        </h1>

        <p className="font-sans text-[1.0625rem] style-normal leading-relaxed text-[#D5D5B7]/75 max-w-[480px] mb-10">
          A historic estate transformed into a sanctuary of Sicilian hospitality. Seasonal menus, intimate rooms, and unforgettable celebrations.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <CTAPrimary onClick={() => scrollTo("#menus")}>View Menus</CTAPrimary>
          <CTASecondary onClick={() => scrollTo("#spaces")}>Explore the Venue</CTASecondary>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50" aria-hidden>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#D5D5B7]" />
      </div>
    </section>
  );
}

// Sotto-componenti ottimizzati
export function CTAPrimary({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const baseClass = "inline-flex items-center justify-center font-sans text-[0.8125rem] tracking-widest uppercase font-medium text-[#F7F7F4] bg-[#355A63] hover:bg-[#2A4A52] px-8 py-3.5 rounded-[2px] transition-colors duration-250 no-underline";

  if (href) return <a href={href} className={baseClass}>{children}</a>;
  return <button onClick={onClick} className={baseClass}>{children}</button>;
}

export function CTASecondary({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const baseClass = "inline-flex items-center justify-center font-sans text-[0.8125rem] tracking-widest uppercase font-medium text-[#D5D5B7] border border-[#D5D5B7]/50 hover:border-[#D5D5B7]/80 hover:bg-[#D5D5B7]/10 px-8 py-3.5 rounded-[2px] transition-all duration-250 no-underline";

  if (href) return <a href={href} className={baseClass}>{children}</a>;
  return <button onClick={onClick} className={baseClass}>{children}</button>;
}