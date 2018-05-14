(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames'), require('react-autosize-textarea')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames', 'react-autosize-textarea'], factory) :
	(global['TextAreaField/TextAreaField'] = factory(global.React,global.PropTypes,global.classNames,global.TextareaAutosize));
}(this, (function (React,PropTypes,classNames,TextareaAutosize) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
TextareaAutosize = TextareaAutosize && TextareaAutosize.hasOwnProperty('default') ? TextareaAutosize['default'] : TextareaAutosize;

var color = PropTypes.oneOf(['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']);
var size = PropTypes.oneOf(['small', 'medium', 'large']);
var state = PropTypes.oneOf(['hovered', 'active', 'focused']);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var Label = function Label(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size$$1 = _ref.size;
  return React.createElement(
    'label',
    { className: 'label ' + classNames(size$$1 ? 'is-' + size$$1 : '', className || '') },
    children
  );
};

var FieldLabel = function FieldLabel(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      isHorizontal = _ref2.isHorizontal,
      size$$1 = _ref2.size,
      props = objectWithoutProperties(_ref2, ['children', 'className', 'isHorizontal', 'size']);
  return isHorizontal ? React.createElement(
    'div',
    { className: classNames(isHorizontal ? 'field-label is-normal' : '') },
    React.createElement(
      Label,
      { className: className, size: size$$1 },
      children
    )
  ) : React.createElement(
    Label,
    { className: className, size: size$$1 },
    children
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: size
};

Label.defaultProps = {
  className: null,
  size: null
};

FieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isHorizontal: PropTypes.bool,
  size: size
};

FieldLabel.defaultProps = {
  className: null,
  isHorizontal: false,
  size: null
};

var HelpText = function HelpText(_ref) {
  var color$$1 = _ref.color,
      children = _ref.children;
  return React.createElement(
    'p',
    { className: 'help ' + classNames(color$$1 ? 'is-' + color$$1 : '') },
    children
  );
};

HelpText.propTypes = {
  children: PropTypes.node.isRequired,
  color: color
};

HelpText.defaultProps = {
  color: null
};

HelpText.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

var Field = function Field(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      hasAddons = _ref.hasAddons,
      helpText = _ref.helpText,
      isHorizontal = _ref.isHorizontal,
      label = _ref.label,
      labelSize = _ref.labelSize,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'hasAddons', 'helpText', 'isHorizontal', 'label', 'labelSize']);
  return React.createElement(
    'div',
    _extends({
      className: 'field ' + classNames(isHorizontal ? 'is-horizontal' : '', hasAddons ? 'has-addons' : '', className || '')
    }, props),
    label && React.createElement(
      FieldLabel,
      { isHorizontal: isHorizontal, size: labelSize },
      label
    ),
    children,
    helpText && React.createElement(
      HelpText,
      { color: color$$1 },
      helpText
    )
  );
};

Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: color,
  hasAddons: PropTypes.bool,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isHorizontal: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelSize: size
};

Field.defaultProps = {
  className: null,
  color: null,
  hasAddons: false,
  helpText: null,
  isHorizontal: false,
  label: null,
  labelSize: null
};

Field.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'hasAddons': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'helpText': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'string'
        }, {
          'name': 'element'
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isHorizontal': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'label': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'string'
        }, {
          'name': 'element'
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

var FieldBody = function FieldBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);
  return React.createElement(
    'div',
    { className: 'field-body ' + classNames(className || '') },
    children
  );
};

FieldBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FieldBody.defaultProps = {
  className: null
};

FieldBody.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

var FieldControl = function FieldControl(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      isExpanded = _ref.isExpanded,
      isLoading = _ref.isLoading,
      leftIconName = _ref.leftIconName,
      rightIconName = _ref.rightIconName,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'isExpanded', 'isLoading', 'leftIconName', 'rightIconName']);
  return React.createElement(
    'div',
    {
      className: 'control ' + classNames(isExpanded ? 'is-expanded' : '', isLoading ? 'is-loading' : '', leftIconName ? 'has-icons-left' : '', rightIconName ? 'has-icons-right' : '', className || '')
    },
    children,
    leftIconName && React.createElement(
      'span',
      { className: 'icon is-small is-left' },
      React.createElement('i', { className: leftIconName })
    ),
    rightIconName && React.createElement(
      'span',
      { className: 'icon is-small is-right' },
      React.createElement('i', { className: rightIconName })
    )
  );
};

FieldControl.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: color,
  isExpanded: PropTypes.bool,
  isLoading: PropTypes.bool,
  leftIconName: PropTypes.string,
  rightIconName: PropTypes.string
};

FieldControl.defaultProps = {
  className: null,
  color: null,
  isExpanded: false,
  isLoading: false,
  leftIconName: null,
  rightIconName: null
};

FieldControl.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isExpanded': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isLoading': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'leftIconName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'rightIconName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

var TextAreaField = function TextAreaField(_ref) {
  var autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      helpText = _ref.helpText,
      inputSize = _ref.inputSize,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      isLoading = _ref.isLoading,
      isHorizontal = _ref.isHorizontal,
      isReadOnly = _ref.isReadOnly,
      labelName = _ref.labelName,
      labelSize = _ref.labelSize,
      onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      rows = _ref.rows,
      state$$1 = _ref.state,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['autoComplete', 'autoFocus', 'children', 'className', 'color', 'helpText', 'inputSize', 'id', 'isDisabled', 'isLoading', 'isHorizontal', 'isReadOnly', 'labelName', 'labelSize', 'onBlur', 'onChange', 'onFocus', 'placeholder', 'rows', 'state', 'value']);

  return React.createElement(
    Field,
    { id: id, isHorizontal: isHorizontal, label: labelName, labelSize: labelSize },
    React.createElement(
      FieldBody,
      null,
      React.createElement(
        Field,
        { color: color$$1, helpText: helpText },
        React.createElement(
          FieldControl,
          { color: color$$1, isLoading: isLoading },
          React.createElement(TextareaAutosize, _extends({
            autoComplete: autoComplete,
            autoFocus: autoFocus,
            className: 'textarea ' + classNames(color$$1 ? 'is-' + color$$1 : '', inputSize ? 'is-' + inputSize : '', state$$1 ? 'is-' + state$$1 : '', className || ''),
            disabled: isDisabled,
            onBlur: onBlur,
            onChange: function onChange(e) {
              return _onChange && _onChange(e.target.value, e);
            },
            onFocus: onBlur,
            placeholder: placeholder,
            readOnly: isReadOnly,
            rows: rows,
            value: value
          }, props))
        )
      )
    )
  );
};

TextAreaField.propTypes = {
  /** Set an autocomplete attribute on the field */
  autoComplete: PropTypes.string,
  /** Automatically set focus to the field */
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of input field. */
  color: color,
  /** Displays help text */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: size,
  /** ID for the input field */
  id: PropTypes.string,
  /** Size of the input field */
  inputSize: size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is read only */
  isReadOnly: PropTypes.bool,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** Placeholder of the input */
  placeholder: PropTypes.string,
  /** Minimum number of rows */
  rows: PropTypes.number,
  /** State of field */
  state: state,
  /** Value of the input */
  value: PropTypes.string
};

TextAreaField.defaultProps = {
  autoComplete: null,
  autoFocus: false,
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelName: null,
  labelSize: null,
  id: null,
  inputSize: null,
  isDisabled: false,
  isLoading: false,
  isHorizontal: false,
  isReadOnly: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  rows: 3,
  state: null,
  value: undefined
};

TextAreaField.__docgenInfo = {
  'description': '',
  'props': {
    'autoComplete': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Set an autocomplete attribute on the field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'autoFocus': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Automatically set focus to the field',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'children': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
      },
      'required': false,
      'description': 'Color of input field.',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'helpText': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'string'
        }, {
          'name': 'element'
        }]
      },
      'required': false,
      'description': 'Displays help text',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The label that appears above the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the label field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'id': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'ID for the input field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'inputSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the input field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isDisabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Disable the input field',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isLoading': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is loading',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isHorizontal': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is horizontal',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isReadOnly': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is read only',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'onBlur': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on blur',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onChange': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on change',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onFocus': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on focus',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'placeholder': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Placeholder of the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'rows': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Minimum number of rows',
      'defaultValue': {
        'value': '3',
        'computed': false
      }
    },
    'state': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.state'
      },
      'required': false,
      'description': 'State of field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'value': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Value of the input',
      'defaultValue': {
        'value': 'undefined',
        'computed': true
      }
    }
  }
};

return TextAreaField;

})));
