import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toggle from 'react-toggled';

import ClickOutside from '../utils/ClickOutside';
import DropdownContent from './DropdownContent';
import DropdownDivider from './DropdownDivider';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';

export const { Provider, Consumer } = React.createContext({ closeOnItemClick: true });

class Dropdown extends React.Component {
  static Divider = DropdownDivider;
  static Item = DropdownItem;

  getDropdownProps = togglerProps => ({
    ...togglerProps,
    'aria-haspopup': 'true',
    'aria-controls': 'dropdown-menu'
  });

  render = () => {
    const {
      align,
      children,
      className,
      closeOnItemClick,
      initiallyIsActive,
      isActive,
      isDropup,
      isHoverable,
      menuId,
      trigger,
      ...props
    } = this.props;
    return (
      <Toggle defaultOn={initiallyIsActive} {...(isActive !== null ? { on: isActive } : {})}>
        {({ getTogglerElementProps, getTogglerProps, on, setOn: show, setOff: hide, toggle }) => (
          <div
            className={`dropdown ${classNames(
              align ? `is-${align}` : '',
              on ? 'is-active' : '',
              isDropup ? 'is-up' : '',
              isHoverable ? 'is-hoverable' : '',
              className || ''
            )}`}
            {...props}
          >
            <ClickOutside onClickOutside={hide}>
              {trigger && (
                <DropdownTrigger>
                  {trigger({
                    getDropdownButtonProps: () => this.getDropdownProps(getTogglerProps()),
                    getDropdownElementProps: () => this.getDropdownProps(getTogglerElementProps()),
                    show,
                    hide,
                    toggle
                  })}
                </DropdownTrigger>
              )}
              <Provider value={{ closeOnItemClick, hide }}>
                <DropdownMenu menuId={menuId}>
                  <DropdownContent>{children}</DropdownContent>
                </DropdownMenu>
              </Provider>
            </ClickOutside>
          </div>
        )}
      </Toggle>
    );
  };
}

Dropdown.propTypes = {
  /** Alignment of the dropdown. Available values: `left`, `centered`, `right` */
  align: PropTypes.oneOf(['left', 'centered', 'right']),
  children: PropTypes.node,
  className: PropTypes.string,
  /** Close the menu when an item is clicked */
  closeOnItemClick: PropTypes.bool,
  /** Default active state of the dropdown */
  initiallyIsActive: PropTypes.bool,
  /** Controlled active state of the dropdown */
  isActive: PropTypes.bool,
  /** Is the dropdown actually a dropup?! */
  isDropup: PropTypes.bool,
  /** Is the dropdown hoverable? */
  isHoverable: PropTypes.bool,
  menuId: PropTypes.string,
  /** `trigger` is a function that returns a component. See more about its render props below */
  trigger: PropTypes.func
};

Dropdown.defaultProps = {
  align: null,
  children: null,
  className: null,
  closeOnItemClick: true,
  initiallyIsActive: false,
  isActive: null,
  isDropup: false,
  isHoverable: false,
  menuId: null,
  trigger: null
};

export default Dropdown;
