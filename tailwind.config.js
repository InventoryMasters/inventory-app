/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['public/**/*.{html,js,jsx}'],

  theme: {
    fontFamily: {
      encode: ['Encode Sans Condensed', 'sans-serif'],
      abril: ['Abril Fatface', 'serif'],
      epilogue: ['Epilogue', 'sans-serif'],
    },

    fontWeight: {
      thin: 100,
      'extra-light': 200,
      light: 300,
      regular: 400,
      medium: 500,
      'semi-bold': 600,
      bold: 700,
      'extra-bold': 800,
      black: 900,
    },

    extend: {
      colors: {
        'primary-logo': '#CCB099',
        'primary-light-gray': '#616161',
        'primary-dark-gray': '#323232',
        'primary-backdrop': '#F6F8F6',
        'primary-popup': '#D6CBC4',
      },
      screens: {
        '4xl': '1920px',
        '5xl': '2560px',
        '6xl': '3440px',
        '7xl':'3840px'
      }
    },
  },

  plugins: [],
};
