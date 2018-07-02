import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Footer = ({ children, className, ...props }) => {
  return (
    <footer className={classNames('footer', { [className]: Boolean(className) })} {...props}>
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
