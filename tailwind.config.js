/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      ubutu: ["Ubuntu", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),

    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.4xl"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
        },
        h4: {
          fontSize: theme("fontSize.xl"),
        },
      });
      addComponents({
        ".card": {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.lg"),
          padding: theme("spacing.6"),
          boxShadow: "-8px 8px 16px #bebebe,8px -8px 16px #ffffff",
        },
      });
      addUtilities({
        ".containerCustom": {},

        ".gap": {
          paddingTop: "55px",
          paddingBottom: "55px",
        },

        ".lightBg": {
          backgroundImage:
            "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,229,168,1) 0%, rgba(251,174,222,1) 100.7% )",
        },

        ".darkBg": {
          backgroundImage:
            "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,130,159,1) 0%, rgba(103,56,96,1) 90% )",
        },
      });
    }),
  ],
};
