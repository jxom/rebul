import React from 'react';
import PropTypes from 'prop-types';

const DropdownContent = ({ children }) => <div className="dropdown-content">{children}</div>;

DropdownContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownContent;
