/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rougeRed: "#D32F2F", // Un rojo con fuerza pero profesional
        rougeBlack: "#1A1A1A",
      },
      fontFamily: {
        title: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};