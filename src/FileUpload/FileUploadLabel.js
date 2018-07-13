import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FileUploadLabel = ({ children, className, element: Element, ...props }) => (
  <Element
    className={classNames('file-label', {
      [className]: Boolean(className)
    })}
    {...props}
  >
    {children}
  </Element>
);

FileUploadLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

FileUploadLabel.defaultProps = {
  className: null,
  element: 'label'
};

export default FileUploadLabel;
