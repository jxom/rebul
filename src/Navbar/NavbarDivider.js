import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarDivider = ({ className, ...props }) => (
  <div className={classNames('navbar-divider', { [className]: Boolean(className) })} />
);

NavbarDivider.propTypes = {
  className: PropTypes.string
};

NavbarDivider.defaultProps = {
  className: null
};

export default NavbarDivider;
