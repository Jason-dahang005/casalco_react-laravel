/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'casalcoOrange' : '#ff3300',
      'lightGray'     : '#a3a3c2',
      'veryLightGray' : '#e0e0eb',
      'darkGray'      : '#47476b',
      'errorColor'    : '#ff0000'
    },
    extend: {},
  },
  plugins: [],
}