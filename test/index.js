/* eslint-env mocha */

var chai = require('chai')
chai.use(require('chai-as-promised'))
chai.should()

var schema = {
  type: 'object',
  additionalProperties: false,
  patternProperties: {
    '[0-9]*': {
      type: 'object',
      additionalProperties: false,
      properties: {
        browserName: {type: 'string'},
        version: {type: 'string'},
        platform: {type: 'string'},
        base: {type: 'string', enum: ['SauceLabs']}
      },
      required: ['browserName', 'version', 'platform', 'base']
    }
  }
}

var ZSchema = require('z-schema')
var validator = new ZSchema()
var browsers = require('../')

describe('exports', function () {
  this.timeout(10000)

  it('is a promise that fulfills according to the schema', function () {
    return browsers.then(function (browsers) {
      var valid = validator.validate(browsers, schema)
      if (!valid) {
        var errors = validator.getLastErrors()
        console.log(errors)
      }
      return valid
    }).should.eventually.be.true
  })
})
