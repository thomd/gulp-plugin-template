# Gulp Plugin Template

A starter template for a [gulp](http://gulpjs.com/) plugin.

## Install

    git clone https://github.com/thomd/gulp-plugin-template.git
    cd gulp-plugin-template
    npm link
    cd /path/to/project
    npm link gulp-plugin-template

## Usage

Create the following `gulpfile.js` file

    var gulp = require('gulp')
    var plugin = require('gulp-plugin-template')

    gulp.task('default', function() {
      return gulp.src('./src/*')
        .pipe(plugin())
        .pipe(gulp.dest('dest'))
    })
