import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarDivider = ({ children, className, ...props }) => (
  <div className={classNames('navbar-divider', { [className]: Boolean(className) })} {...props}>
    {children}
  </div>
);

NavbarDivider.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

NavbarDivider.defaultProps = {
  className: null
};

export default NavbarDivider;
