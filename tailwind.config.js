module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.postcss'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Victor Mono', 'monospace'],
        maintitle: ['Georama', 'cursive'],
      },
      fontSize: {
        '7xl': '5rem',
      },
      colors: {
        'bglight': '#EFEEEB',
        'fgbrown': '#988480',
      }
    },
  },
}
