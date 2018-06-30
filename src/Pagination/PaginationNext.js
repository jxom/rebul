import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationNext = ({ children, className, element: Element, isDisabled, onClick, ...props }) => (
  <Element
    className={classNames('pagination-next', className || '')}
    disabled={isDisabled}
    onClick={onClick}
    tabIndex={0}
    {...props}
  >
    {children}
  </Element>
);

PaginationNext.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Is the button is disabled? */
  isDisabled: PropTypes.bool,
  /** Function to invoke on click */
  onClick: PropTypes.func
};

PaginationNext.defaultProps = {
  children: 'Next',
  className: null,
  element: 'a',
  isDisabled: false,
  onClick: null
};

export default PaginationNext;
