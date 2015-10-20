var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var webserver = require('gulp-webserver');
var del = require('del');

var cssFilesToMove = [
  './app/css/**.css'
];

gulp.task('webserver', ['move'], function() {
  gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      port: 8000,
      fallback: 'index.html'
    }));
});

function compile(keepWatch) {
  var bundler = watchify(browserify('./app/js/app.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/js'));
  }

  if (keepWatch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

function move () {
  gulp.src(cssFilesToMove)
    .pipe(gulp.dest('build/css'));

  gulp.src(['./node_modules/bootstrap/dist/**'])
    .pipe(gulp.dest('build/vendors/bootstrap'));

  gulp.src(['./app/img/**'])
    .pipe(gulp.dest('build/img'));

  return gulp.src(['./index.html'], {base: './'})
    .pipe(gulp.dest('build'));
}

gulp.task('build', ['move'], function() { return compile(); });
gulp.task('watch', function() { return watch(); });
gulp.task('move', ['clean'], function () { return move(); });
gulp.task('clean', function () {
  return del(['./build']);
});

gulp.task('default', ['webserver', 'watch']);
