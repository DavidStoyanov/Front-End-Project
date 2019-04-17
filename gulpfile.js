"use strict";
const GENERATED_NAME_FOLDER = "docs"; //_site

let gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	exec = require("gulp-exec"),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	cp = require("child_process");

gulp.task("scss", function() {
	return gulp.src( '_assets/scss/**/*.scss' )
		.pipe(sass().on('error', sass.logError)) //options: {outputStyle: 'compressed'}
		.pipe( autoprefixer() )
		.pipe( gulp.dest( './' + GENERATED_NAME_FOLDER + '/css/' ) )
		.pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task("js", function() {
	return gulp.src( '_assets/js/**/*.js', { sourcemaps: true })
		.pipe(gulp.dest( './' + GENERATED_NAME_FOLDER + '/js/', { sourcemaps: true }))
		.pipe(browserSync.stream({ match: '**/*.js' }));
});

// Jekyll
gulp.task("jekyll", function() {
	// return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
	return cp.spawn("jekyll.bat", ["build"], { stdio: "inherit" });
});

gulp.task("watch", function() {

	browserSync.init({
		server: {
			baseDir: "./" + GENERATED_NAME_FOLDER + "/"
		}
	});

	gulp.watch( '_assets/scss/**/*.scss', gulp.series('scss') );
	gulp.watch( '_assets/js/**/*.js', gulp.series('js') );

	gulp.watch(
		[
			"./*.html",
			"./_includes/*.html",
			"./_layouts/*.html",
			"./_posts/**/*.*"
		]
	).on('change', gulp.series('jekyll', "js", 'scss'));

	gulp.watch( GENERATED_NAME_FOLDER + '/**/*.html' ).on('change', browserSync.reload );
	gulp.watch( GENERATED_NAME_FOLDER + '/**/*.js' ).on('change', browserSync.reload );
});

gulp.task("default", gulp.series("jekyll", "js", "scss", "watch"));