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
        // bg: '#0F172A',
        // text: '#F8FAFC',
        // hover: '#38BDF8',
        // border: '#334155',
        // card: '#1E293B',
        // primary: '#6366F1',
        // secondary: '#939393',
        // accent: '#46007f',

        // bg: '#1E1B2E',
        // text: '#F1F0FF',
        // hover: '#A78BFA',
        // border: '#3F3A60',
        // card: '#2A263D',
        // primary: '#7C3AED',
        // secondary: '#C084FC',
        // accent: '#46007f',

        // bg: '#0B0B0B',
        // text: '#E5E5E5',
        // hover: '#1E90FF',
        // border: '#2E2E2E',
        // card: '#1A1A1A',
        // primary: '#FF6B6B',
        // secondary: '#A1A1AA',
        // accent: '#F43F5E',


        bg: '#0E001B',
        text: '#FFFFFF',
        hover: '#8B5CF6',
        border: '#2A0055',
        card: '#1B0C30',
        primary: '#6D28D9',
        secondary: '#A78BFA',
        accent: '#7C3AED',
        


      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}

