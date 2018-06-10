import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenu = ({ children, menuId }) => (
  <div id={menuId} className="dropdown-menu" role="menu">
    {children}
  </div>
);

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  menuId: PropTypes.string
};

DropdownMenu.defaultProps = {
  menuId: null
};

export default DropdownMenu;
