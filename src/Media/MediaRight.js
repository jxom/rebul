import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MediaRight extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('media-right', { [className]: Boolean(className) })}>{children}</div>;
  };
}

MediaRight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MediaRight.defaultProps = {
  className: null
};

export default MediaRight;
