/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'olive-green': '#558235',
        gray: '#D9D9D9',
      },
      height: {
        '90%': '90%',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
