import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';
import Delete from '../Delete/Delete';

const Notification = ({ children, className, color, onClickClose, ...props }) => {
  return (
    <div
      className={classNames('notification', {
        [`is-${color}`]: Boolean(color),
        [className]: Boolean(className)
      })}
      {...props}
    >
      {onClickClose && <Delete onClick={onClickClose} />}
      {children}
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: sharedPropTypes.color,
  /** Function to invoke when close button clicked */
  onClickClose: PropTypes.func
};

Notification.defaultProps = {
  className: null,
  color: null,
  onClickClose: null
};

export default Notification;
