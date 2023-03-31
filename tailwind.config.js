/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  media: false,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",
    },
    keyframes: {
      pulse: {
        "0%, 100%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0.5,
        },
      },
    },
    animation: {
      pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    extend: {},
    fontFamily: {
      body: ["Andada Pro", "serif"],
      sans: ["ui-sans-serif", "system-ui"],
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};