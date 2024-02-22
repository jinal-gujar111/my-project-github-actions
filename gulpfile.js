const gulp = require('gulp');

// Define a simple Gulp task
gulp.task('demoTask', function() {
  return new Promise((resolve) => {
    console.log('Demo task executed!');
    resolve(); // Signal async completion
  });
});

// Default task - runs when you type 'gulp' in the terminal
gulp.task('default', gulp.series('demoTask'));
