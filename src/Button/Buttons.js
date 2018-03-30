import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ children, hasAddons, ...props }) => {
  return (
    <div className={`buttons ${hasAddons ? 'has-addons' : ''}`} {...props}>
      {children}
    </div>
  );
};

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  hasAddons: PropTypes.boolean
};

Buttons.defaultProps = {
  hasAddons: false
};

export default Buttons;
