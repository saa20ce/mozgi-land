/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1C1F26', // фон страницы
        'light-blue': '#3C4A6B', // фон кнопки "О нас"
        'light-red': '#FF6B6B', // фон кнопки "Получить консультацию"
      },
    },
  },
  plugins: [],
}

