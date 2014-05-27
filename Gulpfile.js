var gulp = require('gulp');
var markdown = require('gulp-markdown');
var mocha = require('gulp-mocha');

gulp.task('docs', function () {
    gulp.src('README.md')
        .pipe(markdown())
        .pipe(gulp.dest('docs'));
});

gulp.task('mocha', function () {
    gulp.src('./tests/**/*.js')
        .pipe(mocha(
            {
                reporter: 'spec',
                ui: 'bdd'
            }));
});

gulp.task('bower', function () {
    bower()
        .pipe(gulp.dest('./srv/scripts/libs/'));
});

gulp.task('default', ['docs']);
