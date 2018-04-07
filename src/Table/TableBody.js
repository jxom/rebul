import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>;
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableBody;
