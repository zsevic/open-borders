const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/services/service-worker.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'service-worker.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
      },
    ],
  },
};
