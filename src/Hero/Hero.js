import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';
import HeroHead from './HeroHead';
import HeroBody from './HeroBody';
import HeroFoot from './HeroFoot';

const HERO_SIZES = ['medium', 'large', 'fullheight'];

class Hero extends React.Component {
  static Head = HeroHead;
  static Body = HeroBody;
  static Foot = HeroFoot;

  render = () => {
    const { children, className, color, isBold, size } = this.props;
    return (
      <div
        className={classNames('hero', {
          [`is-${size}`]: Boolean(size),
          [`is-${color}`]: Boolean(color),
          'is-bold': isBold,
          [className]: Boolean(className)
        })}
      >
        {children}
      </div>
    );
  };
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Adds a background color to hero. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: sharedPropTypes.color,
  /** If true, adds a gradient to hero */
  isBold: PropTypes.bool,
  /** Size of hero. Available values: `medium`, `large`, `fullheight` */
  size: PropTypes.oneOf(HERO_SIZES)
};

Hero.defaultProps = {
  className: null,
  color: null,
  isBold: false,
  size: null
};

export default Hero;
