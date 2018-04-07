import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFoot from './TableFoot';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableCellHead from './TableCellHead';

class Table extends React.Component {
  static Head = TableHead;
  static Body = TableBody;
  static Foot = TableFoot;
  static Row = TableRow;
  static Cell = TableCell;
  static CellHead = TableCellHead;

  render = () => {
    const { children, className, isBordered, isFullWidth, isHoverable, isNarrow, isStriped, ...props } = this.props;
    return (
      <table
        className={`table ${classNames(
          className || '',
          isBordered ? 'is-bordered' : '',
          isFullWidth ? 'is-fullwidth' : '',
          isHoverable ? 'is-hoverable' : '',
          isNarrow ? 'is-narrow' : '',
          isStriped ? 'is-striped' : ''
        )}`}
        {...props}
      >
        {children}
      </table>
    );
  };
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isBordered: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isHoverable: PropTypes.bool,
  isNarrow: PropTypes.bool,
  isStriped: PropTypes.bool
};

Table.defaultProps = {
  className: null,
  isBordered: false,
  isFullWidth: false,
  isHoverable: false,
  isNarrow: false,
  isStriped: false
};

export default Table;
