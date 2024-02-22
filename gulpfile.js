const gulp = require('gulp');

// Define a simple Gulp task
gulp.task('demoTask', function() {
  console.log('Demo task executed!');
});

// Default task - runs when you type 'gulp' in the terminal
gulp.task('default', gulp.series('demoTask'));
