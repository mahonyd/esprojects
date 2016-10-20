/// <binding BeforeBuild='clean' AfterBuild='default' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    rimraf = require("rimraf"),
    fs = require("fs"),
    less = require("gulp-less"),
    uglify = require('gulp-uglify'),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin");

var webroot = 'wwwroot/';

var paths = {
    //js: webroot + "js/**/*.js",
    js: webroot + "js/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    jsDest: webroot + "js",
    cssDest: webroot + "css",
    concatJsDest: webroot + "js/site.min.js",
    concatCssDest: webroot + "css/site.min.css",
    cleanJsDest: webroot + "js/*",
    cleanCssDest: webroot + "css/*"
};

var project = require('./project.json');

gulp.task("clean:js", function (cb) {
    rimraf(paths.cleanJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.cleanCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("lesstocss", function () {
    return gulp.src('Content/Styles/site.less')
      .pipe(less())
      .pipe(gulp.dest(paths.cssDest));
});

gulp.task("scripts", () => {
    gulp.src([
            'jquery/dist/jquery*.js',
            'bootstrap/dist/js/bootstrap*.js',
            'jquery-validation/dist/*.js',
            'jquery-validation-unobtrusive/*.js',
            'js-cookie/src/js.cookie.js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest(paths.jsDest + '/lib'));

    gulp.src([
        'site.js'
    ], {
        cwd: "Content/Scripts/**"
    })
        .pipe(gulp.dest(paths.jsDest));
});

gulp.task("min:css", ["lesstocss"], function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min:js", ["scripts"], function () {
    //return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
    return gulp.src([paths.js])
      .pipe(concat(paths.concatJsDest))
      .pipe(uglify())
      .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('default', ['scripts', 'lesstocss', 'fonts', 'min'], function () {

});

gulp.task('fonts', function () {
    return gulp.src('node_modules/font-awesome/fonts/**/*', { base: "node_modules/font-awesome/" })
      .pipe(gulp.dest(webroot))
});