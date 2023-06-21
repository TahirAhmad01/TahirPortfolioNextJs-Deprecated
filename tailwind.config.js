/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        darkBgImg: "url('/bg_img/dark.jpg')",
        lightBgImg: "url(/bg_img/light.jpg')",
      },
    },
    fontFamily: {
      sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      ubutu: ['Ubuntu', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),

    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.4xl'),
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
        },
        h4: {
          fontSize: theme('fontSize.xl'),
        },
      });
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: '-8px 8px 16px #bebebe,8px -8px 16px #ffffff',
        },
      });
      addUtilities({
        '.containerCustom': {},

        '.gap': {
          paddingTop: '55px',
          paddingBottom: '55px',
        },

        '.lightBg': {
          backgroundImage:
            'linear-gradient(150deg,#BBC8EA,#CEC0D1,#D7ABC2,#CD8FB8,#B672BF)',
        },

        '.darkBg': {
          backgroundImage:
            'linear-gradient(150deg,#072847, #0E2F50,#2A4B5E,#39545F,#545F59,#636155,#885C41,#91583B,#9C4F33)',
        },
      });
    }),
  ],
});
