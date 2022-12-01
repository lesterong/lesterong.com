/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Space Grotesk"', 'Helvetica', 'ui-sans-serif'],
      body: ['Figtree', 'system-ui', 'ui-sans-serif'],
    },
    colors: {
      'beige-100': 'hsl(52, 94%, 94%)',
      'gray-200': 'hsl(0, 0%, 15%)',
      'gray-300': 'hsl(0, 0%, 10%)',
      'indigo-100': 'hsl(234, 89%, 74%)',
      'indigo-200': 'hsl(243, 75%, 59%)',
      'indigo-300': 'hsl(244, 55%, 41%)',
      white: 'hsl(0, 0%, 100%)',
      transparent: 'transparent',
    },
    extend: {
      animation: {
        'bounce-right': 'bounce-right 1.2s infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
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
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
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
