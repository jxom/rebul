import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const Button = ({
  children,
  className,
  color,
  element,
  isInverted,
  isLoading,
  isOutlined,
  isRounded,
  isSelected,
  isStatic,
  size,
  state,
  ...props
}) => {
  const Element = element;
  return (
    <Element
      className={`button ${classNames(
        color ? `is-${color}` : '',
        size ? `is-${size}` : '',
        isInverted ? 'is-inverted' : '',
        isLoading ? 'is-loading' : '',
        isOutlined ? 'is-outlined' : '',
        isRounded ? 'is-rounded' : '',
        isSelected ? 'is-selected' : '',
        isStatic ? 'is-static' : '',
        state ? `is-${state}` : '',
        className || ''
      )}`}
      {...props}
    >
      {children}
    </Element>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: sharedPropTypes.color,
  element: PropTypes.string,
  isInverted: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isRounded: PropTypes.bool,
  isSelected: PropTypes.bool,
  isStatic: PropTypes.bool,
  size: sharedPropTypes.size,
  state: sharedPropTypes.state
};

Button.defaultProps = {
  children: null,
  className: null,
  color: null,
  element: 'button',
  isInverted: false,
  isLoading: false,
  isOutlined: false,
  isRounded: false,
  isSelected: false,
  isStatic: false,
  size: null,
  state: null
};

export default Button;
