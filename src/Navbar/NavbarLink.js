import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarLink = ({ children, className, ...props }) => (
  <a className={classNames('navbar-link', { [className]: Boolean(className) })} {...props}>
    {children}
  </a>
);

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

NavbarLink.defaultProps = {
  className: null
};

export default NavbarLink;
