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
  isRight: PropTypes.boolean,
  isCentered: PropTypes.boolean,
  isSmall: PropTypes.boolean,
  isMedium: PropTypes.boolean,
  isLarge: PropTypes.boolean,
  isBoxed: PropTypes.boolean,
  isToggle: PropTypes.boolean,
  isToggleRounded: PropTypes.boolean,
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
