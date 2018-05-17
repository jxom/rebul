import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import Field from '../Field/Field';
import FieldBody from '../Field/FieldBody';
import FieldControl from '../Field/FieldControl';
import FieldLabel from '../Field/FieldLabel';

const SelectField = ({
  children,
  className,
  color,
  helpText,
  inputSize,
  id,
  isDisabled,
  isHorizontal,
  isLoading,
  isMultiSelect,
  isRounded,
  labelComponent,
  labelName,
  labelSize,
  leftIconName,
  onBlur,
  onChange,
  onFocus,
  options,
  state,
  value,
  ...props
}) => {
  return (
    <Field id={id} isHorizontal={isHorizontal} label={labelName} labelSize={labelSize}>
      {(labelName || labelComponent) && (
        <FieldLabel isHorizontal={isHorizontal} isNormal size={labelSize}>
          {labelName || labelComponent}
        </FieldLabel>
      )}
      <FieldBody>
        <Field color={color} helpText={helpText}>
          <FieldControl leftIconName={leftIconName}>
            <div
              className={`select ${classNames(
                color ? `is-${color}` : '',
                isLoading ? 'is-loading' : '',
                isMultiSelect ? 'is-multiple' : '',
                isRounded ? 'is-rounded' : '',
                inputSize ? `is-${inputSize}` : '',
                className || ''
              )}`}
              disabled={isDisabled}
            >
              <select
                aria-label={labelName}
                className={classNames(state ? `is-${state}` : '')}
                multiple={isMultiSelect}
                onBlur={onBlur}
                onChange={e => onChange && onChange(e.target.value, e)}
                onFocus={onBlur}
                value={value}
                {...props}
              >
                {options.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </FieldControl>
        </Field>
      </FieldBody>
    </Field>
  );
};

SelectField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of input field. */
  color: sharedPropTypes.color,
  /** Displays help text */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The label that appears above the input */
  labelComponent: PropTypes.element,
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: sharedPropTypes.size,
  /** Name of left field icon */
  leftIconName: PropTypes.string,
  /** ID for the input field */
  id: PropTypes.string,
  /** Size of the input field */
  inputSize: sharedPropTypes.size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Enable multi-select */
  isMultiSelect: PropTypes.bool,
  /** Input field is rounded */
  isRounded: PropTypes.bool,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Set of options to select from */
  options: PropTypes.array,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** State of field */
  state: sharedPropTypes.state,
  /** Value of the input */
  value: PropTypes.string
};

SelectField.defaultProps = {
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelComponent: null,
  labelName: null,
  labelSize: null,
  leftIconName: null,
  id: null,
  inputSize: null,
  isDisabled: false,
  isHorizontal: false,
  isLoading: false,
  isMultiSelect: false,
  isRounded: false,
  onBlur: null,
  onChange: null,
  options: [],
  onFocus: null,
  state: null,
  value: undefined
};

export default SelectField;
