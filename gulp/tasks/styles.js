var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    rgba = require('postcss-hexrgba');


gulp.task('styles', function () {
    // console.log("CSS has been processed/compiled");
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([
            cssImport,
            mixins,
            cssvars,
            nested,
            rgba,
            autoprefixer
        ]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});