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
        }
      }
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: `${theme('fontSize.2xl')}`, fontWeight: `${theme('fontWeight.bold')}`, color: `${theme('colors.favRose.light')}` }
      })
    })
  ],
}