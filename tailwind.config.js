module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#11142D',
      'secondary': '#808191',
      'link': '#5F75EE',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#6C5DD3',
      'primaryShade': '#CFC8FF',
      'secondary': '#0049C6',
      'accent2': '#FF754C',
    }),
    screens: {
      'mobile': { 'max': '730px' },
      'non-mobile': { 'min': '731px' },
    },
    fontFamily: {
      'poppins': ['Poppins']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
