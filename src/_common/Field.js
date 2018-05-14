import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import FieldLabel from './FieldLabel';

const Field = ({ children, className, color, hasAddons, helpText, isHorizontal, label, labelSize, ...props }) => (
  <div
    className={`field ${classNames(
      isHorizontal ? 'is-horizontal' : '',
      hasAddons ? 'has-addons' : '',
      className || ''
    )}`}
  >
    {label && (
      <FieldLabel isHorizontal={isHorizontal} size={labelSize}>
        {label}
      </FieldLabel>
    )}
    {children}
    {helpText && <p className={`help ${classNames(color ? `is-${color}` : '')}`}>{helpText}</p>}
  </div>
);

Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: sharedPropTypes.color,
  hasAddons: PropTypes.bool,
  helpText: PropTypes.string,
  isHorizontal: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelSize: sharedPropTypes.size
};

Field.defaultProps = {
  className: null,
  color: null,
  hasAddons: false,
  helpText: null,
  isHorizontal: false,
  label: null,
  labelSize: null
};

export default Field;
