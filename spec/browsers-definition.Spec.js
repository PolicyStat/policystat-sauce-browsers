/* eslint-env jasmine */

var isArray = require('lodash.isarray')

var moduleName = 'browsers-definition'
describe(moduleName, function () {
  it('is an array', function () {
    var it = require('../lib/' + moduleName)
    expect(isArray(it)).toBe(true)
  })
})
