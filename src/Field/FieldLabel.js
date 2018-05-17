import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const Label = ({ children, className, size }) => (
  <label className={`label ${classNames(size ? `is-${size}` : '', className || '')}`}>{children}</label>
);

const FieldLabel = ({ children, className, isHorizontal, isNormal, size, ...props }) =>
  isHorizontal ? (
    <div className={classNames(isHorizontal ? 'field-label' : '', isNormal ? 'is-normal' : '')}>
      <Label className={className} size={size}>
        {children}
      </Label>
    </div>
  ) : (
    <Label className={className} size={size}>
      {children}
    </Label>
  );

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: sharedPropTypes.size
};

Label.defaultProps = {
  className: null,
  size: null
};

FieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isHorizontal: PropTypes.bool,
  isNormal: PropTypes.bool,
  size: sharedPropTypes.size
};

FieldLabel.defaultProps = {
  className: null,
  isHorizontal: false,
  isNormal: false,
  size: null
};

export default FieldLabel;
