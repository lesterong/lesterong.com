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
    extend: {},
  },
  plugins: [],
};
