import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MenuItem extends React.Component {
  render = () => {
    const { children, className, element: Element, isActive, subMenu, ...props } = this.props;
    return (
      <li>
        <Element className={classNames(isActive ? 'is-active' : '', className || '')} {...props}>
          {children}
        </Element>
        {subMenu}
      </li>
    );
  };
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isActive: PropTypes.bool,
  subMenu: PropTypes.element
};

MenuItem.defaultProps = {
  className: null,
  element: 'a',
  isActive: false,
  subMenu: null
};

export default MenuItem;
