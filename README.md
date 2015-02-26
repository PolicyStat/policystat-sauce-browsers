# policystat-sauce-browsers [![NPM version](https://badge.fury.io/js/policystat-sauce-browsers.svg)](http://badge.fury.io/js/policystat-sauce-browsers)  [![Build Status](https://travis-ci.org/PolicyStat/policystat-sauce-browsers.svg)](https://travis-ci.org/PolicyStat/policystat-sauce-browsers) 

If you’d like to use [karma-sauce-launcher](https://www.npmjs.com/package/karma-sauce-launcher)
with the same browsers in numerous projects and you happen to be developing for PolicyStat
then this module will give you [the browsers](./lib/browsers-definition.js) which
PolicyStat would like to test against.

## API

In your `karma.conf.js`:
```js
var psBrowsers = require('policystat-sauce-browsers')

// there is an HTTPS request to get the latest browsers from Sauce Labs
// so this is asynchronous
psBrowsers(function (err, browsersConf) {
  if (err) throw err

  // `browsersConf` is what you’re looking for
})
```

This module uses [get-saucelabs-browsers](https://www.npmjs.com/package/get-saucelabs-browsers).

## Copyright

Copyright © 2015 PolicyStat LLC

## License

BSD-3-Clause
