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
        universe: {
          bg: "#101010",
          surface: "#181818",
          card: "#202020",
          border: "#282828",
          text: "#F2EFE7",
          muted: "#77766F",
          accent: "#D8FF3E",       // Signature Acid Green
          secondary: "#FF674A",    // Editorial Coral / Orange
          subtle: "#1c1c1c",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wide: "0.08em",
        widest: "0.15em",
        ultra: "0.25em",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-slow": "pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
