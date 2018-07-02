import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeroBody = ({ children, className }) => (
  <div className={classNames('hero-body', { [className]: Boolean(className) })}>{children}</div>
);

HeroBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HeroBody.defaultProps = {
  className: null
};

export default HeroBody;
