import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import Field from '../Field/Field';
import FieldBody from '../Field/FieldBody';
import FieldControl from '../Field/FieldControl';
import FieldLabel from '../Field/FieldLabel';

class CheckboxField extends React.Component {
  state = { isChecked: this.props.isChecked };

  componentDidUpdate = prevProps => {
    const { isChecked } = this.props;
    const { isChecked: prevIsChecked } = prevProps;
    if (isChecked !== prevIsChecked) {
      this.setState({ isChecked });
    }
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
      inputProps,
      isChecked: _,
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
      <Field isHorizontal={isHorizontal} {...props}>
        {(labelName || labelComponent) && (
          <FieldLabel isHorizontal={isHorizontal} size={labelSize}>
            {labelName || labelComponent}
          </FieldLabel>
        )}
        <FieldBody>
          <Field color={color} helpText={helpText}>
            <FieldControl>
              <label className={classNames('checkbox', { [className]: Boolean(className) })} disabled={isDisabled}>
                <input
                  aria-label={labelName}
                  disabled={isDisabled}
                  name={name}
                  onChange={() => this.handleChange(!isChecked)}
                  type="checkbox"
                  {...inputProps}
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
  inputProps: PropTypes.object,
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
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

CheckboxField.defaultProps = {
  children: null,
  className: null,
  color: null,
  helpText: null,
  inputProps: {},
  isChecked: false,
  isDisabled: false,
  labelComponent: null,
  labelName: null,
  labelSize: null,
  isHorizontal: false,
  name: null,
  onChange: null
};

export default CheckboxField;
