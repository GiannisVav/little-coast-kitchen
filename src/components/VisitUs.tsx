"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function VisitUs() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-section-heading"
      className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:px-8 sm:py-28 lg:px-12 scroll-mt-20 border-t border-brand-sand/20"
    >
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal variant="fade-up" className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-olive sm:text-sm">
            Find Our Table
          </p>
          <h2
            id="visit-section-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-brand-aegean sm:text-4xl lg:text-5xl"
          >
            Visit Us
          </h2>
        </ScrollReveal>

        {/* 3 Grid Cards: Location, Hours, Inquiries */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Location */}
          <ScrollReveal variant="fade-up" delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-brand-sand/35 bg-white/80 p-8 shadow-sm transition-all duration-300 hover:border-brand-sand/70 hover:shadow-warm-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sand/20 text-brand-terracotta">
                <MapPin className="h-6 w-6 stroke-brand-terracotta" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-normal text-brand-aegean">
                Location
              </h3>
              <p className="mt-3 text-base text-brand-coastal/90 font-medium leading-relaxed">
                104 Coastal Highway, Little Coast
              </p>
            </div>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal variant="fade-up" delay={200} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-brand-sand/35 bg-white/80 p-8 shadow-sm transition-all duration-300 hover:border-brand-sand/70 hover:shadow-warm-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sand/20 text-brand-terracotta">
                <Clock className="h-6 w-6 stroke-brand-terracotta" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-normal text-brand-aegean">
                Hours
              </h3>
              <div className="mt-3 space-y-1.5 text-sm text-brand-coastal/90">
                <div className="flex justify-between">
                  <span className="font-semibold text-brand-aegean">Tue - Thu:</span>
                  <span>5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-brand-aegean">Fri - Sat:</span>
                  <span>5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-brand-aegean">Sun:</span>
                  <span>4:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-brand-terracotta font-medium pt-1">
                  <span>Monday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Inquiries */}
          <ScrollReveal variant="fade-up" delay={300} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-brand-sand/35 bg-white/80 p-8 shadow-sm transition-all duration-300 hover:border-brand-sand/70 hover:shadow-warm-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sand/20 text-brand-terracotta">
                <Phone className="h-6 w-6 stroke-brand-terracotta" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-normal text-brand-aegean">
                Inquiries
              </h3>
              <div className="mt-3 space-y-2 text-sm text-brand-coastal/90">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 stroke-brand-terracotta" />
                  <a
                    href="tel:+15553214700"
                    className="font-medium text-brand-aegean transition-colors hover:text-brand-terracotta"
                  >
                    +1 (555) 321-4700
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 stroke-brand-terracotta" />
                  <a
                    href="mailto:hello@littlecoast.com"
                    className="font-medium text-brand-aegean transition-colors hover:text-brand-terracotta"
                  >
                    hello@littlecoast.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
