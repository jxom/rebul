import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const Delete = ({ className, element: Element, size, ...props }) => (
  <Element className={classNames('delete', size ? `is-${size}` : '', className || '')} {...props} />
);

Delete.propTypes = {
  className: PropTypes.string,
  /** Custom wrapper element */
  element: PropTypes.string,
  /** Size of delete button. Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size
};

Delete.defaultProps = {
  className: null,
  element: 'button',
  size: null
};

export default Delete;
