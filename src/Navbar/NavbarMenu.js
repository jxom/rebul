import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarMenu = ({ children, className, isActive, ...props }) => (
  <div
    className={classNames('navbar-menu', {
      'is-active': isActive,
      [className]: Boolean(className)
    })}
    {...props}
  >
    {children}
  </div>
);

NavbarMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** If true, the menu is active */
  isActive: PropTypes.bool
};

NavbarMenu.defaultProps = {
  className: null,
  isActive: false
};

export default NavbarMenu;
