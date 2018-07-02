import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import PaginationPrevious from './PaginationPrevious';
import PaginationNext from './PaginationNext';
import PaginationList from './PaginationList';
import PaginationLink from './PaginationLink';
import PaginationEllipsis from './PaginationEllipsis';

class Pagination extends React.Component {
  static Previous = PaginationPrevious;
  static Next = PaginationNext;
  static List = PaginationList;
  static Link = PaginationLink;
  static Ellipsis = PaginationEllipsis;

  render = () => {
    const { align, children, className, isRounded, size, ...props } = this.props;
    return (
      <nav
        className={classNames('pagination', {
          [`is-${align}`]: Boolean(align),
          [`is-${size}`]: Boolean(size),
          'is-rounded': isRounded,
          [className]: Boolean(className)
        })}
        aria-label="pagination"
        {...props}
      >
        {children}
      </nav>
    );
  };
}

Pagination.propTypes = {
  /** Alignment of the pagination buttons. Available values: `left`, `centered`, `right` */
  align: sharedPropTypes.align,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Are the pagination buttons round? */
  isRounded: PropTypes.bool,
  /** Size of buttons. Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size
};

Pagination.defaultProps = {
  align: 'left',
  className: null,
  isRounded: false,
  size: null
};

export default Pagination;
