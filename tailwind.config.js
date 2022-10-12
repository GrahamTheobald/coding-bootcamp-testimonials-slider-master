/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'],
      },
      colors: {
        DarkBlue: "hsl(240, 38%, 20%)",
        GrayishBlue: "hsl(240, 18%, 77%)",
      }
    },
  },
  plugins: [],
}
