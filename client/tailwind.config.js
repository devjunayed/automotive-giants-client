/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'play': ['Playpen Sans', 'cursive'],
      'bodoni': ['Bodoni Moda']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

