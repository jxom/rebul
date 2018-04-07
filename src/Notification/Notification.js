import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';
import Delete from '../Delete/Delete';

const Notification = ({ children, className, color, onClickClose, ...props }) => {
  return (
    <div className={`notification ${classNames(className || '', color ? `is-${color}` : '')}`} {...props}>
      {onClickClose && <Delete onClick={onClickClose} />}
      {children}
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: sharedPropTypes.color,
  onClickClose: PropTypes.func
};

Notification.defaultProps = {
  className: null,
  color: null,
  onClickClose: null
};

export default Notification;
