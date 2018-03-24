import React from 'react';
import PropTypes from 'prop-types';

const getClassNames = ({ color, isInverted, isOutlined, isRounded, size } = {}) => {
  let classNames = [];
  if (color) {
    classNames = [...classNames, `is-${color}`];
  }
  if (size) {
    classNames = [...classNames, `is-${size}`];
  }
  if (isOutlined) {
    classNames = [...classNames, 'is-outlined'];
  }
  if (isInverted) {
    classNames = [...classNames, 'is-inverted'];
  }
  if (isRounded) {
    classNames = [...classNames, 'is-rounded'];
  }
  return classNames.join(' ');
};

const Button = ({ children, color, element, isInverted, isOutlined, isRounded, size, ...props }) => {
  const Element = element || 'button';
  return (
    <Element className={`button ${getClassNames({ color, isInverted, isOutlined, isRounded, size })}`} {...props}>
      {children}
    </Element>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'white',
    'light',
    'dark',
    'black',
    'text',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  element: PropTypes.string,
  isInverted: PropTypes.boolean,
  isOutlined: PropTypes.boolean,
  isRounded: PropTypes.boolean,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Button.defaultProps = {
  children: null,
  color: null,
  element: null,
  isInverted: false,
  isOutlined: false,
  isRounded: false,
  size: null
};

export default Button;
