const withWorkbox = require('next-with-workbox');

module.exports = withWorkbox({
  workbox: {
    dest: 'public',
    swDest: 'sw.js',
    swSrc: 'src/services/service-worker.js',
    force: false,
  },
  src: './src',
});
