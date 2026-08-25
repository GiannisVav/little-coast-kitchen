"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "fade" | "scale" | "fade-down";
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-7 pointer-events-none";
      case "fade-down":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-6 pointer-events-none";
      case "scale":
        return isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none";
      case "fade":
      default:
        return isVisible
          ? "opacity-100"
          : "opacity-0 pointer-events-none";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "750ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
