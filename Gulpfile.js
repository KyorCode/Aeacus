var gulp = require('gulp');
var markdown = require('gulp-markdown');
var mocha = require('gulp-mocha');
var bower = require('gulp-bower');
var compass = require('gulp-compass');
var minifyCss = require('gulp-minify-css');


gulp.task('default', ['docs']);

gulp.task('build',['bower','compass','move-libs'])

var sources = {
    libs: [
        './srv/scripts/libs/modernizr/modernizr.js',
        './srv/scripts/libs/foundation/js/foundation.js',
        './srv/scripts/libs/fastclick/lib/fastclick.js',
        './srv/scripts/libs/jquery/dist/jquery.js',
        './srv/scripts/libs/jquery/jquery.cookie.js',
        './srv/scripts/libs/jquery/jquery.placeholder.js'
    ],
    app: ['./srv/scripts/app/***.js']
};

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

gulp.task('compass-app', function () {
    gulp.src([
        './srv/styles/Styles.scss',
        './srv/styles/normalize.scss',
        './srv/styles/foundation.scss'
    ])
        .pipe(compass({
            css: './public/css',
            sass: './srv/styles',
            image: './public/img'
        }))
//        .pipe(minifyCss())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('move-foundation', function () {
    gulp.src([
        './bower_components/foundation/scss/**/*.scss',
        '!./bower_components/foundation/scss/foundation/_settings.scss',
        '!./bower_components/foundation/scss/foundation.scss'
    ], {base: './bower_components/foundation/scss'})
        .pipe(gulp.dest('./srv/styles'));
    gulp.src('./bower_components/foundation-icon-fonts/*.scss')
        .pipe(gulp.dest('./srv/styles'));
    gulp.src([
        './bower_components/foundation-icon-fonts/*.ttf',
        './bower_components/foundation-icon-fonts/*.woff',
        './bower_components/foundation-icon-fonts/*.eot',
        './bower_components/foundation-icon-fonts/*.svg'
    ])
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch-compass', function () {
    gulp.watch(['./srv/styles/*.scss', './srv/styles/foundation/_settings.scss', '!./srv/styles/*foundation*.scss', '!./srv/styles/normalize.scss'], ['compass']);
});

gulp.task('compass', ['move-foundation', 'compass-app']);

gulp.task('move-libs', function () {
    gulp.src(sources.libs)
        .pipe(gulp.dest('./public/libs'))
});
