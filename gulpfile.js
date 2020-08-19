'use strict';
const gulp = require('gulp');
const sass 	  = require('gulp-sass');
const watch 	  = require('gulp-watch');
const sourcemaps  = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const concat 	  = require('gulp-concat');
const uglify 	  = require('gulp-uglifyjs');
const rename 	  = require('gulp-rename');
const del 	      = require('del');
const autoprefixer = require('gulp-autoprefixer');
const gutil       = require('gulp-util');



// gulp.task('sass', function(){
//     return gulp.src('scss/*.sass')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer(['last 30 version', '>2%', 'ie 8'], {cascade: true}))
//         .pipe(gulp.dest('./src/css/'))
//         .pipe(browserSync.reload({stream: true}))
// });


gulp.task('sass-compile', function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 30 version', '>2%', 'ie 8'], {cascade: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src/css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify : false
    })
});
gulp.task('watch', function(){
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass-compile'));
    gulp.watch('./src/*.html', browserSync.reload);
    gulp.watch('./src/js/*.js', browserSync.reload);
});


gulp.task('default', gulp.parallel('browser-sync', 'watch'))
gulp.task('build', gulp.series('sass-compile', async function(){
    const buildCss = gulp.src([
        'src/css/main.css',
        'src/css/owl.carousel.min.css'])
        .pipe(gulp.dest('build/css'));
    const buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
}));

