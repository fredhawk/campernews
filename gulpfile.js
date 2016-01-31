var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var del = require('del');
var reload = browserSync.reload;

var input  = {
      //'jade': 'source/jade/**/*.jade',
      'jade': 'source/*.jade',
      'inhtml': 'source/*.html',
      'sass': 'source/sass/**/*.sass',
      'javascript': 'source/js/**/*.js',
      'vendorjs': 'build/assets/js/vendor/**/*.js'
    },

    output = {
      'outhtml': 'build',
      'stylesheets': 'build/css',
      'javascript': 'build/js'
    };
    
// Delete build folder to clean it
gulp.task('clean', function(){
  return del(output.outhtml + '/**/*');
});

// sass stuff
gulp.task('sass', function() {
  return gulp.src(input.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.stylesheets))
    .pipe(browserSync.stream());
});
// jade
gulp.task('jade', function(){
  return gulp.src(input.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(output.outhtml))
    .pipe(browserSync.stream());
});

// copy html
gulp.task('build-html', function() {
  // copy any html files in source/ to public/
  return gulp.src(input.inhtml)
    .pipe(gulp.dest(output.outhtml));
});

// Javascript
gulp.task('build-js', function(){
  return gulp.src(input.javascript)
    .pipe(gulp.dest(output.javascript));
});
gulp.task('js-watch', ['build-js'], browserSync.reload);

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['clean', 'jade', 'sass', 'build-js'], function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  });
  gulp.watch(input.jade, ['jade']);
  gulp.watch(input.sass, ['sass']);
  gulp.watch(input.javascript, ['js-watch']).on('change', reload);
  
});


// Check on the js when I need that.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!