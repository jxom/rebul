import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Field from '../_common/Field';

const TextField = ({
  autoComplete,
  autoFocus,
  children,
  className,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  value,
  ...props
}) => {
  return (
    <Field label={label}>
      <input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={`input ${classNames(className || '')}`}
        onBlur={onBlur}
        onChange={e => onChange(e.target.value, e)}
        onFocus={onBlur}
        placeholder={placeholder}
        value={value}
        {...props}
      />
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
  /** The label that appears above the input */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** Placeholder of the input */
  placeholder: PropTypes.string,
  /** Value of the input */
  value: PropTypes.string
};

TextField.defaultProps = {
  autoComplete: null,
  autoFocus: false,
  children: null,
  className: null,
  label: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  value: null
};

export default TextField;
