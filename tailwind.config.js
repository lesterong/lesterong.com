/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['"Space Grotesk"', 'Helvetica', 'ui-sans-serif'],
      body: ['Figtree', 'system-ui', 'ui-sans-serif'],
    },
    colors: {
      red: colors.red,
      green: 'hsl(142, 76%, 36%)',
      beige: 'hsl(52, 94%, 94%)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      inherit: colors.inherit,
      'd-primary': '#051923',
      'd-secondary': '#282A3A',
      'd-tertiary': '#07192C',
    },
    extend: {
      animation: {
        'bounce-right': 'bounce-right 1.2s infinite',
        'bounce-down': 'bounce-down 1.2s infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'fade-in': 'fade-in 1s infinite',
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(25%)',
          },
        },
        'bounce-down': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
          },
          '50%': {
            transform: 'translateY(10%)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, 3rem)',
      },
      screens: {
        xs: '568px',
      },
    },
  },
  plugins: [],
};
