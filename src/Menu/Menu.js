import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuItem from './MenuItem';
import MenuLabel from './MenuLabel';
import MenuList from './MenuList';

class Menu extends React.Component {
  static Item = MenuItem;
  static Label = MenuLabel;
  static List = MenuList;

  render = () => {
    const { children, className } = this.props;
    return <aside className={classNames('menu', { [className]: Boolean(className) })}>{children}</aside>;
  };
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Menu.defaultProps = {
  className: null
};

export default Menu;
