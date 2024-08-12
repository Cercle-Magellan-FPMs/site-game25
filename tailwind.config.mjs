/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Berlin Sans FB", ...defaultTheme.fontFamily.sans],
        edition: ["GROBOLD", ...defaultTheme.fontFamily.sans],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "infinite-scroll-right": "scroll forwards 30s linear infinite",
        "infinite-scroll-left": "scroll reverse 30s linear infinite",
      },
      keyframes: {
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
      },
    },
  },
  plugins: [],
};
