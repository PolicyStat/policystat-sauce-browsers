/* eslint-env jasmine */

var isPlainObject = require('lodash.isplainobject')
var forEach = require('foreach')

var moduleName = 'index'
describe(moduleName, function () {
  var psBrowsers = require('../')

  it('is a function', function () {
    expect(typeof psBrowsers === 'function').toBe(true)
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
          expect(isPlainObject(browsersConf)).toBe(true)
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
              expect(value).toBe(index.toString())
            })
            done()
          })
        })

        describe('which', function () {
          it('have a strings `browserName`, `version` and `platform`', function (done) {
            psBrowsers(function (err, browsersConf) {
              if (err) throw err
              forEach(browsersConf, function (browser) {
                expect(typeof browser.browserName === 'string').toBe(true)
                expect(typeof browser.version === 'string').toBe(true)
                expect(typeof browser.platform === 'string').toBe(true)
              })
              done()
            })
          })
        })
      })
    })
  })
})
