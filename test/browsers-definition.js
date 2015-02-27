/* eslint-env mocha */

var moduleName = 'browsers-definition'
var def = require('../lib/' + moduleName)
require('chai').should()

describe(moduleName, function () {
  it('is an array', function () {
    def.should.be.an('array')
  })
})
