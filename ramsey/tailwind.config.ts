import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-brown": {
          DEFAULT: "#AF9D8F",
        },
        "secondary-tan": "#FFFDF1",
        "orange": {
          DEFAULT: "#F86900",
        },
        grey: "#747A88",
      },
      padding: {
        'nav': '98px',

      },
    },
  },
  plugins: [],
};

export default config;
