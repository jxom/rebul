import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, size, src, ...props }) => (
  <figure className={`image ${size ? `is-${size}x${size}` : ''}`} {...props}>
    <img src={src} alt={alt} />
  </figure>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['16', '24', '32', '48', '64', '96', '128']).isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
