import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import Field from '../_common/Field';
import FieldBody from '../_common/FieldBody';
import FieldControl from '../_common/FieldControl';

const RadioField = ({
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
  value,
  ...props
}) => {
  return (
    <Field isHorizontal={isHorizontal} label={labelComponent || labelName} labelSize={labelSize}>
      <FieldBody>
        <Field color={color} helpText={helpText}>
          <FieldControl>
            <label className="radio">
              <input type="radio" name="rsvp" /> Going
            </label>
          </FieldControl>
        </Field>
      </FieldBody>
    </Field>
  );
};

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
  value: undefined
};

export default RadioField;
