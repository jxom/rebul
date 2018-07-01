import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarItem = ({ children, className, element: Element, hasDropdown, isActive, isHoverable, ...props }) => (
  <Element
    className={classNames(
      'navbar-item',
      hasDropdown ? 'has-dropdown' : '',
      isActive ? 'is-active' : '',
      isHoverable ? 'is-hoverable' : '',
      className || ''
    )}
    {...props}
  >
    {children}
  </Element>
);

NavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  hasDropdown: PropTypes.bool,
  isActive: PropTypes.bool,
  isHoverable: PropTypes.bool
};

NavbarItem.defaultProps = {
  className: null,
  element: 'div',
  hasDropdown: false,
  isActive: false,
  isHoverable: false
};

export default NavbarItem;
