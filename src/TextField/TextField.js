import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import Field from '../Field/Field';
import FieldBody from '../Field/FieldBody';
import FieldControl from '../Field/FieldControl';
import FieldLabel from '../Field/FieldLabel';

const TextField = ({
  autoComplete,
  autoFocus,
  children,
  className,
  color,
  helpText,
  inputProps,
  inputSize,
  isDisabled,
  isExpanded,
  isLoading,
  isHorizontal,
  isReadOnly,
  isRounded,
  labelComponent,
  labelName,
  labelSize,
  leftAddonComponent,
  leftIconName,
  max,
  maxLength,
  min,
  minLength,
  name,
  onBlur,
  onChange,
  onFocus,
  pattern,
  placeholder,
  rightAddonComponent,
  rightIconName,
  spellCheck,
  state,
  step,
  value,
  ...props
}) => {
  return (
    <Field isHorizontal={isHorizontal} {...props}>
      {(labelName || labelComponent) && (
        <FieldLabel isHorizontal={isHorizontal} isNormal size={labelSize}>
          {labelName || labelComponent}
        </FieldLabel>
      )}
      <FieldBody>
        <Field color={color} helpText={helpText}>
          <Field hasAddons={Boolean(leftAddonComponent || rightAddonComponent)}>
            {leftAddonComponent && <FieldControl>{leftAddonComponent}</FieldControl>}
            <FieldControl
              color={color}
              isExpanded={isExpanded}
              isLoading={isLoading}
              leftIconName={leftIconName}
              rightIconName={rightIconName}
            >
              <input
                aria-label={labelName}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                className={classNames('input', {
                  [`is-${color}`]: Boolean(color),
                  [`is-${inputSize}`]: Boolean(inputSize),
                  [`is-${state}`]: Boolean(state),
                  'is-rounded': isRounded,
                  [className]: Boolean(className)
                })}
                disabled={isDisabled}
                max={max}
                maxLength={maxLength}
                min={min}
                minLength={minLength}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                pattern={pattern}
                placeholder={placeholder}
                readOnly={isReadOnly}
                spellCheck={spellCheck}
                step={step}
                value={value}
                {...inputProps}
              />
            </FieldControl>
            {rightAddonComponent && <FieldControl>{rightAddonComponent}</FieldControl>}
          </Field>
        </Field>
      </FieldBody>
    </Field>
  );
};

TextField.propTypes = {
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
  inputProps: PropTypes.object,
  /** The label that appears above the input */
  labelComponent: PropTypes.element,
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: sharedPropTypes.size,
  /** Addon component to display on the left of the field */
  leftAddonComponent: PropTypes.element,
  /** Name of left field icon */
  leftIconName: PropTypes.string,
  /** Size of the input field */
  inputSize: sharedPropTypes.size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Is input field expanded when addon component exists */
  isExpanded: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is read only */
  isReadOnly: PropTypes.bool,
  /** Input field is rounded */
  isRounded: PropTypes.bool,
  /** Max value for numeric field */
  max: PropTypes.number,
  /** Max length for a alphanumeric field */
  maxLength: PropTypes.number,
  /** Min value for numeric field */
  min: PropTypes.number,
  /** Min length for a alphanumeric field */
  minLength: PropTypes.number,
  /** Name of the input field */
  name: PropTypes.string,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** Regex to check value against */
  pattern: PropTypes.string,
  /** Placeholder of the input */
  placeholder: PropTypes.string,
  /** Addon component to display on the right of the field */
  rightAddonComponent: PropTypes.element,
  /** Name of right field icon */
  rightIconName: PropTypes.string,
  /** Enable spell check for input field */
  spellCheck: PropTypes.bool,
  /** State of field */
  state: sharedPropTypes.state,
  /** Increment/decrement step value for numeric field */
  step: PropTypes.number,
  /** Type of input */
  type: PropTypes.string,
  /** Value of the input */
  value: PropTypes.string
};

TextField.defaultProps = {
  autoComplete: null,
  autoFocus: false,
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelComponent: null,
  labelName: null,
  labelSize: null,
  leftAddonComponent: null,
  leftIconName: null,
  inputProps: {},
  inputSize: null,
  isDisabled: false,
  isExpanded: false,
  isLoading: false,
  isHorizontal: false,
  isReadOnly: false,
  isRounded: false,
  max: null,
  maxLength: null,
  min: null,
  minLength: null,
  name: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  pattern: null,
  placeholder: null,
  rightAddonComponent: null,
  rightIconName: null,
  spellCheck: false,
  state: null,
  step: null,
  type: 'text',
  value: undefined
};

export default TextField;
