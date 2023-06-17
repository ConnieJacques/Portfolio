/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-green': '#DFF5EF',
        'dark-green': '#308C88',
        'saturated-green': '#CDEFE5'
      },
      fontFamily: {
        'cursive-header': 'Homemade Apple, cursive',
        // 'courier': ['courier'],
        // 'lato': ['lato'],
        'raleway': 'Raleway, sans-serif'
      }
    },
  },
  plugins: [],
}

