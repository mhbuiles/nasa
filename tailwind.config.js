import plugin from "tailwindcss/plugin";
import { theme } from "tailwindcss/defaultConfig";
import { black as _black, white as _white } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Museo Sans Rounded"', ...theme.fontFamily.sans],
      },
      boxShadow: {
        card: "0 5px 15px 0 rgba(0, 0, 0, 0.4)",
      },
    },
    colors: {
      transparent: "transparent",
      blue: "#3CB4E5",
      black: _black,
      "dark-blue": "#051C2C",
      red: "#E1251B",
      yellow: "#FED925",
      white: _white,
      green: "#00AE42",
      orange: "#FF6B00",
      "light-green": "#A2D45E",
    },
  },
  plugins: [],
}

export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  plugin(({ addVariant }) => {
    addVariant("firefox", "@-moz-document url-prefix()");
    addVariant("safari", "@media not all and (min-resolution:.001dpcm)");
  }),
];