import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarBrand = ({ className, isActive, onClick, target, ...props }) => (
  <a
    aria-label="menu"
    aria-expanded="false"
    className={classNames('navbar-burger', isActive ? 'is-active' : '', className || '')}
    data-target={target}
    onClick={onClick}
    role="button"
    {...props}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

NavbarBrand.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.string
};

NavbarBrand.defaultProps = {
  className: null,
  isActive: false,
  onClick: null,
  target: null
};

export default NavbarBrand;
