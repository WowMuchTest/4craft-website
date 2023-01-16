/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  plugins: [
    require('taos/plugin')
  ],
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