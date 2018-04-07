import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ children, hasAddons, ...props }) => {
  return (
    <div className={`tags ${hasAddons ? 'has-addons' : ''}`} {...props}>
      {children}
    </div>
  );
};

Tags.propTypes = {
  children: PropTypes.node.isRequired,
  hasAddons: PropTypes.boolean
};

Tags.defaultProps = {
  hasAddons: false
};

export default Tags;
