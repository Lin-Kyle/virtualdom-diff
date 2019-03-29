const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['iOS >= 6', 'Android >= 4', 'IE >= 9']
    })
  ]
};