import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationLink = ({ children, className, element: Element, isCurrent, isDisabled, onClick, ...props }) => (
  <li>
    <Element
      className={classNames('pagination-link', isCurrent ? 'is-current' : '', className || '')}
      disabled={isDisabled}
      onClick={onClick}
      tabIndex={0}
      {...props}
    >
      {children}
    </Element>
  </li>
);

PaginationLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Is it the current page? */
  isCurrent: PropTypes.bool,
  /** Is the button disabled? */
  isDisabled: PropTypes.bool,
  /** Function to invoke on click */
  onClick: PropTypes.func
};

PaginationLink.defaultProps = {
  className: null,
  element: 'a',
  isCurrent: false,
  isDisabled: false,
  onClick: null
};

export default PaginationLink;
