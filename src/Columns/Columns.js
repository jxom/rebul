import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Columns = ({ breakpoint, children, className, isGapless, isMultiline }) => (
  <div
    className={classNames(
      'columns',
      breakpoint ? `is-${breakpoint}` : '',
      isGapless ? 'is-gapless' : '',
      isMultiline ? 'is-multiline' : '',
      className || ''
    )}
  >
    {children}
  </div>
);

Columns.propTypes = {
  breakpoint: PropTypes.oneOf(['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isGapless: PropTypes.bool,
  isMultiline: PropTypes.bool
};

Columns.defaultProps = {
  breakpoint: null,
  className: null,
  isGapless: false,
  isMultiline: false
};

export default Columns;
