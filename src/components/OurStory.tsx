"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function OurStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-section-heading"
      className="relative overflow-hidden bg-brand-ivory px-6 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28 lg:px-12 scroll-mt-20"
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Narrative Story */}
          <ScrollReveal variant="fade-up" className="flex flex-col justify-center lg:col-span-7 xl:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-olive sm:text-sm">
              Our Story
            </p>

            <h2
              id="story-section-heading"
              className="mt-3 font-serif text-3xl font-normal leading-[1.18] tracking-tight text-brand-aegean sm:text-4xl lg:text-5xl"
            >
              Mediterranean food{" "}
              <span className="italic text-brand-terracotta">
                with Greek roots
              </span>
            </h2>

            {/* Thin Terracotta Separator Line */}
            <div className="mt-5 mb-7 h-[1.5px] w-16 bg-brand-terracotta/80" aria-hidden="true" />

            {/* Narrative Story Paragraphs */}
            <div className="space-y-5 text-base font-normal leading-relaxed text-brand-coastal/90 sm:text-lg">
              <p>
                Little Coast is a Mediterranean kitchen inspired by the food of Greece: fresh seafood, grilled meats, seasonal vegetables, olive oil, herbs, and simple dishes made well.
              </p>

              <p>
                We focus on quality ingredients, straightforward cooking, and a warm dining experience. Our menu brings together familiar Greek flavors with a relaxed coastal setting.
              </p>

              {/* Pull quote */}
              <blockquote className="my-6 border-l-2 border-brand-terracotta pl-6 py-1.5 font-serif text-xl sm:text-2xl font-normal italic text-brand-aegean">
                “Good food, good wine, and a table worth staying at.”
              </blockquote>

              <p>
                At the center of the kitchen is the grill, where dishes like octopus, lamb chops, souvlaki, and fresh fish are cooked over fire and finished simply.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Exterior Visual */}
          <ScrollReveal variant="fade-up" delay={200} className="relative flex flex-col items-center lg:col-span-5 xl:col-span-5">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-brand-sand/20 shadow-xl sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src="/assets/exterior.png"
                alt="Rustic exterior of Little Coast Mediterranean kitchen at dusk"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-aegean/10 transition-opacity duration-300 group-hover:opacity-5" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
