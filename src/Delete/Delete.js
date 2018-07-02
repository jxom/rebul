import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const Delete = ({ className, element: Element, size, ...props }) => (
  <Element
    className={classNames('delete', {
      [`is-${size}`]: Boolean(size),
      [className]: Boolean(className)
    })}
    {...props}
  />
);

Delete.propTypes = {
  className: PropTypes.string,
  /** Custom wrapper element */
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Size of delete button. Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size
};

Delete.defaultProps = {
  className: null,
  element: 'button',
  size: null
};

export default Delete;
