'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var fs = require('fs');
var sass = require('gulp-sass');

var paths = {
	src: './src',
	dist: './dist'
};

gulp.task('javascript', function() {

	return browserify(paths.src + '/js/main.js')
  		.transform("babelify", {presets: ['react']})
  		.bundle()
  		.pipe(fs.createWriteStream(paths.dist + '/bundle.js'));
});

gulp.task('sass', function () {
  gulp.src(paths.src + '/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dist + '/css'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch(paths.src + '/sass/**/*.scss', ['sass']);
  gulp.watch(paths.src + '/js/**/*.js', ['javascript']);
});


gulp.task('build', ['javascript', 'sass']);
gulp.task('default', ['build']);