import React from 'react';
import PropTypes from 'prop-types';
import * as sharedPropTypes from '../_prop-types';

import Field from '../Field/Field';
import FieldBody from '../Field/FieldBody';
import FieldControl from '../Field/FieldControl';
import FieldLabel from '../Field/FieldLabel';

class RadioField extends React.Component {
  state = { value: this.props.value };

  componentDidUpdate = prevProps => {
    const { value } = this.props;
    const { value: prevValue } = prevProps;
    if (value !== prevValue) {
      this.setState({ value });
    }
  };

  handleChange = value => {
    const { onChange, value: propValue } = this.props;
    if (propValue) return;
    this.setState({ value });
    onChange && onChange(value);
  };

  render = () => {
    const {
      children,
      className,
      color,
      helpText,
      isHorizontal,
      labelComponent,
      labelName,
      labelSize,
      name,
      onChange,
      options,
      ...props
    } = this.props;
    const { value } = this.state;
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
              {options.map((option, i) => (
                /* eslint-disable react/no-array-index-key */
                <label key={i} className="radio" disabled={option.isDisabled}>
                  <input
                    aria-label={labelName}
                    checked={option.value === value}
                    className={className}
                    disabled={option.isDisabled}
                    onChange={e => this.handleChange(option.value)}
                    name={name}
                    type="radio"
                    value={option.value}
                    {...props}
                  />{' '}
                  {option.label}
                </label>
              ))}
            </FieldControl>
          </Field>
        </FieldBody>
      </Field>
    );
  };
}

RadioField.propTypes = {
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
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Name of the input field */
  name: PropTypes.string,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** List of selectable options */
  options: PropTypes.array,
  /** Value of the input */
  value: PropTypes.string
};

RadioField.defaultProps = {
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelComponent: null,
  labelName: null,
  labelSize: null,
  isHorizontal: false,
  name: null,
  onChange: null,
  options: [],
  value: undefined
};

export default RadioField;
