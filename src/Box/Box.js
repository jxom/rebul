import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children, className, ...props }) => {
  return (
    <div className={`box ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Box.defaultProps = {
  className: null
};

export default Box;
