const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssNano = require('cssnano');
const cssImport = require('postcss-import');

gulp.task('postcss', function() {
  const postcss = require('gulp-postcss');

  return gulp.src('./src/02-module-main.css')
    .pipe(postcss([
      cssImport,
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      cssNano
    ]))
    .pipe(gulp.dest('./build/'));
});
