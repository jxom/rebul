import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

import FieldBody from './FieldBody';
import FieldControl from './FieldControl';
import FieldLabel from './FieldLabel';
import HelpText from './HelpText';

class Field extends React.Component {
  static Body = FieldBody;
  static Control = FieldControl;
  static Label = FieldLabel;
  static Text = HelpText;

  render = () => {
    const { children, className, color, hasAddons, helpText, isHorizontal, ...props } = this.props;
    return (
      <div
        className={`field ${classNames(
          isHorizontal ? 'is-horizontal' : '',
          hasAddons ? 'has-addons' : '',
          className || ''
        )}`}
        {...props}
      >
        {children}
        {helpText && <HelpText color={color}>{helpText}</HelpText>}
      </div>
    );
  };
}

Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: sharedPropTypes.color,
  hasAddons: PropTypes.bool,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isHorizontal: PropTypes.bool
};

Field.defaultProps = {
  className: null,
  color: null,
  hasAddons: false,
  helpText: null,
  isHorizontal: false
};

export default Field;
