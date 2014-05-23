var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('docs', function () {
    gulp.src('README.md')
        .pipe(markdown())
        .pipe(gulp.dest('docs'));
});

gulp.task('default', ['docs']);
