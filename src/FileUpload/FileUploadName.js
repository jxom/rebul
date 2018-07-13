import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FileUploadName = ({ children, className, ...props }) => (
  <span
    className={classNames('file-name', {
      [className]: Boolean(className)
    })}
    {...props}
  >
    {children}
  </span>
);

FileUploadName.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FileUploadName.defaultProps = {
  className: null
};

export default FileUploadName;
