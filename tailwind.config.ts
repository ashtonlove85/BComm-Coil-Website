import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0F0F0F",
        cream: "#F5F0E8",
        coral: "#FF4D4D",
        gold: "#C9A84C"
      },
      fontFamily: {
        display: ["Clash Display", "system-ui", "sans-serif"],
        body: ["Satoshi", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,77,77,0.45), 0 15px 50px rgba(255,77,77,0.25)"
      },
      backgroundImage: {
        "radial-ink":
          "radial-gradient(circle at 20% 0%, rgba(255, 77, 77, 0.20), transparent 40%), radial-gradient(circle at 80% 20%, rgba(201, 168, 76, 0.18), transparent 38%)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        float: "float 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
