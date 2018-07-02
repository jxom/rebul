import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const Tabs = ({ children, className, align, size, isBoxed, isToggle, isToggleRounded, isFullWidth, ...props }) => {
  return (
    <div
      className={classNames('tabs', {
        [`is-${align}`]: align,
        [`is-${size}`]: size,
        'is-boxed': isBoxed,
        'is-toggle': isToggle,
        'is-toggle-rounded': isToggleRounded,
        'is-fullwidth': isFullWidth,
        [className]: Boolean(className)
      })}
      {...props}
    >
      <ul>{children}</ul>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Alignment of the dropdown. Available values: `left`, `centered`, `right` */
  align: sharedPropTypes.align,
  /** Size of the tabs Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size,
  /** Are tabs box styled? */
  isBoxed: PropTypes.boolean,
  /** Are tabs toggle styled? */
  isToggle: PropTypes.boolean,
  /** Are tabs rounded toggle styled? */
  isToggleRounded: PropTypes.boolean,
  /** Are tabs fullwidth? */
  isFullWidth: PropTypes.boolean
};

Tabs.defaultProps = {
  className: null,
  align: null,
  size: null,
  isBoxed: false,
  isToggle: false,
  isToggleRounded: false,
  isFullWidth: false
};

export default Tabs;
