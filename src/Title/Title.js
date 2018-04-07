import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = ({ children, className, element, isSpaced, isSubTitle, size, ...props }) => {
  const Element = element || `h${size || '1'}`;
  return (
    <Element
      className={classNames(
        isSubTitle ? 'subtitle' : 'title',
        size ? `is-${size}` : '',
        isSpaced ? 'is-spaced' : '',
        className || ''
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.element,
  isSpaced: PropTypes.bool,
  isSubTitle: PropTypes.bool,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
};

Title.defaultProps = {
  className: null,
  element: null,
  isSpaced: false,
  isSubTitle: false,
  size: null
};

export default Title;
