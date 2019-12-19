const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/sass/app.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/app.sass', gulp.series('sass'));
});
