import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CONTAINER_SIZES = ['fluid', 'desktop', 'widescreen', 'fullhd'];

const Container = ({ children, className, size }) => (
  <div className={classNames('container', size ? `is-${size}` : '', className || '')}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Available values: `fluid`, `desktop`, `widescreen`, `fullhd` */
  size: PropTypes.oneOf(CONTAINER_SIZES)
};

Container.defaultProps = {
  className: null,
  size: null
};

export default Container;
