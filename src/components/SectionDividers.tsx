import React from "react";

/**
 * Smooth organic coastal wave transitioning from Deep Aegean Navy (#05111D) to Soft Cream (#FFF8EF)
 */
export function HeroToDishesDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 -mt-1">
      <svg
        className="relative block w-full h-10 sm:h-16 md:h-20 lg:h-24 text-brand-cream fill-current"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,32 C240,72 480,16 720,48 C960,80 1200,24 1440,40 L1440,96 L0,96 Z" />
      </svg>
    </div>
  );
}

/**
 * Subtle organic curve transitioning from Soft Cream (#FFF8EF) to Warm Ivory (#F8F1E8)
 */
export function DishesToAboutDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 -mt-1">
      <svg
        className="relative block w-full h-8 sm:h-12 md:h-16 text-brand-ivory fill-current"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,20 C360,52 720,8 1080,36 C1260,50 1380,24 1440,28 L1440,64 L0,64 Z" />
      </svg>
    </div>
  );
}

/**
 * Smooth organic coastal tide wave transitioning from Warm Ivory (#F8F1E8) to Deep Aegean Navy (#05111D)
 */
export function AboutToReservationsDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 -mt-1">
      <svg
        className="relative block w-full h-10 sm:h-16 md:h-20 lg:h-24 text-brand-aegean fill-current"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,48 C320,12 640,84 960,40 C1200,8 1360,44 1440,48 L1440,96 L0,96 Z" />
      </svg>
    </div>
  );
}
