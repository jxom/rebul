import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';

class MediaImage extends React.Component {
  render = () => {
    const { alt, className, size, src } = this.props;
    return <Image alt={alt} className={className} size={size} src={src} />;
  };
}

MediaImage.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string.isRequired
};

MediaImage.defaultProps = {
  className: null,
  size: null
};

export default MediaImage;
