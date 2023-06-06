/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-green': '#DFF5EF',
        'dark-green': '#308C88'
      },
      fontFamily: {
        'cursive-header': 'Homemade Apple, cursive',
        'courier': ['courier']
      }
    },
  },
  plugins: [],
}

