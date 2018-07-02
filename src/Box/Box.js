import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = ({ children, className, ...props }) => {
  return (
    <div className={classNames('box', { [className]: Boolean(className) })} {...props}>
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
