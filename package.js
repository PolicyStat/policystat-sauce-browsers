var Package = require('auto-package')
var object = Package.package

object.name = 'policystat-sauce-browsers'
Package.version_file()
object.author = require('mightyiam').authorStr
object.scripts = {
  lint: 'standard',
  unit: 'jasmine',
  test: 'npm run lint && npm run unit'
}
object.devDependencies = {
  'mightyiam': '^1.1.5',
  'auto-package': '^0.1.1',
  'verb-cli': '^0.4.3',
  standard: '*',
  'lodash.isplainobject': '^3.0.0',
  'lodash.isarray': '^3.0.0',
  foreach: '^2.0.5',
  jasmine: '^2.2.1'
}
object.dependencies = {
  'to-object': '^0.0.1',
  foreach: '^2.0.5',
  'get-saucelabs-browsers': '^1.0.0'
}
object.main = 'lib/index.js'
object.license = 'MIT'
object.description = 'PolicyStat\'s Sauce Labs browsers'
object.repository = {
  type: 'git',
  url: 'https://github.com/PolicyStat/policystat-sauce-browsers.git'
}
