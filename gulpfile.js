'use strict';
var gulp	=	require('gulp');
var	mocha	=	require('gulp-mocha');
var	gutil	=	require('gulp-util');
var istanbul = 	require('gulp-istanbul');


gulp.task('mocha', function(){
	return gulp.src(['test/*.js'], {read:false})
	.pipe(mocha({reporter:'list'}))
	.on('error', gutil.log);
});

gulp.task('watch-mocha', function(){
	gulp.run('mocha');
	gulp.watch(['./**/*.js','test/**/*.js'], ['istanbul']);
});

gulp.task('default',['watch-mocha']);

gulp.task('istanbul', function (cb) {
  gulp.src(['./*.js'])
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
        .on('end', cb);
    });
});
