import React from 'react';
import PropTypes from 'prop-types';

const TableFoot = ({ children, ...props }) => {
  return <tfoot {...props}>{children}</tfoot>;
};

TableFoot.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableFoot;
