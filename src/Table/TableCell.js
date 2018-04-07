import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ children, ...props }) => {
  return <td {...props}>{children}</td>;
};

TableCell.propTypes = {
  children: PropTypes.node
};

TableCell.defaultProps = {
  children: null
};

export default TableCell;
