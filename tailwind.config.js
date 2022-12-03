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
      'red-100': 'hsl(0, 74%, 42%)',
      'green-100': 'hsl(142, 76%, 36%)',
      'beige-100': 'hsl(52, 94%, 94%)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        ...colors.gray,
        100: 'hsl(0, 0%, 66%)',
        200: 'hsl(0, 0%, 15%)',
        300: 'hsl(0, 0%, 10%)',
      },
      emerald: colors.emerald,
      indigo: {
        ...colors.indigo,
        100: 'hsl(234, 89%, 74%)',
        200: 'hsl(243, 75%, 59%)',
        300: 'hsl(244, 55%, 41%)',
      },
      yellow: colors.yellow,
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
    },
  },
  plugins: [],
};
