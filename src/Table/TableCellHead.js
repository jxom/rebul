import React from 'react';
import PropTypes from 'prop-types';

const TableCellHead = ({ children, ...props }) => {
  return <th {...props}>{children}</th>;
};

TableCellHead.propTypes = {
  children: PropTypes.node
};

TableCellHead.defaultProps = {
  children: null
};

export default TableCellHead;
