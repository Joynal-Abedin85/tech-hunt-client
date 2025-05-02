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
      colors: {
        bg: '#0F172A',
        text: '#F8FAFC',
        hover: '#38BDF8',
        border: '#334155',
        card: '#1E293B',
        primary: '#6366F1',
        secondary: '#939393',
        accent: '#46007f',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}

