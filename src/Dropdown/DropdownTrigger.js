import React from 'react';
import PropTypes from 'prop-types';

const DropdownTrigger = ({ children }) => <div className="dropdown-trigger">{children}</div>;

DropdownTrigger.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownTrigger;
