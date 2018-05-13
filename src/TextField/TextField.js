import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Field from '../_common/Field';

const TextField = ({ children, className, label, onBlur, onChange, onFocus, placeholder, value, ...props }) => {
  return (
    <Field label={label}>
      <input
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
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

TextField.defaultProps = {
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
