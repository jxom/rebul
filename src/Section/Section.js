import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, className, ...props }) => {
  return (
    <section className={`section ${className || ''}`} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Section.defaultProps = {
  children: null,
  className: null
};

export default Section;
