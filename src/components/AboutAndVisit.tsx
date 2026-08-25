"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutAndVisit() {
  return (
    <section
      id="story"
      aria-labelledby="about-section-heading"
      className="relative overflow-hidden bg-brand-ivory px-6 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32 lg:px-12 scroll-mt-20"
    >
      {/* Soft Ambient Light Glows in Corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-brand-sand/20 blur-3xl animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand-terracotta/10 blur-3xl animate-pulse-glow"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Asymmetrical 2-Column Grid on Desktop */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Narrative Story */}
          <ScrollReveal variant="fade-up" className="flex flex-col justify-center lg:col-span-6 xl:col-span-6 lg:py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-olive sm:text-sm">
              Our Story
            </p>

            <h2
              id="about-section-heading"
              className="mt-3 font-serif text-3xl font-normal leading-[1.18] tracking-tight text-brand-aegean sm:text-4xl lg:text-5xl"
            >
              Greek Mediterranean dining,{" "}
              <span className="italic text-brand-terracotta">
                shaped by the coast.
              </span>
            </h2>

            {/* Thin Terracotta Separator Line */}
            <div className="mt-5 mb-7 h-[1.5px] w-16 bg-brand-terracotta/80" aria-hidden="true" />

            {/* Narrative Story Paragraphs */}
            <div className="space-y-6 text-base font-normal leading-relaxed text-brand-coastal/90 sm:text-lg">
              <p>
                Born from a deep kinship with the Aegean sea, Little Coast celebrates the timeless rhythm of the Mediterranean shoreline. Every morning begins with the return of local dayboats, delivering wild sea bream, tender octopus, and shellfish caught along the rocky shoals. Our pantry is guided by what the salt air and sun-drenched hillsides nurture—wild mountain thyme, crisp oregano, and sun-ripened citrus.
              </p>

              {/* Terracotta-Bordered Blockquote (Under 10 words) */}
              <blockquote className="my-7 border-l-2 border-brand-terracotta pl-6 py-1.5 font-serif text-xl sm:text-2xl font-normal italic text-brand-aegean">
                “Every plate tells a story of salt, wind, and embers.”
              </blockquote>

              <p>
                At the heart of our dining room is an open hearth fed by aged olive wood and aromatic laurel branches. We practice the unhurried patience of rustic Mediterranean cooking: charring seafood over glowing embers, drizzling cold-pressed oil from generational Kalamata groves, and pouring small-batch coastal wines. Around our candlelit tables, meals unfold slowly, carried by good company and sea breeze.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Visual Grouping & Clean Mobile Responsive Card */}
          <ScrollReveal variant="fade-up" delay={200} className="relative flex flex-col items-center lg:col-span-6 xl:col-span-6">
            {/* Vertical Exterior Image Container - Crisp and unblurred */}
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-brand-sand/20 shadow-xl sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src="/assets/exterior.png"
                alt="Exterior view of Little Coast restaurant with stone archway, candle lanterns, and sunset sea view"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-aegean/10 transition-opacity duration-300 group-hover:opacity-5" />
            </div>

            {/* Visit Details Card - Neatly stacked on mobile, gracefully overlapping on desktop */}
            <div
              id="visit"
              className="scroll-mt-28 relative mt-6 w-full rounded-3xl border border-brand-sand/40 bg-brand-cream p-6 shadow-xl sm:p-8 lg:-mt-24 lg:w-[94%] xl:-mt-28 lg:backdrop-blur-md transition-transform duration-300 ease-out lg:hover:-translate-y-1.5"
            >
              <div className="flex flex-col space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-olive">
                    Visit Our Table
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-normal tracking-tight text-brand-aegean">
                    Portsmouth Harbour
                  </h3>
                </div>

                <div className="h-[1px] w-full bg-brand-sand/30" aria-hidden="true" />

                {/* Contact Information */}
                <div className="space-y-3.5 text-sm text-brand-coastal">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 stroke-brand-terracotta" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-brand-aegean">104 Coastal Highway</p>
                      <p className="text-xs text-brand-coastal/75">Harborview Pier &bull; Portsmouth</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 stroke-brand-terracotta" aria-hidden="true" />
                    <a
                      href="tel:+15552348901"
                      className="font-medium text-brand-aegean transition-colors hover:text-brand-terracotta focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-terracotta rounded"
                    >
                      +1 (555) 234-8901
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 stroke-brand-terracotta" aria-hidden="true" />
                    <a
                      href="mailto:reservations@littlecoast.com"
                      className="font-medium text-brand-aegean transition-colors hover:text-brand-terracotta focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-terracotta rounded"
                    >
                      reservations@littlecoast.com
                    </a>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-brand-sand/30" aria-hidden="true" />

                {/* Opening Hours */}
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 stroke-brand-terracotta" aria-hidden="true" />
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="font-semibold text-brand-aegean">Lunch & Raw Bar:</span>
                      <span className="text-brand-coastal/85">Wed – Sun, 12:00 – 3:30 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="font-semibold text-brand-aegean">Hearth Dinner:</span>
                      <span className="text-brand-coastal/85">Tues – Sun, 5:00 – 10:30 PM</span>
                    </div>
                    <div className="flex justify-between gap-4 text-brand-olive font-medium">
                      <span>Sunset Veranda:</span>
                      <span>Daily from 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
