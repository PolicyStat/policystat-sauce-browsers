/* eslint-env mocha */

var forEach = require('foreach')
require('chai').should()

var moduleName = 'index'

describe(moduleName, function () {
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
      it('is an object', function (done) {
        psBrowsers(function (err, browsersConf) {
          if (err) throw err
          browsersConf.should.be.an('object')
          done()
        })
      })

      describe('has keys', function () {
        it('from 0 and up', function (done) {
          psBrowsers(function (err, browsersConf) {
            if (err) throw err
            var keys = Object.keys(browsersConf)
            keys.sort(function (a, b) {
              return a - b
            })
            keys.forEach(function (value, index) {
              value.should.equal(index.toString())
            })
            done()
          })
        })

        describe('which', function () {
          it('have a strings `browserName`, `version` and `platform`', function (done) {
            psBrowsers(function (err, browsersConf) {
              if (err) throw err
              forEach(browsersConf, function (browser) {
                browser.browserName.should.be.a('string')
                browser.version.should.be.a('string')
                browser.platform.should.be.a('string')
              })
              done()
            })
          })
          it('have a \'SauceLabs\' `base` property', function (done) {
            psBrowsers(function (err, browsersConf) {
              if (err) throw err
              forEach(browsersConf, function (browser) {
                browser.base.should.equal('SauceLabs')
              })
              done()
            })
          })
        })
      })
    })
  })
})
