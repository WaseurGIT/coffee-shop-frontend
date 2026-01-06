/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#F7EFEA",
          100: "#E6D3C1",
          200: "#D6B89A",
          300: "#C69D73",
          400: "#B6824C",
          500: "#8B5E3C",
          600: "#6F4E37", // main coffee color
          700: "#5A3E2B",
          800: "#45301F",
          900: "#2F2115",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
