import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LevelLeft extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('level-left', className || '')}>{children}</div>;
  };
}

LevelLeft.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

LevelLeft.defaultProps = {
  className: null
};

export default LevelLeft;
