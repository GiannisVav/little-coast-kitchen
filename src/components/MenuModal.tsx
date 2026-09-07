"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { X, Search, Sparkles, UtensilsCrossed, Calendar } from "lucide-react";
import { useMenuModal } from "@/context/MenuModalContext";
import { MenuItem, MENU_CATEGORIES, INITIAL_MENU_ITEMS } from "@/lib/menuData";
import { smoothScrollTo } from "@/lib/scrollTo";

export default function MenuModal() {
  const { isOpen, closeMenuModal, selectedCategory, setSelectedCategory } = useMenuModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_MENU_ITEMS);
  const [loading, setLoading] = useState(false);

  // Fetch from API on mount
  useEffect(() => {
    async function loadMenu() {
      try {
        setLoading(true);
        const res = await fetch("/api/menu");
        if (res.ok) {
          const data = await res.json();
          if (data.dishes && data.dishes.length > 0) {
            setMenuItems(data.dishes);
          }
        }
      } catch (err) {
        console.warn("Using default menu items");
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  // Filter items by category & search query
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [menuItems, selectedCategory, searchQuery]);

  // Group filtered items by category
  const groupedCategories = useMemo(() => {
    const categoriesToGroup =
      selectedCategory === "All"
        ? MENU_CATEGORIES.filter((c) => c !== "All")
        : [selectedCategory];

    return categoriesToGroup
      .map((cat) => ({
        category: cat,
        items: filteredItems.filter((item) => item.category === cat),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredItems, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
      className="fixed inset-0 z-50 flex flex-col bg-brand-aegean/98 text-brand-ivory backdrop-blur-2xl animate-fade-in overflow-hidden"
    >
      {/* Soft Ambient Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-[28rem] w-[28rem] rounded-full bg-brand-terracotta/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-20 h-[32rem] w-[32rem] rounded-full bg-brand-sand/10 blur-[130px]"
      />

      {/* 1. Modal Top Bar (Sticky Header) */}
      <header className="sticky top-0 z-30 flex shrink-0 flex-col border-b border-brand-sand/20 bg-brand-aegean/95 px-6 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          {/* Brand Logo & Modal Title */}
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-20 sm:h-12 sm:w-24">
              <Image
                src="/assets/logos/logo-light.png"
                alt="Little Coast Mediterranean Kitchen"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="hidden h-6 w-[1px] bg-brand-sand/30 sm:block" aria-hidden="true" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-sand sm:text-xs">
                Little Coast
              </p>
              <h2 id="menu-modal-title" className="font-serif text-xl sm:text-2xl font-normal text-brand-cream">
                Full Menu
              </h2>
            </div>
          </div>

          {/* Search Bar & Close Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative hidden w-48 sm:block md:w-64">
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-brand-sand/30 bg-brand-coastal/50 px-4 py-2 pl-9 text-xs text-brand-cream placeholder:text-brand-ivory/50 focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
              />
              <Search className="pointer-events-none absolute left-3 top-2.5 h-3.5 w-3.5 text-brand-sand/70" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-brand-ivory/60 hover:text-brand-cream"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeMenuModal}
              className="inline-flex items-center justify-center rounded-full border border-brand-sand/40 bg-brand-coastal/60 p-2.5 text-brand-ivory backdrop-blur-sm transition-all hover:border-brand-sand hover:bg-brand-coastal hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta cursor-pointer shadow-sm"
              aria-label="Close menu modal"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mx-auto mt-4 flex w-full max-w-7xl items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-brand-terracotta text-brand-cream shadow-sm"
                  : "border border-brand-sand/25 bg-brand-coastal/30 text-brand-ivory/80 hover:border-brand-sand/60 hover:text-brand-cream"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* 2. Modal Body (Scrollable Dishes View) */}
      <main className="flex-1 overflow-y-auto px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Mobile Search Bar */}
          <div className="mb-8 block sm:hidden">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-brand-sand/30 bg-brand-coastal/50 px-4 py-2.5 pl-10 text-xs text-brand-cream placeholder:text-brand-ivory/50 focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
              />
              <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-brand-sand/70" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3 text-brand-ivory/60 hover:text-brand-cream"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* If No Results */}
          {groupedCategories.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <UtensilsCrossed className="h-12 w-12 stroke-brand-sand/40" />
              <h3 className="mt-4 font-serif text-2xl font-normal text-brand-cream">
                No dishes found
              </h3>
              <p className="mt-2 text-sm text-brand-ivory/70 max-w-sm">
                We couldn&apos;t find any dishes matching &ldquo;{searchQuery}&rdquo;. Try another term or reset your category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="btn-secondary mt-6 text-xs uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            /* Categorized Dishes */
            <div className="space-y-16 sm:space-y-20">
              {groupedCategories.map((group) => (
                <section key={group.category} aria-labelledby={`category-${group.category}`}>
                  {/* Category Header */}
                  <div className="mb-8 border-b border-brand-sand/20 pb-3 flex items-baseline justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-olive">
                        Category
                      </p>
                      <h3
                        id={`category-${group.category}`}
                        className="font-serif text-2xl sm:text-3xl font-normal text-brand-cream"
                      >
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-xs text-brand-sand/70 font-light">
                      {group.items.length} {group.items.length === 1 ? "item" : "items"}
                    </span>
                  </div>

                  {/* Dishes Grid */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((dish) => {
                      const hasImage = Boolean(dish.image);

                      return (
                        <article
                          key={dish.id}
                          className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-sand/20 bg-brand-coastal/40 p-5 transition-all duration-300 hover:border-brand-sand/60 hover:bg-brand-coastal/60 hover:shadow-warm-sm"
                        >
                          <div>
                            {/* Auto-Cropped 1:1 Square Image (For dishes WITH images) */}
                            {hasImage && (
                              <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-brand-aegean/60">
                                <Image
                                  src={dish.image!}
                                  alt={dish.name}
                                  fill
                                  loading="lazy"
                                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                                {dish.isSignature && (
                                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-brand-terracotta/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-cream shadow-sm backdrop-blur-sm">
                                    <Sparkles className="h-3 w-3" />
                                    <span>Signature</span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Dish Header: Name & Price */}
                            <div className="flex items-baseline justify-between gap-3">
                              <h4 className="font-serif text-xl font-medium tracking-tight text-brand-cream group-hover:text-brand-sand transition-colors">
                                {dish.name}
                              </h4>
                              <span className="font-sans text-base font-semibold tracking-tight text-brand-terracotta shrink-0">
                                {dish.price}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="mt-2 text-sm leading-relaxed text-brand-ivory/80 font-light">
                              {dish.description}
                            </p>
                          </div>

                          {/* Dietary / Feature Tags */}
                          {dish.tags && dish.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-brand-sand/15">
                              {dish.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-md border border-brand-sand/20 bg-brand-aegean/50 px-2 py-0.5 text-[10px] font-medium tracking-wider text-brand-sand/90 uppercase"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Bottom Reservation Call to Action */}
          <div className="mt-20 rounded-3xl border border-brand-sand/30 bg-brand-coastal/50 p-8 text-center sm:p-12">
            <h4 className="font-serif text-2xl sm:text-3xl font-normal text-brand-cream">
              Ready to experience our table?
            </h4>
            <p className="mt-2 text-sm text-brand-ivory/80 max-w-md mx-auto">
              Join us for wood-fired Mediterranean cooking by the harbor. Walk-ins are always welcomed at our sunset bar.
            </p>
            <button
              type="button"
              onClick={() => {
                closeMenuModal();
                smoothScrollTo("#reservations");
              }}
              className="btn-primary mt-6 inline-flex items-center gap-2 cursor-pointer shadow-btn-terracotta"
            >
              <Calendar className="h-4 w-4" />
              <span>Reserve a table</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
