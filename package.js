var auto = require('auto-package')
var content = auto.content

content.name = 'policystat-sauce-browsers'
auto.versionFile()
content.author = require('mightyiam').authorStr
content.scripts = {
  lint: 'standard',
  unit: 'jasmine',
  test: 'npm run lint && npm run unit'
}
content.devDependencies = {
  'mightyiam': '^1.1.5',
  'auto-package': '^0.2.0',
  'verb-cli': '^0.4.3',
  standard: '*',
  'lodash.isplainobject': '^3.0.0',
  'lodash.isarray': '^3.0.0',
  foreach: '^2.0.5',
  jasmine: '^2.2.1'
}
content.dependencies = {
  'to-object': '^0.0.1',
  foreach: '^2.0.5',
  'get-saucelabs-browsers': '^1.0.0'
}
content.main = 'lib/index.js'
content.license = 'MIT'
content.description = 'PolicyStat\'s Sauce Labs browsers'
auto.githubRepo('PolicyStat/policystat-sauce-browsers')
