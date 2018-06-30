import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import BreadcrumbItem from './BreadcrumbItem';

class Breadcrumb extends React.Component {
  static Item = BreadcrumbItem;

  render = () => {
    const { align, children, className, separator, size, ...props } = this.props;
    return (
      <nav
        aria-label="breadcrumbs"
        className={`breadcrumb ${classNames(
          align ? `is-${align}` : '',
          separator ? `has-${separator}-separator` : '',
          size ? `is-${size}` : '',
          className || ''
        )}`}
        {...props}
      >
        <ul>{children}</ul>
      </nav>
    );
  };
}

Breadcrumb.propTypes = {
  /** Alignment of the breadcrumbs. Available values: `left`, `centered`, `right` */
  align: sharedPropTypes.align,
  children: PropTypes.node,
  className: PropTypes.string,
  /** Type of breadcrumb separator. Available values: `arrow`, `bullet`, `dot`, `succeeds` */
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  /** Size of the breadcrumbs. Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size
};

Breadcrumb.defaultProps = {
  align: null,
  children: null,
  className: null,
  separator: null,
  size: null
};

export default Breadcrumb;
