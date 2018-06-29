module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Rebul',
      externals: {
        'prop-types': 'PropTypes',
        react: 'React',
        'react-dom': 'ReactDOM',
        classnames: 'classNames',
        'styled-components': 'styled',
        'styled-system': 'styledSystem',
        'react-autosize-textarea': 'TextareaAutosize'
      }
    }
  }
};
