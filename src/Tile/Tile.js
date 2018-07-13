import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tile = ({ children, className, context, element: Element, isVertical, size, ...props }) => {
  return (
    <Element
      className={classNames('tile', {
        [className]: Boolean(className),
        [`is-${context}`]: Boolean(context),
        [`is-${size}`]: Boolean(size),
        'is-vertical': isVertical
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

Tile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Contextual modifier. Available values: `ancestor`, `parent`, `child` */
  context: PropTypes.oneOf(['ancestor', 'parent', 'child']),
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Is the tile vertical? */
  isVertical: PropTypes.bool,
  /** Size of the tile. Available values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` */
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
};

Tile.defaultProps = {
  children: null,
  className: null,
  context: null,
  element: 'div',
  isVertical: false,
  size: null
};

export default Tile;
