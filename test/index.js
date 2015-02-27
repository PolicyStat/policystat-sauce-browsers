/* eslint-env mocha */

require('chai').should()

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

describe('exports', function () {
  this.timeout(10000)

  var psBrowsers = require('../')

  it('is a function', function () {
    psBrowsers.should.be.a('function')
  })

  it('calls back', function (done) {
    psBrowsers(function () {
      done()
    })
  })

  describe('in the callback', function () {
    describe('the first argument', function () {
      it('might be an error', function (done) {
        // how can I cause this to error in the test run?
        psBrowsers(function (err) {
          if (err) throw err
          done()
        })
      })
    })

    describe('the second argument', function () {
      it('is valid according to the schema', function (done) {
        psBrowsers(function (err, browsersConf) {
          if (err) throw err
          var valid = validator.validate(browsersConf, schema)
          if (!valid) {
            var errors = validator.getLastErrors()
            console.log(errors)
          }
          valid.should.be.true
          done()
        })
      })
    })
  })
})
