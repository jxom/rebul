import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Columns = ({ breakpoint, children, className, isGapless, isMultiline }) => (
  <div
    className={classNames('columns', {
      [`is-${breakpoint}`]: breakpoint,
      'is-gapless': isGapless,
      'is-multiline': isMultiline,
      [className]: Boolean(className)
    })}
  >
    {children}
  </div>
);

Columns.propTypes = {
  /** Minimum breakpoint of where responsive columns is effective. Available values: `mobile`, `tablet`, `desktop`, `widescreen`, `fullhd` */
  breakpoint: PropTypes.oneOf(['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Do the columns have no gaps? */
  isGapless: PropTypes.bool,
  /** Do the columns span on multiple lines? */
  isMultiline: PropTypes.bool
};

Columns.defaultProps = {
  breakpoint: null,
  className: null,
  isGapless: false,
  isMultiline: false
};

export default Columns;
