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
        bri: ["Brioche", "sans-serif"],
        ros: ["Roashe", "sans-serif"]
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-tan": {
          DEFAULT: "#FFFDF1",
          100: "#F5F8FF",
        },
        "secondary-brown": "#AF9D8F",
        "green": {
          DEFAULT: "#094C3B",
          100:"#40695F",
        },
        "orange": {
          DEFAULT: "#F86900",
          100:"#FBC69E",
        },
        grey: "#D9D9D9",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0},
          '100%': { opacity: 1},
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.9s ease-out forwards',
        fadeInLeftRecipe: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
