/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      screens: {
        "xs": "200px"
      },
    },
  },
  plugins: [],
};
