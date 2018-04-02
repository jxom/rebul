import React from 'react';
import PropTypes from 'prop-types';

const Columns = ({ children }) => <div className="columns">{children}</div>;

Columns.propTypes = {
  children: PropTypes.node.isRequired
};

export default Columns;
