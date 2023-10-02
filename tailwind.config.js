/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(51, 51, 51)',
          300: 'rgb(82, 81, 81)'
        },
        ligth: {
          100: '#FFFFFF',
          200: '#FFF9BF'
        },
        fredcode: {
          100: '#E5CF09',
          200: '#EBD729',
          300: '#FBEE7E',
        }
      }  
    },
  },
  plugins: [],
}

