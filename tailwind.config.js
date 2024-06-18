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
        customRed: {
          50: "#fff2ed",
          100: "#ffe2d4",
          200: "#ffc0a8",
          300: "#ff9471",
          400: "#ff5d38",
          500: "#fe3311",
          600: "#ef1a07",
          700: "#c60d08",
          800: "#9d0f11",
          900: "#7e1011",
          950: "#440609",
        },
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        serif: ["var(--font-P22Underground)", "serif"],
        sans: ["var(--font-Halyard)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),
  ],
};
