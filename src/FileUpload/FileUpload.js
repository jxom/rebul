import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import FileUploadCallToAction from './FileUploadCallToAction';
import FileUploadLabel from './FileUploadLabel';
import FileUploadInput from './FileUploadInput';
import FileUploadName from './FileUploadName';

class FileUpload extends React.Component {
  static CallToAction = FileUploadCallToAction;
  static Input = FileUploadInput;
  static Label = FileUploadLabel;
  static Name = FileUploadName;

  render = () => {
    const { className, children, color, isBoxed, isFullWidth, isRight, hasName, size, ...props } = this.props;
    return (
      <div
        className={classNames('file', {
          [className]: Boolean(className),
          [`is-${color}`]: Boolean(color),
          [`is-${size}`]: Boolean(size),
          'is-boxed': isBoxed,
          'is-fullwidth': isFullWidth,
          'is-right': isRight,
          'has-name': hasName
        })}
        {...props}
      >
        {children}
      </div>
    );
  };
}

FileUpload.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /**
   * Button color. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`
   */
  color: sharedPropTypes.color,
  /** Make the call to action a box shape. */
  isBoxed: PropTypes.bool,
  /** Expand the file upload to fill up the space. */
  isFullWidth: PropTypes.bool,
  /** Align the <FileUpload.CallToAction> component to the right */
  isRight: PropTypes.bool,
  /** Set to `true` if a <FileUpload.Name> exists */
  hasName: PropTypes.bool,
  /** Size of the file upload field. Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size
};

FileUpload.defaultProps = {
  className: null,
  color: null,
  isBoxed: false,
  isFullWidth: false,
  isRight: false,
  hasName: false,
  size: null
};

export default FileUpload;
