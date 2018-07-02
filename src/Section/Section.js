import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Section = ({ children, className, ...props }) => {
  return (
    <section className={classNames('section', { [className]: Boolean(className) })} {...props}>
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
