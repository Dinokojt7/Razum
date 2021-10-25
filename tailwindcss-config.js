module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.js', './src/**/**/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  
  plugins: [],
}
