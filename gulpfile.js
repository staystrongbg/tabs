var gulp = require('gulp');
var uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('minify-js', (cb) => {
  gulp.src('src/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
  return cb();
});

gulp.task('minify-css', () => {
  return gulp
    .src('src/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});

//ne moze!
gulp.task('autoprefix-css', () => {
  return gulp
    .src('src/styles.css')
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('copyHtml', (cb) => {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
  cb();
});
