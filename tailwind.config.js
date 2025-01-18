import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "bosta-red": "#E30613",
        teal: "#0098A5",
      },

      backgroundColor: {
        "teal-light": "#F3FAFB",
      },
      textColor: {
        "gray-dark": "#111619",
      },
    },
  },
  plugins: [],
};
