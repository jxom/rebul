import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children, className, ...props }) => {
  return (
    <footer className={`footer ${className || ''}`} {...props}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Footer.defaultProps = {
  children: null,
  className: null
};

export default Footer;
