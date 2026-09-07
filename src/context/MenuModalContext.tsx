"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface MenuModalContextType {
  isOpen: boolean;
  openMenuModal: () => void;
  closeMenuModal: () => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const MenuModalContext = createContext<MenuModalContextType | undefined>(undefined);

export function MenuModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const openMenuModal = () => setIsOpen(true);
  const closeMenuModal = () => setIsOpen(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenuModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <MenuModalContext.Provider
      value={{
        isOpen,
        openMenuModal,
        closeMenuModal,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </MenuModalContext.Provider>
  );
}

export function useMenuModal() {
  const context = useContext(MenuModalContext);
  if (!context) {
    throw new Error("useMenuModal must be used within a MenuModalProvider");
  }
  return context;
}
