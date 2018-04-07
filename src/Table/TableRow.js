import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableRow = ({ children, className, isSelected, ...props }) => {
  return (
    <tr className={classNames(isSelected ? 'is-selected' : '', className || '')} {...props}>
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isSelected: PropTypes.bool
};

TableRow.defaultProps = {
  className: null,
  isSelected: false
};

export default TableRow;
