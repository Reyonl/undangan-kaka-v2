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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Minangkabau Traditional Luxury Palette
        minang: {
          maroon: {
            light: "#8C242C",
            DEFAULT: "#6B171D",
            dark: "#4E0E13",
            deep: "#2D070B",
          },
          gold: {
            light: "#E8CE75",
            DEFAULT: "#C5A880",
            dark: "#A88850",
            antique: "#D4AF37",
          },
          cream: {
            DEFAULT: "#FDFBF7",
            soft: "#F8F3EC",
            dark: "#EFE6D8",
          },
          charcoal: {
            DEFAULT: "#1F1919",
            soft: "#302626",
            muted: "#5C4F4F",
          },
        },
        // Bali Artistic Cultural Palette
        bali: {
          terracotta: {
            light: "#FFA68C",
            DEFAULT: "#E07A5F",
            dark: "#B55A2B",
            deep: "#8A3B1A",
          },
          gold: {
            light: "#FFE39E",
            DEFAULT: "#D4AF37",
            dark: "#C5A880",
          },
          coral: "#FF6F61",
          jade: "#2D5A4E",
        },
        wedding: {
          ivory: "#FDFBF7",
          linen: "#F8F3EC",
          sand: "#EFE6D8",
          gold: {
            light: "#E8CE75",
            DEFAULT: "#C5A880",
            dark: "#A88850",
            deep: "#7C5D35",
          },
          espresso: "#1F1919",
          charcoal: "#302626",
          taupe: "#5C4F4F",
          pebble: "#8C7E7E",
          border: "#E8DFD3",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "'Playfair Display'", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "shimmer": "shimmerSweep 3.2s ease-in-out infinite",
        "float-gentle": "floatGentle 7s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.5s ease-out infinite",
        "ken-burns": "kenBurns 28s ease-in-out infinite",
        "text-glow": "textGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmerSweep: {
          "0%":   { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(250%) skewX(-12deg)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "30%":       { transform: "translateY(-6px) rotate(0.5deg)" },
          "70%":       { transform: "translateY(-3px) rotate(-0.5deg)" },
        },
        pulseRing: {
          "0%":   { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.45)" },
          "70%":  { boxShadow: "0 0 0 8px rgba(212, 175, 55, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0)" },
        },
        kenBurns: {
          "0%":   { transform: "scale(1.08) translate(0px, 0px)" },
          "33%":  { transform: "scale(1.12) translate(-8px, -4px)" },
          "66%":  { transform: "scale(1.10) translate(6px, -6px)" },
          "100%": { transform: "scale(1.08) translate(0px, 0px)" },
        },
        textGlow: {
          "0%, 100%": { textShadow: "0 0 8px rgba(232, 206, 117, 0)" },
          "50%":       { textShadow: "0 0 16px rgba(232, 206, 117, 0.4)" },
        },
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
      },
    },
  },
  plugins: [],
};
export default config;
