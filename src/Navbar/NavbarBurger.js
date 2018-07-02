import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarBrand = ({ className, isActive, onClick, target, ...props }) => (
  <a
    aria-label="menu"
    aria-expanded={isActive ? 'true' : 'false'}
    className={classNames('navbar-burger', { 'is-active': Boolean(isActive), [className]: Boolean(className) })}
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
  /** If true, the burger turns into a cross. */
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  /** ID of the menu section. E.g. Value would be `'menu'` if <Navbar.Menu id="menu"> */
  target: PropTypes.string
};

NavbarBrand.defaultProps = {
  className: null,
  isActive: false,
  onClick: null,
  target: null
};

export default NavbarBrand;
