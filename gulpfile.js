'use strict';
const gulp         = require('gulp');
const browserify   = require('browserify');
const source       = require('vinyl-source-stream');
const rimraf       = require('rimraf');
const sequence     = require('run-sequence');
const path         = require('path');
const exec         = require('child_process').exec;

const BUNDLENAME = 'bundle.js';
const DIST = './dist/';
const DISTFILE = path.resolve(__dirname,DIST,BUNDLENAME);

gulp.task('default', () => {
  sequence('clean', 'build', 'watch');
});

gulp.task('clean', (cb) => {
  rimraf(DIST, cb);
});

gulp.task('build', () => {
  browserify({
    entries: ['./lib/entry.js']
  })
  .transform("require-globify")
  .transform("babelify", {presets: ["es2015"]})
  .bundle()
  .on('error', function(e){
    console.log(e.message);
    console.log(e.stack);
    this.emit("end");
  })
  .pipe(source(BUNDLENAME))
  .pipe(gulp.dest(DIST));
});

gulp.task('watch', () => {
  gulp.watch(['src/**/*.js','lib/**/*.js'], ['build']);
});

// gulp.task('init', () => {
//   exec(`osascript -e 'tell application "Adobe After Effects CC 2014" to DoScriptFile "${DISTFILE}"'`);
// });
