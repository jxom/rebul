import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';
import LevelItem from './LevelItem';

class Level extends React.Component {
  static Left = LevelLeft;
  static Right = LevelRight;
  static Item = LevelItem;

  render = () => {
    const { children, className, isMobile } = this.props;
    return <div className={classNames('level', isMobile ? 'is-mobile' : '', className || '')}>{children}</div>;
  };
}

Level.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isMobile: PropTypes.bool
};

Level.defaultProps = {
  className: null,
  isMobile: false
};

export default Level;
