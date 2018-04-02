import PropTypes from 'prop-types';

export const color = PropTypes.oneOf([
  'white',
  'light',
  'dark',
  'black',
  'text',
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger'
]);
export const size = PropTypes.oneOf(['small', 'medium', 'large']);
export const state = PropTypes.oneOf(['hovered', 'active', 'focused']);
