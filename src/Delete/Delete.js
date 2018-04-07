import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const Delete = ({ className, element: Element, size, ...props }) => (
  <Element className={classNames('delete', size ? `is-${size}` : '', className || '')} {...props} />
);

Delete.propTypes = {
  className: PropTypes.string,
  element: PropTypes.string,
  size: sharedPropTypes.size
};

Delete.defaultProps = {
  className: null,
  element: 'button',
  size: null
};

export default Delete;
