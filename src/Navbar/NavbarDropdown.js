import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarDropdown = ({ children, className, isRight, ...props }) => (
  <div className={classNames('navbar-dropdown', isRight ? 'is-right' : '', className || '')} {...props}>
    {children}
  </div>
);

NavbarDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isRight: PropTypes.bool
};

NavbarDropdown.defaultProps = {
  className: null,
  isRight: false
};

export default NavbarDropdown;
