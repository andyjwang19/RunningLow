/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        periwinkle: "#C6D4FF",
        navy: "#0D3B66",
        salmon: "#E5C1BD",
      },
      fontFamily: { Anybody: "AnybodyUltraCondensed-Bold.ttf" },
    },
  },
  plugins: [],
};
