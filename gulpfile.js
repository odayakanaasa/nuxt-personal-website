'use strict';

/*
 * Import dependencies
 */
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css'),
  merge = require('merge-stream'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  autoprefixer = require('gulp-autoprefixer'),
  assetPath = './assets/',
  publicPath = './static/'
/*
 * Command 'gulp', default!
 */
gulp.task('default', [ 'sass', 'js'])

/*
 * SASS + CSS compilation
 */
gulp.task('sass', function () {

  var scssStream = gulp.src(assetPath + 'sass/*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      precison: 3
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({ advanced : true }))
    .pipe(concat('scss-asssets.scss'))
  var cssStream = gulp.src([
    './node_modules/bootstrap/dist/css/bootstrap.min.css'
  ])
    .pipe(concat('css-asssets.css'))
    .pipe(cleanCSS({ advanced : true }))

  return merge(scssStream, cssStream)
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(publicPath + 'css'))

})


/*
 * Command 'gulp watch'
 */
gulp.task('watch', function () {
  gulp.watch(assetPath + 'sass/*.scss', ['sass']);
})