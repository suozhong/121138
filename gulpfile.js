let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    ugilify = require('gulp-uglify');

gulp.task('img', () => {
    gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})

gulp.task('sass', () => {
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min' }))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('js', () => {
    gulp.src('./src/js/*.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(ugilify())
    .pipe(gulp.dest('./dist/js'));
})

gulp.task('default', () => {
    gulp.watch('./src/img/*', ['img']);
    gulp.watch('./src/sass/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['js']);
})