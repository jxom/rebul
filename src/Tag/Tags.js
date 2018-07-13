import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tags = ({ children, className, hasAddons, ...props }) => {
  return (
    <div
      className={classNames('tags', {
        'has-addons': hasAddons,
        [className]: Boolean(className)
      })}
      {...props}
    >
      {children}
    </div>
  );
};

Tags.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasAddons: PropTypes.bool
};

Tags.defaultProps = {
  className: null,
  hasAddons: false
};

export default Tags;
