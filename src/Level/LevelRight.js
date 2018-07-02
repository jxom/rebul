import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LevelRight extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('level-right', { [className]: Boolean(className) })}>{children}</div>;
  };
}

LevelRight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

LevelRight.defaultProps = {
  className: null
};

export default LevelRight;
