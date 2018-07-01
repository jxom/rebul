import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarBrand = ({ children, className, ...props }) => (
  <div className={classNames('navbar-brand', className || '')} {...props}>
    {children}
  </div>
);

NavbarBrand.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

NavbarBrand.defaultProps = {
  className: null
};

export default NavbarBrand;
