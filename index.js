var through = require('through2')
var gutil = require('gulp-util')


var gulpPluginTemplate = function(opts) {

  // overwrite default options
  opts = Object.assign({
    verbose: true
  }, opts || {})

  // transformation
  var transform = function(file, encoding, callback) {

    // pass file through if
    // * file is a directory
    // * file has no contents
    if (file.isDirectory() || file.isNull()) {
      this.push(file)
      return callback()
    }

    // streams are not supported
    if (file.isStream()) {
      this.emit('error', new gutil.PluginError({
        plugin: 'Plugin-Template',
        message: 'Streams are not supported.'
      }))
      return callback()
    }

    if (file.isBuffer()) {
      if(opts.verbose) {
        gutil.log(gutil.colors.green(file.path))
      }

      this.push(file)
      return callback()
    }
  }

  // flush
  var flush = function(callback) {
    callback()
  }

  return through.obj(transform, flush)
}

module.exports = gulpPluginTemplate
