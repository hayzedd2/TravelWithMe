/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      lg: "976px",
      xl: "1200px",
    },
    extend: {
      colors: {
        pink: "#f85e9f",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        lexend: ['Lexend','sans-serif'],
      },
    },
  },
};
