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
        className={classNames('table', {
          'is-bordered': isBordered,
          'is-fullwidth': isFullWidth,
          'is-hoverable': isHoverable,
          'is-narrow': isNarrow,
          'is-striped': isStriped,
          [className]: Boolean(className)
        })}
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
  /** Is the table bordered? */
  isBordered: PropTypes.bool,
  /** Is the table full width? */
  isFullWidth: PropTypes.bool,
  /** Is the table hoverable? */
  isHoverable: PropTypes.bool,
  /** Is the table narrow? */
  isNarrow: PropTypes.bool,
  /** Is the table striped? */
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
