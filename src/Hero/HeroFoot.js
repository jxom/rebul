import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeroFoot = ({ children, className }) => (
  <div className={classNames('hero-body', className || '')}>{children}</div>
);

HeroFoot.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HeroFoot.defaultProps = {
  className: null
};

export default HeroFoot;
