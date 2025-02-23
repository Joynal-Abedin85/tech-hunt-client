/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        calligraphy: ['Great Vibes', 'cursive'], // Add Great Vibes as the calligraphy font
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}

