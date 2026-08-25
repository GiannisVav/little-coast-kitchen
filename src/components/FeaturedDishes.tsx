"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/scrollTo";
import ScrollReveal from "./ScrollReveal";

interface Dish {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}

const dishes: Dish[] = [
  {
    id: "chicken-souvlaki",
    name: "Chicken Souvlaki",
    image: "/assets/showcased-dishes/chicken-souvlaki.png",
    description: "Char-grilled skewers, lemon, mountain oregano, and house-made cucumber tzatziki.",
    price: "$24",
  },
  {
    id: "grilled-salmon",
    name: "Grilled Salmon",
    image: "/assets/showcased-dishes/grilled-salmon.png",
    description: "Wood-fired wild fillet, salted capers, charred lemon, and fresh garden dill.",
    price: "$32",
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops",
    image: "/assets/showcased-dishes/lamb-chops.png",
    description: "Rosemary-crusted chops, roasted garlic confit, crisp baby potatoes, and fresh mint.",
    price: "$38",
  },
  {
    id: "grilled-octopus",
    name: "Grilled Octopus",
    image: "/assets/showcased-dishes/grilled-octopus.png",
    description: "Caramelized tender tentacle, yellow fava purée, capers, and red wine vinegar.",
    price: "$28",
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    image: "/assets/showcased-dishes/greek-salad.png",
    description: "Heirloom tomatoes, Persian cucumbers, Kalamata olives, barrel-aged feta, and olive oil.",
    price: "$18",
  },
  {
    id: "galaktoboureko",
    name: "Galaktoboureko",
    image: "/assets/showcased-dishes/galaktoboureko.png",
    description: "Crisp golden phyllo pastry filled with warm semolina custard and spiced citrus syrup.",
    price: "$14",
  },
];

export default function FeaturedDishes() {
  return (
    <section
      id="menu"
      aria-labelledby="featured-dishes-heading"
      className="w-full bg-brand-cream px-6 py-20 text-brand-aegean sm:px-8 sm:py-28 lg:px-12 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal variant="fade-up" className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-olive sm:text-sm">
            From the kitchen
          </p>
          <h2
            id="featured-dishes-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-brand-aegean sm:text-4xl lg:text-5xl"
          >
            Featured Dishes
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-brand-coastal/85 sm:text-lg">
            Cooked over open embers with seasonal harvest from coastal growers and Aegean fishers.
          </p>
        </ScrollReveal>

        {/* 3-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <ScrollReveal
              key={dish.id}
              variant="fade-up"
              delay={(index % 3) * 120}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/80 p-4 sm:p-5 border border-brand-sand/30 transition-all duration-300 hover:border-brand-sand/70 hover:shadow-warm-sm">
                {/* 1:1 Aspect Ratio Square Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-brand-sand/20">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-5 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-xl font-medium tracking-tight text-brand-aegean transition-colors duration-300 group-hover:text-brand-coastal sm:text-2xl">
                        {dish.name}
                      </h3>
                      <span className="font-sans text-base font-semibold tracking-tight text-brand-terracotta shrink-0">
                        {dish.price}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-brand-coastal/80">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Centered Ghost Button: "See full menu" with Smooth Scroll */}
        <ScrollReveal variant="fade-up" delay={200} className="mt-14 sm:mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => smoothScrollTo("#reservations")}
            className="group inline-flex items-center justify-center rounded-full border border-brand-coastal/35 bg-transparent px-8 py-3.5 text-xs sm:text-sm font-medium tracking-widest uppercase text-brand-coastal transition-all duration-300 ease-out hover:border-brand-coastal hover:bg-brand-coastal hover:text-brand-cream active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coastal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream cursor-pointer"
          >
            <span>See full menu & reserve</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
