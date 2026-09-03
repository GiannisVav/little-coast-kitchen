"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { smoothScrollTo } from "@/lib/scrollTo";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#story" },
    { name: "Visit", href: "#visit" },
    { name: "Reservations", href: "#reservations" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      smoothScrollTo(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-aegean/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:px-8 sm:py-4 lg:px-12"
      >
        {/* Brand Logo on the Left - image only */}
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sand focus-visible:ring-offset-2 focus-visible:ring-offset-brand-aegean"
          aria-label="Little Coast Mediterranean Kitchen - Return to homepage"
        >
          <div className="relative h-12 w-24 sm:h-14 sm:w-28 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/logos/logo-light.png"
              alt="Little Coast - Mediterranean Kitchen"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links and CTA on the Right */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link text-[13px] uppercase tracking-[0.18em] font-medium text-brand-ivory/90 hover:text-brand-cream cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#reservations"
            onClick={(e) => handleNavClick(e, "#reservations")}
            className="inline-flex items-center justify-center rounded-full bg-brand-terracotta px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream transition-all duration-300 hover:bg-brand-terracottaHover hover:shadow-btn-terracotta active:bg-brand-terracottaActive active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-brand-aegean shadow-sm cursor-pointer"
          >
            Book a table
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-full border border-brand-sand/30 bg-brand-aegean/80 p-2.5 text-brand-ivory backdrop-blur-sm transition-colors hover:border-brand-sand hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sand focus-visible:ring-offset-2 focus-visible:ring-offset-brand-aegean"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 stroke-[1.75]" />
            ) : (
              <MenuIcon className="h-6 w-6 stroke-[1.75]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile Navigation"
          className="lg:hidden border-b border-brand-sand/20 bg-brand-aegean/98 px-6 pt-4 pb-8 backdrop-blur-xl shadow-2xl transition-all duration-200 animate-fade-in-down"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2.5 text-base font-medium tracking-widest text-brand-ivory/90 transition-colors hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sand rounded px-2 cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3">
              <a
                href="#reservations"
                onClick={(e) => handleNavClick(e, "#reservations")}
                className="flex w-full items-center justify-center rounded-full bg-brand-terracotta py-3.5 text-center text-sm font-semibold uppercase tracking-widest text-brand-cream transition-all hover:bg-brand-terracottaHover active:bg-brand-terracottaActive active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-brand-aegean shadow-md cursor-pointer"
              >
                Book a table
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
