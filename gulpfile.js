'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('dogecore-build');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
