import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarStart = ({ children, className, ...props }) => (
  <div className={classNames('navbar-start', className || '')} {...props}>
    {children}
  </div>
);

NavbarStart.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

NavbarStart.defaultProps = {
  className: null
};

export default NavbarStart;
