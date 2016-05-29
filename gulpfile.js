var gulp = require('gulp');
var electron = require('gulp-electron');
var info = require('./package.json');

gulp.task('run', function () {
  childProcess.spawn(electron, ['--debug=5858','./main'], { stdio: 'inherit' });
});

gulp.task('electron', function() {
    gulp.src("")
    .pipe(electron({
        src: './src',
        packageJson: info,
        release: './dist',
        cache: './cache',
        version: 'v0.0.2',
        packaging: true,
        platforms: ['darwin','win32','linux','darwin-x64','linux-ia32','linux-x64','win32-ia32','win64-64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: info.name,
                CFBundleIdentifier: info.bundle,
                CFBundleName: info.name,
                CFBundleVersion: info.version
            },
            win: {
                "version-string": info.version,
                "file-version": info.version,
                "product-version": info.version
            }
        }
    }))
    .pipe(gulp.dest(""));
});
