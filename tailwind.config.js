/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      color1:'#5C8692',
      color2:'#1E2C30',
      color3:'#7A9CA5'
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
        '32.4':'32.4px'
      }
    },
  },
  plugins: [],
}

