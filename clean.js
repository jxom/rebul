const globby = require('globby');
const rimraf = require('rimraf');

globby([
  '*',
  '!catalog',
  '!src',
  '!node_modules',
  '!.npmignore',
  '!clean.js',
  '!package.json',
  '!LICENSE',
  '!README.md',
  '!rollup.config.js',
  '!rebul.png'
]).then(paths => paths.map(item => rimraf.sync(item)));
