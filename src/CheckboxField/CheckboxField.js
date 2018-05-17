import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import Field from '../Field/Field';
import FieldBody from '../Field/FieldBody';
import FieldControl from '../Field/FieldControl';
import FieldLabel from '../Field/FieldLabel';

class CheckboxField extends React.Component {
  state = { value: this.props.value };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const { isChecked } = nextProps;
    const { isChecked: prevIsChecked } = prevState;
    if (isChecked !== prevIsChecked) {
      return { isChecked };
    }
    return null;
  };

  handleChange = isChecked => {
    const { onChange, isChecked: propIsChecked } = this.props;
    if (propIsChecked) return;
    this.setState({ isChecked });
    onChange && onChange(isChecked);
  };

  render = () => {
    const {
      children,
      className,
      color,
      helpText,
      isDisabled,
      isHorizontal,
      labelComponent,
      labelName,
      labelSize,
      name,
      onChange,
      text,
      ...props
    } = this.props;
    const { isChecked } = this.state;
    return (
      <Field isHorizontal={isHorizontal}>
        {(labelName || labelComponent) && (
          <FieldLabel isHorizontal={isHorizontal} size={labelSize}>
            {labelName || labelComponent}
          </FieldLabel>
        )}
        <FieldBody>
          <Field color={color} helpText={helpText}>
            <FieldControl>
              <label className={classNames('checkbox', className || '')} disabled={isDisabled}>
                <input
                  aria-label={labelName}
                  disabled={isDisabled}
                  name={name}
                  onChange={() => this.handleChange(!isChecked)}
                  type="checkbox"
                  {...props}
                  checked={isChecked}
                />{' '}
                {text}
              </label>
            </FieldControl>
          </Field>
        </FieldBody>
      </Field>
    );
  };
}

CheckboxField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of input field. */
  color: sharedPropTypes.color,
  /** Displays help text */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /* Whether the checkbox is selected */
  isChecked: PropTypes.bool,
  /** Whether the checkbox is disabled. */
  isDisabled: PropTypes.bool,
  /** The label that appears above the input */
  labelComponent: PropTypes.element,
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: sharedPropTypes.size,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Name of the input field */
  name: PropTypes.string,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Text to display next to the checkbox */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** Value of the input */
  value: PropTypes.string
};

CheckboxField.defaultProps = {
  children: null,
  className: null,
  color: null,
  helpText: null,
  isChecked: false,
  isDisabled: false,
  labelComponent: null,
  labelName: null,
  labelSize: null,
  isHorizontal: false,
  name: null,
  onChange: null,
  value: undefined
};

export default CheckboxField;
