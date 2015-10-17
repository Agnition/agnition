var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var mocha = require('gulp-mocha');
var through2 = require('through2');
var jshint = require('gulp-jshint');
var runSequence = require('run-sequence');

gulp.task('buildJS', function () {
  // return bundler.bundle()
          // .pipe(gulp.dest('./client/public/scripts'));
  return gulp
    .src('./server/client/index.js')
    .pipe(through2.obj(function(file, enc, next) {
      browserify(file.path, {debug : true})
        .transform(babelify)
        .bundle(function(err, res) {
          if (err) {
            return next(err);
          }
          file.contents = res;
          next(null, file);
        });
    }))
    .pipe(gulp.dest('./server/client/public/scripts'));
});

gulp.task('mocha', function(){
  return gulp.src('./specs/**/*.spec.js')
    .pipe(mocha({
      reporter: 'spec',
    }));
});

gulp.task('jshint', function(){
  return gulp.src(['./server/**/*.js','!./server/client/*.js'])
    .pipe(mocha({reporter: 'spec'}))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function(){
  runSequence('mocha','jshint');
});


