import babel from 'rollup-plugin-babel';
import path from 'path';
import recursiveReadSync from 'recursive-readdir-sync';

const components = recursiveReadSync(path.join(__dirname, 'src'));

export default components.map(component => {
  if (component.split('.')[1] !== 'js') {
    return null;
  }
  const file = component.split('.')[0];
  const name = file.replace(path.join(__dirname, 'src/'), '');
  return {
    input: `src/${name}.js`,
    output: {
      name,
      file: `${name}.js`,
      format: 'umd',
      globals: {
        'prop-types': 'PropTypes',
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    external: ['prop-types', 'react', 'react-dom'],
    plugins: [
      babel({
        presets: [['env', { modules: false }], 'react'],
        plugins: ['external-helpers', 'transform-class-properties', 'transform-object-rest-spread']
      })
    ]
  };
});
