"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { smoothScrollTo } from "@/lib/scrollTo";
import { useMenuModal } from "@/context/MenuModalContext";

export default function HeroSection() {
  const { openMenuModal } = useMenuModal();

  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] w-full flex flex-col justify-between overflow-hidden bg-brand-aegean">
      {/* 1. Full-Bleed Background Image with Soft Dark Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/assets/hero.png"
          alt="Warm candlelit dining table at Little Coast overlooking the Mediterranean sunset with wood-fired oven"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* Soft Dark Overlay for Contrast & Readability */}
        <div 
          className="absolute inset-0 bg-brand-aegean/65 backdrop-blur-[0.5px]" 
          aria-hidden="true" 
        />
      </div>

      {/* 2. Main Hero Content (2-Column on md+, Stacking on Mobile) */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 lg:gap-16 w-full">
          
          {/* Left Column: Eyebrow, 2-line Serif Headline, Subhead, CTAs */}
          <div className="flex flex-col items-start text-left md:col-span-7 lg:col-span-7 animate-fade-in-up">
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-sand sm:text-[13px]">
              Mediterranean Kitchen
            </p>

            {/* 2-Line Serif Headline */}
            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-brand-cream sm:text-5xl md:text-6xl lg:text-7xl">
              Greek-inspired food<br />
              <span className="italic font-normal text-brand-cream">by the coast</span>
            </h1>

            {/* Subhead */}
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-brand-ivory/90 sm:text-lg">
              A relaxed Mediterranean restaurant serving grilled meats, seafood, fresh salads, and classic Greek dishes near the harbor.
            </p>

            {/* Two Action Buttons */}
            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
              <button
                type="button"
                onClick={() => smoothScrollTo("#reservations")}
                className="btn-primary w-full min-w-[190px] uppercase text-xs font-semibold tracking-[0.16em] sm:w-auto cursor-pointer"
              >
                Reserve a table
              </button>

              <button
                type="button"
                onClick={openMenuModal}
                className="btn-secondary w-full min-w-[170px] uppercase text-xs font-semibold tracking-[0.16em] sm:w-auto cursor-pointer"
              >
                View menu
              </button>
            </div>
          </div>

          {/* Right Column: Large Rounded Ivory Card with Little Coast Logo (Hidden on mobile, visible on md+) */}
          <div className="hidden md:flex md:col-span-5 lg:col-span-5 justify-center lg:justify-end animate-fade-in animation-delay-200">
            <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-[2.5rem] border border-brand-sand/40 bg-[#FFF8EF] p-8 lg:p-12 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/logos/logo-light.png"
                  alt="Little Coast Mediterranean Kitchen Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Below Hero: Two Info Chips */}
      <div className="relative z-10 w-full px-6 pb-8 pt-2 sm:px-8 lg:px-12 animate-fade-in animation-delay-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 sm:gap-4">
          {/* Location Chip */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-sand/30 bg-brand-aegean/70 px-4 py-2 text-xs text-brand-ivory/90 backdrop-blur-md sm:text-sm">
            <MapPin className="h-3.5 w-3.5 text-brand-sand shrink-0" aria-hidden="true" />
            <span>Location: 104 Coastal Highway, Little Coast</span>
          </div>

          {/* Hours Chip */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-sand/30 bg-brand-aegean/70 px-4 py-2 text-xs text-brand-ivory/90 backdrop-blur-md sm:text-sm">
            <Clock className="h-3.5 w-3.5 text-brand-sand shrink-0" aria-hidden="true" />
            <span>Hours: Tue - Sun: 5:00 PM - 10:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
