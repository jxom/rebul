import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeroHead = ({ children, className }) => (
  <div className={classNames('hero-body', { [className]: Boolean(className) })}>{children}</div>
);

HeroHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HeroHead.defaultProps = {
  className: null
};

export default HeroHead;
