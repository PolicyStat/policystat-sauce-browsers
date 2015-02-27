var auto = require('auto-package')
var content = auto.content
var policystat = require('policystat')
var license = policystat.openSource.license.spdx

content.name = 'policystat-sauce-browsers'
auto.versionFile()
content.author = require('mightyiam').authorStr
content.scripts = {
  license: 'license-generator install ' + license.toLowerCase() +
    ' -n ' + policystat.name.pretty,
  lint: 'standard',
  unit: 'jasmine',
  test: 'npm run lint && npm run license && npm run unit'
}
content.devDependencies = {
  'mightyiam': '^1.1.5',
  'policystat': '^1.2.2',
  'auto-package': '^0.2.0',
  'verb-cli': '^0.4.3',
  standard: '*',
  'lodash.isplainobject': '^3.0.0',
  'lodash.isarray': '^3.0.0',
  foreach: '^2.0.5',
  'license-generator': '^0.0.13',
  'jasmine-spec-reporter': '^2.1.0',
  jasmine: '^2.2.1'
}
content.dependencies = {
  'to-object': '^0.0.1',
  foreach: '^2.0.5',
  'get-saucelabs-browsers': '^1.0.0'
}
content.main = 'lib/index.js'
content.license = license
content.description = 'PolicyStat\'s Sauce Labs browsers'
auto.githubRepo('PolicyStat/policystat-sauce-browsers')
content.copyright = policystat.copyrightNotice
content.keywords = [
  'browsers',
  'sauce',
  'saucelabs',
  'policystat'
]
