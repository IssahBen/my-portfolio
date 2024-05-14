/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marine_blue: "hsl(213, 96%, 18%)",
        cool_gray: " hsl(231, 11%, 63%)",
        light_blue: "hsl(231, 100%, 20%)",
        purplish_blue: "hsl(243, 100%, 62%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
