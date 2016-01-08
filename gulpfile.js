
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('watch', function () {
  gulp.watch([
    'main.js',
    'src/**/*.js'
  ], function(event) {
      browserSync.reload(event.path);
  });
});



function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var server = {
        baseDir: baseDir
    };

    browserSync.instance = browserSync.init({
        startPath: '/',
        server: server,
        browser: browser
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]' // Only needed for angular apps
}));

gulp.task('serve', ['watch'], function() {
    browserSyncInit('');
});

