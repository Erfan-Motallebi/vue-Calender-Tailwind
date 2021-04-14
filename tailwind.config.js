// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        favRose: {
          light: '#c64756',
          default: '#e84545'
        },
        favGreen: {
          light: '#9ede73',
          dark: '#184d47'
        },
        bodyColor: '#fad586'
      },
      fontSize: {

      }
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: `${theme('fontSize.2xl')}`, fontWeight: `${theme('fontWeight.bold')}`, color: `${theme('colors.favRose.light')}` },
        'p': { fontSize: `${theme('fontSize.xl')}`, color: `${theme('colors.favGreen.dark')}`, fontFamily: `${'fontFamily.serif'}` },
        // 'h2': {}
      })
    })
  ],
}