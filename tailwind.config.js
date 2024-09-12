/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#364F6B",
        secondary: "#3FC1C9",
        tertiary: "#FC5185",
        bg_primary: "#FFFFFF",
        bg_secondary: "#F8F8F8",
        bg_tertiary: "#FAFAFA",
        text_primary: "#181616",
        text_secondary: "#333333",
        text_tertiary: "#898989",
        card_primary: '#181616',
        card_secondary: '#333333',
        card_tertiary: '#727272',
      },
    },
  },
  plugins: [],
};
