/** @type {import('tailwindcss').Config} */
/** Coming Update in 18 oct */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserratAlternates: ["Montserrat Alternates", "sans-serif"],
        monserrat: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
      backgroundImage: {
        2: "url('./2.png')",
      },
    },
  },
  plugins: [],
};
