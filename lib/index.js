var browsersDef = require('./browsers-definition')
var toObject = require('to-object')
var forEach = require('foreach')
var Bluebird = require('bluebird')
var getSauceBrowsers = Bluebird.promisify(require('get-saucelabs-browsers'))

var getPSBrowsers = getSauceBrowsers(browsersDef).then(function (browsers) {
  forEach(browsers, function (browser) {
    browser.base = 'SauceLabs'
  })
  return toObject(browsers)
}).catch(function (err) {
  throw err
})

module.exports = getPSBrowsers
