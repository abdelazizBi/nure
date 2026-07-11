import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: "#F7F2EA",
        ivory: "#FFF9EF",
        sand: "#DCC7AB",
        champagne: "#C8A96A",
        rose: "#D3B2A7",
        charcoal: "#1E1C1A",
        sage: "#A8A68F",
        smoke: "#EFE7DD",
      },
      fontFamily: {
        editorial: ["Georgia", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "Avenir Next",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(200, 169, 106, 0.22)",
        pearl: "0 18px 70px rgba(120, 91, 50, 0.12)",
      },
      backgroundImage: {
        "pearl-radial":
          "radial-gradient(circle at 50% 20%, rgba(255, 249, 239, 0.95), rgba(247, 242, 234, 0.78) 36%, rgba(220, 199, 171, 0.22) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0)", opacity: "0.22" },
          "50%": { transform: "translate3d(18px, -22px, 0)", opacity: "0.46" },
          "100%": { transform: "translate3d(0, 0, 0)", opacity: "0.22" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        drift: "drift 11s ease-in-out infinite",
        reveal: "reveal 700ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
