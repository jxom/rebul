import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Buttons = ({ children, className, hasAddons, ...props }) => {
  return (
    <div className={classNames('buttons', hasAddons ? 'has-addons' : '', className || '')} {...props}>
      {children}
    </div>
  );
};

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasAddons: PropTypes.boolean
};

Buttons.defaultProps = {
  className: null,
  hasAddons: false
};

export default Buttons;
