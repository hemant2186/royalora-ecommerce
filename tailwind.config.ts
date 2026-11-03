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
        royal: {
          gold: "#C49A42",
          "gold-light": "#E9D9BA",
          "gold-hover": "#B38734",
          "gold-dark": "#946B20",
          brown: "#321B11",
          "brown-dark": "#20110A",
          "brown-light": "#4F2F20",
          cream: "#F8F1E5",
          beige: "#F4EBDD",
          champagne: "#E9D9BA",
          parchment: "#FAF6EF",
          muted: "#7A685A",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        'royal': '0 10px 30px -10px rgba(50, 27, 17, 0.12)',
        'royal-gold': '0 10px 25px -5px rgba(196, 154, 66, 0.25)',
        'royal-card': '0 4px 20px rgba(50, 27, 17, 0.06)',
      },
    },
  },
  plugins: [],
};
export default config;
