var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

var rebuildDB = require('./dummyData/index');

function compile(watch) {
  var bundler = watchify(browserify('./server/client/index.js', { debug: true }).transform(babelify));
  
  function rebundle() {
    // rebuildDB();
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./server/client/public/scripts'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('bundle', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);

gulp.task('mocha', function () {
  return gulp.src('./specs/serverspecs/**/*.spec.js')
    .pipe(mocha({reporter: 'spec'}))
    .once('end', function () {
      process.exit();
    });
});

gulp.task('lint', function () {
  return gulp.src(['server/**/*.js', '!server/client/public/scripts/index.js'])
      .pipe(eslint())
      .pipe(eslint.format())
      // .pipe(eslint.failOnError());
});

gulp.task('test', ['mocha', 'lint']);
gulp.task('cleanDB', function(){
  rebuildDB();
});
