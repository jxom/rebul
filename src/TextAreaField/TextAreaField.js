import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import Field from '../_common/Field';
import FieldBody from '../_common/FieldBody';
import FieldControl from '../_common/FieldControl';

const TextField = ({
  autoComplete,
  autoFocus,
  children,
  className,
  color,
  helpText,
  inputSize,
  id,
  isDisabled,
  isExpanded,
  isLoading,
  isHorizontal,
  isReadOnly,
  isRounded,
  label,
  labelSize,
  leftAddonComponent,
  leftIconName,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  rightAddonComponent,
  rightIconName,
  state,
  value,
  ...props
}) => {
  return (
    <Field id={id} isHorizontal={isHorizontal} label={label} labelSize={labelSize}>
      <FieldBody>
        <Field color={color} hasAddons={Boolean(leftAddonComponent || rightAddonComponent)} helpText={helpText}>
          {leftAddonComponent && <FieldControl>{leftAddonComponent}</FieldControl>}
          <FieldControl
            color={color}
            isExpanded={isExpanded}
            isLoading={isLoading}
            leftIconName={leftIconName}
            rightIconName={rightIconName}
          >
            <input
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              className={`input ${classNames(
                color ? `is-${color}` : '',
                inputSize ? `is-${inputSize}` : '',
                isRounded ? 'is-rounded' : '',
                state ? `is-${state}` : '',
                className || ''
              )}`}
              disabled={isDisabled}
              onBlur={onBlur}
              onChange={e => onChange && onChange(e.target.value, e)}
              onFocus={onBlur}
              placeholder={placeholder}
              readOnly={isReadOnly}
              value={value}
              {...props}
            />
          </FieldControl>
          {rightAddonComponent && <FieldControl>{rightAddonComponent}</FieldControl>}
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
  /** The label that appears above the input */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Size of the label field */
  labelSize: sharedPropTypes.size,
  /** Addon component to display on the left of the field */
  leftAddonComponent: PropTypes.element,
  /** Name of left field icon */
  leftIconName: PropTypes.string,
  /** ID for the input field */
  id: PropTypes.string,
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
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** Placeholder of the input */
  placeholder: PropTypes.string,
  /** Addon component to display on the right of the field */
  rightAddonComponent: PropTypes.element,
  /** Name of right field icon */
  rightIconName: PropTypes.string,
  /** State of field */
  state: sharedPropTypes.state,
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
  label: null,
  labelSize: null,
  leftAddonComponent: null,
  leftIconName: null,
  id: null,
  inputSize: null,
  isDisabled: false,
  isExpanded: false,
  isLoading: false,
  isHorizontal: false,
  isReadOnly: false,
  isRounded: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  rightAddonComponent: null,
  rightIconName: null,
  state: null,
  type: 'text',
  value: ''
};

export default TextField;
