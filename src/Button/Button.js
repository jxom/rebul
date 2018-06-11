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
  /**
   * Button color. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`
   */
  color: sharedPropTypes.color,
  /** Button element type */
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Is button color inverted? */
  isInverted: PropTypes.bool,
  /** Is button loading? */
  isLoading: PropTypes.bool,
  /** Is button outlined? */
  isOutlined: PropTypes.bool,
  /** Is button round? */
  isRounded: PropTypes.bool,
  /** Is button selected? */
  isSelected: PropTypes.bool,
  /** Is button static? */
  isStatic: PropTypes.bool,
  /** Size of button. Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size,
  /** State of button. Available values: `hovered`, `active`, `focused` */
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
