gulp.task('run', function () { 
  childProcess.spawn(electron, ['--debug=5858','./main'], { stdio: 'inherit' }); 
}); 