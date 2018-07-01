import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarEnd = ({ children, className, ...props }) => (
  <div className={classNames('navbar-end', className || '')} {...props}>
    {children}
  </div>
);

NavbarEnd.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

NavbarEnd.defaultProps = {
  className: null
};

export default NavbarEnd;
