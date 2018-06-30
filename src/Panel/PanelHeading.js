import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PanelHeading = ({ children, className, element: Element }) => (
  <Element className={classNames('panel-heading', className || '')}>{children}</Element>
);

PanelHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

PanelHeading.defaultProps = {
  className: null,
  element: 'p'
};

export default PanelHeading;
