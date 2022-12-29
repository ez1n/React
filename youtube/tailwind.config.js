/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      scale: {
        '102': '1.02'
      },
      flex: {
        '4': '0.4 0 auto',
        '6': '0.6 0 auto'
      },
      width: {
        '0.6': '60%',
        '0.4': '40%'
      }
    },
  },
  plugins: [],
}
