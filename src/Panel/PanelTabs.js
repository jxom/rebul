import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelTabs = ({ children, className, element: Element }) => (
  <Element className={classNames('panel-tabs', { [className]: Boolean(className) })}>{children}</Element>
);

PanelTabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

PanelTabs.defaultProps = {
  className: null,
  element: 'p'
};

export default PanelTabs;
