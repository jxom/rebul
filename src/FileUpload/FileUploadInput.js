import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FileUploadInput = ({ className, ...props }) => (
  <input
    className={classNames('file-input', {
      [className]: Boolean(className)
    })}
    type="file"
    {...props}
  />
);

FileUploadInput.propTypes = {
  className: PropTypes.string
};

FileUploadInput.defaultProps = {
  className: null
};

export default FileUploadInput;
