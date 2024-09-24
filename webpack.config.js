const path = require('path');

module.exports = {
  mode: 'development',
  entry: { 
    main: './src/typingFrenzy.js',},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,

  }
