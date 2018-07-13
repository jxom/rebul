const { exec: _exec } = require('child_process');
const path = require('path');
const pify = require('pify');
const recursiveReadSync = require('recursive-readdir-sync');
const exec = pify(_exec, { multiArgs: true });

const componentPaths = recursiveReadSync(path.join(__dirname, '../src'));

componentPaths.map(async componentPath => {
  try {
    const [stdout, stderr] = await exec(`react-docgen ${componentPath}`);
    if (stderr) {
      console.error(stderr);
      return;
    }
    const component = JSON.parse(stdout);
  } catch (err) {}
});
