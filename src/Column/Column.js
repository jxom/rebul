import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children }) => <div className="column">{children}</div>;

Column.propTypes = {
  children: PropTypes.node.isRequired
};

export default Column;
