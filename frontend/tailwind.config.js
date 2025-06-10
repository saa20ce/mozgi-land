/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '576px',
      'sm-h': { 'raw': '(min-width: 576px) and (orientation: landscape)' },
      'md': '768px',
      'md-h': { 'raw': '(min-width: 768px) and (orientation: landscape)' },
      'lg': '992px',
      'xl': '1140px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        'sm-h': '20px', // Для Mobile-hor
        md: '24px',
        lg: '24px',
        xl: '24px',
      },
      maxWidth: {
        DEFAULT: '535px', // Mobile-ver
        'sm-h': '719px',  // Mobile-hor
        md: '927px',      // Tablet-ver
        lg: '1904px',     // Tablet-hor
        xl: '1140px',     // Desktop
      },
    },
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
};