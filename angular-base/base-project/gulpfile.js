var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

var paths = [
    '!./app/dist/*.js',
    '!./app/libs/*.js',
    './app/*.js',
    './app/**/*module.js',
    './app/**/!(*module).js',
    './app/**/**/*.js'
];

var csspaths = [
    './app/*.css',
    './app/styles/*.css'
];

gulp.task('default', ['watch', 'browser-sync', 'concat', 'concat-css'], function() {
    gulp.watch(".app/styles/*.css", ['bs-reload']);
    gulp.watch(["*.html", "**/*.html"], ['bs-reload']);
    gulp.watch(paths, ['bs-reload']);
});

gulp.task('watch', function() {
    gulp.watch(paths, ['concat']);
    gulp.watch(csspaths, ['concat-css']);
});

gulp.task('concat', function() {
    return gulp.src(paths)
        .pipe(concat('prod-min.js'))
        .pipe(uglify({
            mangle : false
        }))
        .pipe(gulp.dest('./app/dist/'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('concat-css', function() {
    return gulp.src(csspaths)
        .pipe(concat('prod-min-css.css'))
        .pipe(gulp.dest('./app/dist/'))
        .pipe(browserSync.reload({stream:true}));
});

// Create the server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        },
        // Dummy port, can change later
        port: 9001
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});