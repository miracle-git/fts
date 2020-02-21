const autoprefixer = require('autoprefixer');
const cssImport = require('postcss-import');
const cssNano = require('cssnano');
const cssNext = require('postcss-cssnext');
const precss = require('precss');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['>10%'] // ['last 2 versions'], ['Firebox > 1']
    }),
    cssImport,
    cssNano,
    cssNext,
    precss
  ]
};
