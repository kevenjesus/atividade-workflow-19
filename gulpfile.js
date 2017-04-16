var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');


// Minify HTML
gulp.task('minify-html', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});


// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('./source/scss/*.scss')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});


//Watch
gulp.task('watch', function(){
	gulp.watch('./source/scss/*.scss',['minify-css']);
	gulp.watch('./source/*.html',['minify-html']);
});