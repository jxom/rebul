import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = ({ children, className, element, isSpaced, isSubTitle, size, ...props }) => {
  const Element = element || `h${size || '1'}`;
  return (
    <Element
      className={classNames({
        [`is-${size}`]: Boolean(size),
        'is-spaced': isSpaced,
        title: !isSubTitle,
        subtitle: isSubTitle,
        [className]: Boolean(className)
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Custom element to use for title. Example: `'p'` */
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Does the title have padding? */
  isSpaced: PropTypes.bool,
  /** Is the title a subtitle? */
  isSubTitle: PropTypes.bool,
  /** Size of title. Available values: `"1"`, `"2"`, `"3"`, `"4"`, `"5"`, `"6"` */
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
