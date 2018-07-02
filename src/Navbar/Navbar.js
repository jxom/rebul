import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import NavbarBrand from './NavbarBrand';
import NavbarBurger from './NavbarBurger';
import NavbarDivider from './NavbarDivider';
import NavbarDropdown from './NavbarDropdown';
import NavbarItem from './NavbarItem';
import NavbarLink from './NavbarLink';
import NavbarMenu from './NavbarMenu';
import NavbarStart from './NavbarStart';
import NavbarEnd from './NavbarEnd';

// TODO: Control dropdown
// TODO: Control mobile menu
class Navbar extends React.Component {
  static Brand = NavbarBrand;
  static Burger = NavbarBurger;
  static Divider = NavbarDivider;
  static Dropdown = NavbarDropdown;
  static End = NavbarEnd;
  static Item = NavbarItem;
  static Link = NavbarLink;
  static Menu = NavbarMenu;
  static Start = NavbarStart;

  render = () => {
    const { children, className, color, isFixedBottom, isFixedTop, isTransparent, ...props } = this.props;
    return (
      <nav
        className={classNames('navbar', {
          [`is-${color}`]: Boolean(color),
          'is-fixed-bottom': isFixedBottom,
          'is-fixed-top': isFixedTop,
          'is-transparent': isTransparent,
          [className]: Boolean(className)
        })}
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
  /** Color of the navbar. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: sharedPropTypes.color,
  /** If true, fixes the navbar to the bottom of the page. */
  isFixedBottom: PropTypes.bool,
  /** If true, fixes the navbar to the top of the page. */
  isFixedTop: PropTypes.bool,
  /** If true, makes the navbar transparent. */
  isTransparent: PropTypes.bool
};

Navbar.defaultProps = {
  className: null,
  color: null,
  isFixedBottom: false,
  isFixedTop: false,
  isTransparent: false
};

export default Navbar;
