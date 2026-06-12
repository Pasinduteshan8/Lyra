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
        lyra: {
          bg: "#E8EBF0",
          navy: "#1B2B4B",
          "navy-dark": "#0F1B30",
          blue: "#2D5BE3",
          "blue-light": "#4A9FFF",
          cyan: "#00C2FF",
          card: "#D0D8E8",
          "section-dark": "#2C3E5C",
          "section-mid": "#3A5070",
          muted: "#8899BB",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #3A6186 0%, #89A0B8 50%, #5B7FA6 100%)",
        "section-gradient": "linear-gradient(180deg, #E8EBF0 0%, #D0D8E8 100%)",
        "dark-gradient": "linear-gradient(135deg, #1B2B4B 0%, #2C3E5C 50%, #1B2B4B 100%)",
        "cta-gradient": "linear-gradient(135deg, #2C3E5C 0%, #3A5070 100%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 194, 255, 0.4)" },
          "50%": { boxShadow: "0 0 60px rgba(0, 194, 255, 0.8)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
