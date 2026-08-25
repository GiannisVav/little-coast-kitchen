import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          aegean: "#05111D",      // Deep Aegean Navy
          coastal: "#123047",     // Coastal Blue
          ivory: "#F8F1E8",       // Warm Ivory
          cream: "#FFF8EF",       // Soft Cream
          terracotta: "#C97745",  // Terracotta Sunset (accents & CTA only)
          terracottaHover: "#B86636",
          terracottaActive: "#A0552A",
          olive: "#626B4F",       // Olive Leaf
          mist: "#8FA3A2",        // Sea Mist
          sand: "#D8C4A0",        // Mediterranean Sand
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widestPlus: "0.22em",
        extraWide: "0.15em",
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(5, 17, 29, 0.4), 0 1px 4px -1px rgba(201, 119, 69, 0.1)',
        'warm-glow': '0 0 24px -4px rgba(201, 119, 69, 0.25)',
        'btn-terracotta': '0 4px 14px 0 rgba(201, 119, 69, 0.35)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -16px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
