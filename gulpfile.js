var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var mocha = require('gulp-mocha');
var through2 = require('through2');

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
