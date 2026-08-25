"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/scrollTo";

export default function HeroSection() {
  return (
    <div className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-brand-aegean">
      {/* 1. Full-Bleed Background Image with Soft Dark Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/assets/hero.png"
          alt="Warm candlelit dining table at Little Coast overlooking the Mediterranean sunset with wood-fired oven"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          quality={90}
        />
        {/* Soft Dark Overlay for Contrast & Readability (No heavy gradients) */}
        <div 
          className="absolute inset-0 bg-brand-aegean/60 backdrop-blur-[0.5px]" 
          aria-hidden="true" 
        />
      </div>

      {/* 2. Centered Content with Staggered Entrance Animations */}
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-12 text-center sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-3 animate-fade-in">
          <span className="h-[1px] w-5 bg-brand-sand/70 sm:w-8" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-sand sm:text-[13px]">
            Mediterranean Kitchen
          </p>
          <span className="h-[1px] w-5 bg-brand-sand/70 sm:w-8" aria-hidden="true" />
        </div>

        {/* Large Serif Headline */}
        <h1 className="max-w-4xl font-serif text-[2.5rem] font-normal leading-[1.14] tracking-tight text-brand-cream sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up animation-delay-100">
          Where wood fire meets the salt air of the Aegean
        </h1>

        {/* One-line Subhead */}
        <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-brand-ivory/90 sm:text-lg md:text-xl animate-fade-in-up animation-delay-200">
          An intimate candlelit dining room and wood-fired hearth nestled along the harbor in Portsmouth.
        </p>

        {/* Two Rounded-Full Buttons with Smooth Scroll */}
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5 animate-fade-in-up animation-delay-300">
          {/* Primary Button */}
          <button
            type="button"
            onClick={() => smoothScrollTo("#reservations")}
            className="btn-primary group w-full min-w-[200px] shadow-btn-terracotta sm:w-auto cursor-pointer"
          >
            <span>Reserve a table</span>
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            onClick={() => smoothScrollTo("#menu")}
            className="btn-secondary w-full min-w-[180px] sm:w-auto cursor-pointer"
          >
            View menu
          </button>
        </div>
      </main>

      {/* 3. Bottom-Left Subtle Address & Opening Hours */}
      <footer className="relative z-10 w-full px-6 pb-8 pt-4 sm:px-8 lg:px-12 animate-fade-in animation-delay-400">
        <div className="mx-auto flex max-w-7xl items-end justify-between">
          <address className="not-italic flex flex-col gap-1.5 text-xs text-brand-ivory/80 sm:text-sm">
            <div className="flex items-center gap-2 text-brand-ivory/95">
              <MapPin className="h-3.5 w-3.5 text-brand-sand shrink-0" aria-hidden="true" />
              <span>42 Harborview Pier, Portsmouth Harbour</span>
            </div>
            <div className="flex items-center gap-2 text-brand-sand/90 font-light">
              <Clock className="h-3.5 w-3.5 text-brand-sand shrink-0" aria-hidden="true" />
              <span>Tues – Sun: 5:00 PM – 10:30 PM &bull; Sunset Bar from 4 PM</span>
            </div>
          </address>

          {/* Subtle Ambient Badge on the Right */}
          <div className="hidden text-right md:block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-brand-sand/75">
              Wood-Fired &bull; Raw Bar &bull; Natural Wine
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
