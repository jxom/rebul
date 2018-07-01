import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarMenu = ({ children, className, isActive, ...props }) => (
  <div className={classNames('navbar-menu', isActive ? 'is-active' : '', className || '')} {...props}>
    {children}
  </div>
);

NavbarMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool
};

NavbarMenu.defaultProps = {
  className: null,
  isActive: false
};

export default NavbarMenu;
