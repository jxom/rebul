import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MediaContent extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('media-content', className || '')}>{children}</div>;
  };
}

MediaContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MediaContent.defaultProps = {
  className: null
};

export default MediaContent;
