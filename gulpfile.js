'use strict'
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./com.stasio/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./com.stasio/css'));
});
gulp.task('sass:watch', function(){
	gulp.watch('./com.stasio/scss/**/*.scss',[sass]);
});