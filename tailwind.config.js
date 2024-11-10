/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-button":'#1C8FFF'
      }
    },
  },
  plugins: [
    function ({addUtilities}){
      const extendUnderline = {
        '.underline':{
          'textDecoration': 'underline',
          'text-decoration-color': '#1C8FFF',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}

