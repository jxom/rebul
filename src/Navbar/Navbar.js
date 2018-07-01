import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import NavbarBrand from './NavbarBrand';
import NavbarBurger from './NavbarBurger';
import NavbarItem from './NavbarItem';
import NavbarLink from './NavbarLink';
import NavbarMenu from './NavbarMenu';
import NavbarStart from './NavbarStart';
import NavbarEnd from './NavbarEnd';
import NavbarDropdown from './NavbarDropdown';

// TODO: Control dropdown
// TODO: Control mobile menu
class Navbar extends React.Component {
  static Brand = NavbarBrand;
  static Burger = NavbarBurger;
  static Dropdown = NavbarDropdown;
  static End = NavbarEnd;
  static Item = NavbarItem;
  static Link = NavbarLink;
  static Menu = NavbarMenu;
  static Start = NavbarStart;

  render = () => {
    const { children, className, isFixedBottom, isFixedTop, isTransparent, ...props } = this.props;
    return (
      <nav
        className={classNames(
          'navbar',
          isFixedBottom ? 'is-fixed-bottom' : '',
          isFixedTop ? 'is-fixed-top' : '',
          isTransparent ? 'is-transparent' : '',
          className || ''
        )}
        aria-label="navigation"
        {...props}
      >
        {children}
      </nav>
    );
  };
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFixedBottom: PropTypes.bool,
  isFixedTop: PropTypes.bool,
  isTransparent: PropTypes.bool
};

Navbar.defaultProps = {
  className: null,
  isFixedBottom: false,
  isFixedTop: false,
  isTransparent: false
};

export default Navbar;
