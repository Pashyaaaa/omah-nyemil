/** @type {import('tailwindcss').Config} */
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
