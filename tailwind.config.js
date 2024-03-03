/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      color1:'#5C8692',
      color2:'#1E2C30',
      color3:'#7A9CA5',
      color4:"#EBF3F5",
      color5:"#555555",
      color6:"#2A444B",
      color7:"#EDF5F7",
      color8:"#95BFCB",
      color9:"#272D32",
      white:"#fff",

    },
    fontFamily:{
      playfair:["PlayfairDisplay","sans-serif"],
      manrope:["Manrope","sans-serif"]
    },
    extend: {
      lineHeight:{
        '91':'91px',
        '71.5':'71.5px',
        '58.5':'58.5px',
        '52':'52px',
        '33.8':'33.8px',
        '28.6':'28.6px',
        '23.17':'23.17px',
        '27.9':'27.9px',
        '50':'50px',
        '32.4':'32.4px',
        '80.5':'80.5px',
        '17.5':'17.5px'
      }
    },
  },
  plugins: [],
})

