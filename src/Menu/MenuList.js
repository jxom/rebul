import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MenuList extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <ul className={classNames('menu-list', className || '')}>{children}</ul>;
  };
}

MenuList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MenuList.defaultProps = {
  className: null
};

export default MenuList;
