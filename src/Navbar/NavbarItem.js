import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarItem = ({
  children,
  className,
  element: Element,
  hasDropdown,
  isActive,
  isDropup,
  isHoverable,
  ...props
}) => (
  <Element
    className={classNames('navbar-item', {
      'has-dropdown': hasDropdown,
      'is-active': isActive,
      'has-dropdown-up': isDropup,
      'is-hoverable': isHoverable,
      [className]: Boolean(className)
    })}
    {...props}
  >
    {children}
  </Element>
);

NavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** If true, the navbar item consists of a dropdown */
  hasDropdown: PropTypes.bool,
  /** If true, the navbar item is active */
  isActive: PropTypes.bool,
  /** If true, the navbar item's dropdown is actually a dropup */
  isDropup: PropTypes.bool,
  /** If true, the dropdown is hoverable */
  isHoverable: PropTypes.bool
};

NavbarItem.defaultProps = {
  className: null,
  element: 'div',
  hasDropdown: false,
  isActive: false,
  isDropup: false,
  isHoverable: false
};

export default NavbarItem;
