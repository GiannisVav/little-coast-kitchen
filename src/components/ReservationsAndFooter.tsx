"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/scrollTo";
import ScrollReveal from "./ScrollReveal";

export default function ReservationsAndFooter() {
  const [guests, setGuests] = useState("2 Guests");
  const [time, setTime] = useState("7:00 PM");
  const [seating, setSeating] = useState("Hearth Dining Room");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  return (
    <section
      id="reservations"
      aria-labelledby="reservations-heading"
      className="relative overflow-hidden bg-brand-aegean px-6 pt-24 pb-12 text-brand-ivory sm:px-8 sm:pt-32 lg:px-12 scroll-mt-20"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-96 w-full max-w-4xl rounded-full bg-brand-terracotta/10 blur-[100px] animate-pulse-glow"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-sand sm:text-sm">
            Join Our Table
          </p>
          <h2
            id="reservations-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-brand-cream sm:text-4xl lg:text-5xl"
          >
            Reserve an Evening by the Coast
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-brand-ivory/80 sm:text-lg">
            Experience wood-fired Mediterranean cooking, candlelit conversations, and sea air. Walk-ins are always welcomed at our sunset bar.
          </p>
        </ScrollReveal>

        {/* Reservation Booking Form Card */}
        <ScrollReveal variant="scale" delay={150} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-3xl border border-brand-sand/25 bg-brand-coastal/50 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-olive/30 text-brand-sand">
                  <CheckCircle2 className="h-8 w-8 stroke-brand-terracotta" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-normal text-brand-cream">
                  Reservation Request Received
                </h3>
                <p className="mt-2 text-sm text-brand-ivory/80 max-w-md">
                  We have saved your table for {guests} at {time} in our {seating}. A confirmation email has been sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {/* Party Size */}
                  <div>
                    <label htmlFor="party-size" className="block text-xs font-semibold uppercase tracking-wider text-brand-sand">
                      Party
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="party-size"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-3 text-sm text-brand-cream focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5-8 Guests">5–8 Guests</option>
                        <option value="Private Dining">Private Dining (8+)</option>
                      </select>
                      <Users className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="res-date" className="block text-xs font-semibold uppercase tracking-wider text-brand-sand">
                      Date
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="res-date"
                        type="date"
                        defaultValue="2026-08-24"
                        className="w-full rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-2.5 text-sm text-brand-cream focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta [color-scheme:dark]"
                      />
                      <Calendar className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="res-time" className="block text-xs font-semibold uppercase tracking-wider text-brand-sand">
                      Time
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-3 text-sm text-brand-cream focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                      >
                        <option value="5:00 PM">5:00 PM (Sunset)</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM (Candlelight)</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                      </select>
                      <Clock className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-sand">
                    Seating Area
                  </label>
                  <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {["Hearth Dining Room", "Sunset Veranda", "Chef's Counter"].map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setSeating(area)}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all ${
                          seating === area
                            ? "border-brand-terracotta bg-brand-terracotta/20 text-brand-cream shadow-sm"
                            : "border-brand-sand/20 bg-brand-aegean/50 text-brand-ivory/80 hover:border-brand-sand/50"
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-sm font-semibold uppercase tracking-widest shadow-btn-terracotta cursor-pointer"
                >
                  <span>Find Table</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                <p className="text-center text-xs text-brand-ivory/60">
                  For groups larger than 8 or special celebrations, please contact our concierge at +1 (555) 234-8901.
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Semantic Footer */}
        <footer className="mt-24 border-t border-brand-sand/15 pt-12 pb-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Prominent Transparent Logo */}
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="relative h-18 w-24 sm:h-22 sm:w-30 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/assets/logos/logo-light.png"
                alt="Little Coast Mediterranean Kitchen"
                fill
                className="object-contain object-center md:object-left"
              />
            </Link>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-7 text-xs font-medium uppercase tracking-[0.2em] text-brand-sand">
              <a href="#menu" onClick={(e) => handleLinkClick(e, "#menu")} className="hover:text-brand-cream transition-colors cursor-pointer">Menu</a>
              <a href="#story" onClick={(e) => handleLinkClick(e, "#story")} className="hover:text-brand-cream transition-colors cursor-pointer">Our Story</a>
              <a href="#visit" onClick={(e) => handleLinkClick(e, "#visit")} className="hover:text-brand-cream transition-colors cursor-pointer">Visit</a>
              <a href="#reservations" onClick={(e) => handleLinkClick(e, "#reservations")} className="hover:text-brand-cream transition-colors cursor-pointer">Reservations</a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-brand-ivory/50">
              &copy; {new Date().getFullYear()} Little Coast Mediterranean Kitchen. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
