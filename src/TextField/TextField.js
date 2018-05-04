import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  autoComplete,
  autoFocus,
  children,
  className,
  disabled,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readOnly,
  step,
  type,
  value,
  ...props
}) => {
  return (
    <div className="field" {...props}>
      {label && <label className="label">{label}</label>}
      <div className="control">
        <input
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className="input"
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          step={step}
          type={type}
          value={value}
        />
      </div>
    </div>
  );
};

TextField.propTypes = {
  autoComplete: PropTypes.boolean,
  autoFocus: PropTypes.boolean,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.boolean,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.boolean,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string
};

TextField.defaultProps = {
  autoComplete: false,
  autoFocus: false,
  children: null,
  className: null,
  disabled: false,
  label: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  readOnly: false,
  step: null,
  type: 'text',
  value: null
};

export default TextField;
