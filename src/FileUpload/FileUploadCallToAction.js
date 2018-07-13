import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FileUploadCallToAction = ({ children, className, ...props }) => (
  <span
    className={classNames('file-cta', {
      [className]: Boolean(className)
    })}
    {...props}
  >
    {children}
  </span>
);

FileUploadCallToAction.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FileUploadCallToAction.defaultProps = {
  className: null
};

export default FileUploadCallToAction;
