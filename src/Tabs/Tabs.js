import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tabs = ({
  children,
  className,
  isRight,
  isCentered,
  isSmall,
  isMedium,
  isLarge,
  isBoxed,
  isToggle,
  isToggleRounded,
  isFullWidth,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'tabs',
        isRight ? 'is-right' : '',
        isCentered ? 'is-centered' : '',
        isSmall ? 'is-small' : '',
        isMedium ? 'is-medium' : '',
        isLarge ? 'is-large' : '',
        isBoxed ? 'is-boxed' : '',
        isToggle ? 'is-toggle' : '',
        isToggleRounded ? 'is-toggle-rounded' : '',
        isFullWidth ? 'is-fullwidth' : '',
        className || ''
      )}
      {...props}
    >
      <ul>{children}</ul>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Are tabs center aligned? */
  isCentered: PropTypes.boolean,
  /** Are tabs right aligned? */
  isRight: PropTypes.boolean,
  /** Are tabs small? */
  isSmall: PropTypes.boolean,
  /** Are tabs medium? */
  isMedium: PropTypes.boolean,
  /** Are tabs large? */
  isLarge: PropTypes.boolean,
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
  isRight: false,
  isCentered: false,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  isBoxed: false,
  isToggle: false,
  isToggleRounded: false,
  isFullWidth: false
};

export default Tabs;
