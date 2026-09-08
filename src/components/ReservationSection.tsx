"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  MessageSquareText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  ReservationFormData,
  submitReservation,
} from "@/lib/reservation";

export default function ReservationSection() {
  // Compute default date (tomorrow)
  const getDefaultDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  const getMinDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const initialFormState: ReservationFormData = {
    name: "",
    email: "",
    phone: "",
    date: getDefaultDate(),
    time: "7:00 PM",
    partySize: "2 Guests",
    notes: "",
  };

  const [formData, setFormData] = useState<ReservationFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationFormData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await submitReservation(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmittedData({ ...formData });
      setFormData(initialFormState);
    } else {
      setErrorMessage(
        result.error || "Failed to process reservation. Please try again or call us directly."
      );
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrorMessage(null);
  };

  return (
    <section
      id="reservations"
      aria-labelledby="reservations-heading"
      className="relative overflow-hidden bg-brand-aegean px-6 py-20 text-brand-ivory sm:px-8 sm:py-28 lg:px-12 scroll-mt-20"
    >
      {/* Ambient background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 h-[420px] w-full max-w-5xl rounded-full bg-brand-terracotta/10 blur-[120px] animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-coastal/30 blur-[90px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Heading */}
        <ScrollReveal variant="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sand/30 bg-brand-coastal/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-sand backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-terracotta" />
            <span>Join Our Table</span>
          </div>

          <h2
            id="reservations-heading"
            className="mt-4 font-serif text-3xl font-normal tracking-tight text-brand-cream sm:text-4xl lg:text-5xl"
          >
            Reserve an Evening by the Coast
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-brand-ivory/80 sm:text-lg">
            Experience wood-fired Mediterranean cooking, candlelit hearths, and sea breezes.
            Reserve your table below—walk-ins are always welcomed at our cocktail bar.
          </p>
        </ScrollReveal>

        {/* Reservation Card */}
        <ScrollReveal variant="scale" delay={150} className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-3xl border border-brand-sand/25 bg-brand-coastal/50 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            {submittedData ? (
              /* Success Confirmation State */
              <div className="flex flex-col items-center py-6 text-center animate-fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-olive/30 text-brand-sand shadow-inner">
                  <CheckCircle2 className="h-10 w-10 stroke-brand-terracotta" />
                </div>

                <h3 className="mt-5 font-serif text-2xl font-normal text-brand-cream sm:text-3xl">
                  Reservation Request Received
                </h3>

                <p className="mt-2.5 max-w-lg text-sm text-brand-ivory/85 leading-relaxed">
                  Thank you, <span className="font-semibold text-brand-cream">{submittedData.name}</span>!
                  We have received your table booking request. A confirmation summary has been logged and sent to{" "}
                  <span className="font-medium text-brand-sand">{submittedData.email}</span>.
                </p>

                {/* Summary Card */}
                <div className="mt-6 w-full max-w-md rounded-2xl border border-brand-sand/20 bg-brand-aegean/60 p-5 text-left text-xs sm:text-sm text-brand-ivory/90 shadow-sm backdrop-blur-sm space-y-2.5">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-brand-sand font-medium uppercase tracking-wider text-[11px]">
                      Date & Time
                    </span>
                    <span className="font-semibold text-brand-cream">
                      {submittedData.date} at {submittedData.time}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-brand-sand font-medium uppercase tracking-wider text-[11px]">
                      Party Size
                    </span>
                    <span className="font-semibold text-brand-cream">
                      {submittedData.partySize}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-brand-sand font-medium uppercase tracking-wider text-[11px]">
                      Contact Phone
                    </span>
                    <span className="font-mono text-brand-ivory">
                      {submittedData.phone}
                    </span>
                  </div>

                  {submittedData.notes && (
                    <div className="pt-1">
                      <span className="text-brand-sand font-medium uppercase tracking-wider text-[11px] block mb-1">
                        Dietary & Special Notes
                      </span>
                      <p className="rounded-lg bg-brand-aegean/80 p-2.5 text-xs text-brand-ivory/80 italic">
                        &ldquo;{submittedData.notes}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary text-xs uppercase tracking-widest px-6 py-3 cursor-pointer"
                  >
                    Make Another Reservation
                  </button>
                  <a
                    href="#visit"
                    className="text-xs font-medium text-brand-sand hover:text-brand-cream transition-colors underline underline-offset-4"
                  >
                    View Location & Parking
                  </a>
                </div>
              </div>
            ) : (
              /* Active Reservation Form */
              <form onSubmit={handleSubmit} noValidate={false} className="space-y-6">
                {errorMessage && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-950/40 p-4 text-xs sm:text-sm text-red-200 backdrop-blur-sm animate-fade-in"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                {/* 1. Contact Information Row (Name, Email, Phone) */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-sand"
                    >
                      Full Name <span className="text-brand-terracotta">*</span>
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="res-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Elena Rostova"
                        className="w-full rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-3 pl-10 text-sm text-brand-cream placeholder:text-brand-ivory/30 focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta transition-colors"
                      />
                      <User className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="res-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-sand"
                    >
                      Email Address <span className="text-brand-terracotta">*</span>
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="res-email"
                        name="email"
                        type="email"
                        required
                        inputMode="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="elena@example.com"
                        className="w-full rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-3 pl-10 text-sm text-brand-cream placeholder:text-brand-ivory/30 focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta transition-colors"
                      />
                      <Mail className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-sand"
                    >
                      Phone Number <span className="text-brand-terracotta">*</span>
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="res-phone"
                        name="phone"
                        type="tel"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-3 pl-10 text-sm text-brand-cream placeholder:text-brand-ivory/30 focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta transition-colors"
                      />
                      <Phone className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>
                </div>

                {/* 2. Date, Time, and Party Size Row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {/* Date */}
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-sand"
                    >
                      Date <span className="text-brand-terracotta">*</span>
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="res-date"
                        name="date"
                        type="date"
                        required
                        min={getMinDate()}
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-3 text-sm text-brand-cream focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta [color-scheme:dark] transition-colors"
                      />
                      <Calendar className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-sand"
                    >
                      Time <span className="text-brand-terracotta">*</span>
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="res-time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full appearance-none rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-3 text-sm text-brand-cream focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta transition-colors cursor-pointer"
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
                        <option value="9:30 PM">9:30 PM</option>
                      </select>
                      <Clock className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>

                  {/* Party Size */}
                  <div>
                    <label
                      htmlFor="res-party-size"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-sand"
                    >
                      Party Size <span className="text-brand-terracotta">*</span>
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="res-party-size"
                        name="partySize"
                        required
                        value={formData.partySize}
                        onChange={handleInputChange}
                        className="w-full appearance-none rounded-xl border border-brand-sand/30 bg-brand-aegean/80 px-4 py-3 text-sm text-brand-cream focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta transition-colors cursor-pointer"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5 Guests">5 Guests</option>
                        <option value="6 Guests">6 Guests</option>
                        <option value="7-8 Guests">7–8 Guests</option>
                        <option value="Private Dining (8+)">Private Dining (8+ Guests)</option>
                      </select>
                      <Users className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-brand-sand/70" />
                    </div>
                  </div>
                </div>

                {/* 3. Dietary Restrictions & Special Requests (Notes) */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="res-notes"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-sand"
                    >
                      Dietary Restrictions & Special Requests
                    </label>
                    <span className="text-[11px] text-brand-ivory/50">Optional</span>
                  </div>
                  <div className="relative mt-2">
                    <textarea
                      id="res-notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Please let us know about any allergies, dietary preferences (e.g. vegan, gluten-free), anniversary celebrations, or table requests..."
                      className="w-full rounded-xl border border-brand-sand/30 bg-brand-aegean/80 p-3.5 text-sm text-brand-cream placeholder:text-brand-ivory/30 focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta transition-colors resize-none"
                    />
                    <MessageSquareText className="pointer-events-none absolute right-3.5 bottom-3.5 h-4 w-4 text-brand-sand/50" />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-sm font-semibold uppercase tracking-widest shadow-btn-terracotta cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Confirming Table...</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <span>Book Table</span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs text-brand-ivory/60">
                  For parties larger than 8 or same-day inquiries, please call our concierge at{" "}
                  <a
                    href="tel:+15553214700"
                    className="text-brand-sand hover:text-brand-cream underline underline-offset-2"
                  >
                    +1 (555) 321-4700
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
