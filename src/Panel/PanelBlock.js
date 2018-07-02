import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelBlock = ({ children, className, element: Element, isActive }) => (
  <Element
    className={classNames('panel-block', {
      'is-active': isActive,
      [className]: Boolean(className)
    })}
  >
    {children}
  </Element>
);

PanelBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  isActive: PropTypes.bool
};

PanelBlock.defaultProps = {
  className: null,
  element: 'div',
  isActive: false
};

export default PanelBlock;
