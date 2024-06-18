const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkerBg: "#ebe5d4",
        link: "#4760a5",
        hover: "#eB5a4a",
        subHeading: "#eB5a4a",
        blackText: "#000000",
        lighterBg: "#f5f4f0",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        serif: ["var(--font-P22Underground)", "serif"],
        sans: ["var(--font-Dapifer)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),
  ],
};
