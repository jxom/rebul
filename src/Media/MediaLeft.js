import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MediaLeft extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('media-left', className || '')}>{children}</div>;
  };
}

MediaLeft.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MediaLeft.defaultProps = {
  className: null
};

export default MediaLeft;
