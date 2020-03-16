const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Compile scss to css

function style(){
    // 1. Find scss file
    return gulp.src('./sass/**/*.scss')
    // 2. Pass that file through Sass compiler
        .pipe(sass().on('error', sass.logError))
    // 3. Where do I save the compiled css?
     .pipe(gulp.dest('./css'))


    // 4. Sream Change to all browser

        .pipe(browserSync.stream())
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}


exports.style = style;
exports.watch = watch;