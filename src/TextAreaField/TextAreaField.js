import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextareaAutosize from 'react-autosize-textarea';
import * as sharedPropTypes from '../_prop-types';

import Field from '../_common/Field';
import FieldBody from '../_common/FieldBody';
import FieldControl from '../_common/FieldControl';

const TextAreaField = ({
  autoComplete,
  autoFocus,
  children,
  className,
  color,
  helpText,
  inputSize,
  id,
  isDisabled,
  isLoading,
  isHorizontal,
  isReadOnly,
  labelName,
  labelSize,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  rows,
  state,
  value,
  ...props
}) => {
  return (
    <Field id={id} isHorizontal={isHorizontal} label={labelName} labelSize={labelSize}>
      <FieldBody>
        <Field color={color} helpText={helpText}>
          <FieldControl color={color} isLoading={isLoading}>
            <TextareaAutosize
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              className={`textarea ${classNames(
                color ? `is-${color}` : '',
                inputSize ? `is-${inputSize}` : '',
                state ? `is-${state}` : '',
                className || ''
              )}`}
              disabled={isDisabled}
              onBlur={onBlur}
              onChange={e => onChange && onChange(e.target.value, e)}
              onFocus={onBlur}
              placeholder={placeholder}
              readOnly={isReadOnly}
              rows={rows}
              value={value}
              {...props}
            />
          </FieldControl>
        </Field>
      </FieldBody>
    </Field>
  );
};

TextAreaField.propTypes = {
  /** Set an autocomplete attribute on the field */
  autoComplete: PropTypes.string,
  /** Automatically set focus to the field */
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of input field. */
  color: sharedPropTypes.color,
  /** Displays help text */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: sharedPropTypes.size,
  /** ID for the input field */
  id: PropTypes.string,
  /** Size of the input field */
  inputSize: sharedPropTypes.size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is read only */
  isReadOnly: PropTypes.bool,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** Placeholder of the input */
  placeholder: PropTypes.string,
  /** Minimum number of rows */
  rows: PropTypes.number,
  /** State of field */
  state: sharedPropTypes.state,
  /** Value of the input */
  value: PropTypes.string
};

TextAreaField.defaultProps = {
  autoComplete: null,
  autoFocus: false,
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelName: null,
  labelSize: null,
  id: null,
  inputSize: null,
  isDisabled: false,
  isLoading: false,
  isHorizontal: false,
  isReadOnly: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  rows: 3,
  state: null,
  value: undefined
};

export default TextAreaField;
