/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        raleway: ['Raleway']
      },
      colors: {
        background: '#090608',
        primary: '#19E5B0',
        secondary: '#BD99FF'
      },
      backgroundImage: {
        'footer': "url('./src/img/rain.svg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

