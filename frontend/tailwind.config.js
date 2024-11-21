/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1C1F26',
        'light-blue': '#344F73',
        'light-red': '#FF6B6B',
        'navy-blue': '#232C3F',
      },
    },
  },
  plugins: [],
}

