/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-tan": {
          DEFAULT: "#FFFDF1",
          100: "#F5F8FF",
        },
        "secondary-brown": "#AF9D8F",
        "green": {
          DEFAULT: "#094C3B"
        },
        "orange": {
          DEFAULT: "#F86900",
        },
        grey: "#D9D9D9",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      },
    },
  },
  plugins: [],
};