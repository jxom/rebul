import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationPrevious = ({ children, className, element: Element, isDisabled, onClick, ...props }) => (
  <Element
    className={classNames('pagination-previous', { [className]: Boolean(className) })}
    disabled={isDisabled}
    onClick={onClick}
    tabIndex={0}
    {...props}
  >
    {children}
  </Element>
);

PaginationPrevious.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Is the button is disabled? */
  isDisabled: PropTypes.bool,
  /** Function to invoke on click */
  onClick: PropTypes.func
};

PaginationPrevious.defaultProps = {
  children: 'Previous',
  className: null,
  element: 'a',
  isDisabled: false,
  onClick: null
};

export default PaginationPrevious;
