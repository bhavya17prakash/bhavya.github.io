const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  jit: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      accent: "#3898FF",
    },
    extend: {
      screens: {
        xxs: "280px",
        ...defaultTheme,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      margin: ["last"],
    },
  },
  plugins: [],
  future: {
    webpack5: true,
  },
};
