var getBrowsers = require('get-saucelabs-browsers')
var browsersDef = require('./browsers-definition')
var toObject = require('to-object')

var get = function (callback) {
  getBrowsers(browsersDef, function (err, browsersConf) {
    if (err) {
      callback(err)
      return
    }
    callback(false, toObject(browsersConf))
  })
}

module.exports = get
