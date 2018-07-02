import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toggle from 'react-toggled';

import ClickOutside from '../utils/ClickOutside';
import NavbarDropdown from './NavbarDropdown';

const NavbarItem = ({
  children,
  className,
  dropdownTrigger,
  element: Element,
  hasDropdown,
  isActive,
  isDropdownInitiallyActive,
  isDropup,
  isHoverable,
  ...props
}) => (
  <Toggle defaultOn={isDropdownInitiallyActive}>
    {({ getTogglerProps: getProps, on, setOn: show, setOff: hide, toggle }) => (
      <Element
        className={classNames('navbar-item', {
          'has-dropdown': hasDropdown,
          'is-active': on || isActive,
          'has-dropdown-up': isDropup,
          'is-hoverable': isHoverable,
          [className]: Boolean(className)
        })}
        {...props}
      >
        {hasDropdown && dropdownTrigger ? (
          <ClickOutside onClickOutside={hide}>
            {dropdownTrigger({
              getProps: () => getProps({ style: { height: '100%' } }),
              show,
              hide,
              toggle
            })}
            <NavbarDropdown>{children}</NavbarDropdown>
          </ClickOutside>
        ) : (
          children
        )}
      </Element>
    )}
  </Toggle>
);

NavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dropdownTrigger: PropTypes.func,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** If true, the navbar item consists of a dropdown */
  hasDropdown: PropTypes.bool,
  /** If true, the navbar item is active */
  isActive: PropTypes.bool,
  /** If true, the navbar item's dropdown is initially active */
  isDropdownInitiallyActive: PropTypes.bool,
  /** If true, the navbar item's dropdown is actually a dropup */
  isDropup: PropTypes.bool,
  /** If true, the dropdown is hoverable */
  isHoverable: PropTypes.bool
};

NavbarItem.defaultProps = {
  className: null,
  dropdownTrigger: null,
  element: 'div',
  hasDropdown: false,
  isActive: false,
  isDropdownInitiallyActive: false,
  isDropup: false,
  isHoverable: false
};

export default NavbarItem;
