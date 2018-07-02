import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Buttons = ({ children, className, hasAddons, ...props }) => {
  return (
    <div className={classNames('buttons', { 'has-addons': hasAddons, [className]: Boolean(className) })} {...props}>
      {children}
    </div>
  );
};

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasAddons: PropTypes.bool
};

Buttons.defaultProps = {
  className: null,
  hasAddons: false
};

export default Buttons;
