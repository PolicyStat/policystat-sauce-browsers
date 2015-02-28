# policystat-sauce-browsers [![NPM version](https://badge.fury.io/js/policystat-sauce-browsers.svg)](http://badge.fury.io/js/policystat-sauce-browsers)  [![Build Status](https://travis-ci.org/PolicyStat/policystat-sauce-browsers.svg)](https://travis-ci.org/PolicyStat/policystat-sauce-browsers) 

If you’d like to use [karma-sauce-launcher](https://www.npmjs.com/package/karma-sauce-launcher)
with the same browsers in numerous projects and you happen to be developing for PolicyStat
then this module will give you [the browsers](./lib/browsers-definition.js) which
PolicyStat would like to test against.

## API

In your `karma.conf.js`:
```js
// the browsers available from Sauce Labs are retrieved using an HTTPS request.
// therefore, this is a promise
var psBrowsers = require('policystat-sauce-browsers')

psBrowsers.then(function (browsers) {
  // browsers is what you’re after
  // configure Karma here
}).catch(function (reason) {
  // handle failure
})
```

This module uses [get-saucelabs-browsers](https://www.npmjs.com/package/get-saucelabs-browsers).

## Copyright

Copyright © 2015 PolicyStat LLC

## License

BSD-3-Clause
