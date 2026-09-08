"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/scrollTo";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-brand-aegean border-t border-brand-sand/15 px-6 pt-16 pb-12 text-brand-ivory sm:px-8 sm:pt-20 lg:px-12">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-96 w-full max-w-4xl rounded-full bg-brand-terracotta/10 blur-[100px] animate-pulse-glow"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="relative h-16 w-24 sm:h-20 sm:w-28 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/assets/logos/logo-light.png"
                alt="Little Coast Mediterranean Kitchen"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-brand-ivory/80">
              Little Coast is a Mediterranean kitchen near the harbor, serving Greek-inspired dishes, grilled seafood, meats, salads, and desserts.
            </p>

            <p className="mt-6 text-xs text-brand-sand/75">
              Tagline: Designed for Little Coast
            </p>
          </div>

          {/* Column: Explore (3 Cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-sand">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-brand-ivory/80">
              <li>
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="transition-colors hover:text-brand-cream cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, "#menu")}
                  className="transition-colors hover:text-brand-cream cursor-pointer"
                >
                  Featured Dishes
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleNavClick(e, "#story")}
                  className="transition-colors hover:text-brand-cream cursor-pointer"
                >
                  About Little Coast
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  onClick={(e) => handleNavClick(e, "#visit")}
                  className="transition-colors hover:text-brand-cream cursor-pointer"
                >
                  Visit & Location
                </a>
              </li>
              <li>
                <a
                  href="#reservations"
                  onClick={(e) => handleNavClick(e, "#reservations")}
                  className="transition-colors hover:text-brand-cream cursor-pointer"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  onClick={(e) => handleNavClick(e, "#visit")}
                  className="transition-colors hover:text-brand-cream cursor-pointer"
                >
                  Contact & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Contact & Hours (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-sand">
              Contact & Hours
            </h4>
            <div className="mt-5 space-y-3 text-sm text-brand-ivory/80 font-light">
              <p>
                <span className="font-medium text-brand-ivory">Location:</span> 104 Coastal Highway, Little Coast
              </p>
              <p>
                <span className="font-medium text-brand-ivory">Phone:</span> +1 (555) 321-4700
              </p>
              <p>
                <span className="font-medium text-brand-ivory">Hours:</span> Tue - Sun: 5:00 PM - 10:00 PM, Mon Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 border-t border-brand-sand/15 pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-brand-ivory/50">
            &copy; 2026 Little Coast. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-brand-sand/60 sm:mt-0">
            Mediterranean Kitchen
          </p>
        </div>
      </div>
    </footer>
  );
}
