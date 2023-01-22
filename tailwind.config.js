/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"], transform: (content) => content.replace(/taos:/g, './dist/*.html'),
  theme: {
    extend: {
      fontFamily: {
        Mont: ['Montserrat'],
        Poppins: ['Poppins'],
      }
    },
  },
  plugins: [],
}