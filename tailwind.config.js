const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEBE98",
        secondary: "#4F5277",
        blue: {
          500: "#3B82F6",
        },
        green: {
          500: "#22C55E",
        },
        orange: {
          500: "#F97316",
        },
        rose: {
          500: "#F43F5E",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
