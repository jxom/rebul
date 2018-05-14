(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['SelectField/SelectField'] = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

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

var SelectField = function SelectField(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      helpText = _ref.helpText,
      inputSize = _ref.inputSize,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      isHorizontal = _ref.isHorizontal,
      isLoading = _ref.isLoading,
      isMultiSelect = _ref.isMultiSelect,
      isRounded = _ref.isRounded,
      labelName = _ref.labelName,
      labelSize = _ref.labelSize,
      leftIconName = _ref.leftIconName,
      onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      state$$1 = _ref.state,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'helpText', 'inputSize', 'id', 'isDisabled', 'isHorizontal', 'isLoading', 'isMultiSelect', 'isRounded', 'labelName', 'labelSize', 'leftIconName', 'onBlur', 'onChange', 'onFocus', 'options', 'state', 'value']);

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
          { leftIconName: leftIconName },
          React.createElement(
            'div',
            {
              className: 'select ' + classNames(color$$1 ? 'is-' + color$$1 : '', isLoading ? 'is-loading' : '', isMultiSelect ? 'is-multiple' : '', isRounded ? 'is-rounded' : '', inputSize ? 'is-' + inputSize : '', className || ''),
              disabled: isDisabled
            },
            React.createElement(
              'select',
              _extends({
                className: classNames(state$$1 ? 'is-' + state$$1 : ''),
                multiple: isMultiSelect,
                onBlur: onBlur,
                onChange: function onChange(e) {
                  return _onChange && _onChange(e.target.value, e);
                },
                onFocus: onBlur,
                value: value
              }, props),
              options.map(function (option, i) {
                return React.createElement(
                  'option',
                  { key: i, value: option.value },
                  option.label
                );
              })
            )
          )
        )
      )
    )
  );
};

SelectField.propTypes = {
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
  /** Name of left field icon */
  leftIconName: PropTypes.string,
  /** ID for the input field */
  id: PropTypes.string,
  /** Size of the input field */
  inputSize: size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Enable multi-select */
  isMultiSelect: PropTypes.bool,
  /** Input field is rounded */
  isRounded: PropTypes.bool,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Set of options to select from */
  options: PropTypes.array,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** State of field */
  state: state,
  /** Value of the input */
  value: PropTypes.string
};

SelectField.defaultProps = {
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelName: null,
  labelSize: null,
  leftIconName: null,
  id: null,
  inputSize: null,
  isDisabled: false,
  isHorizontal: false,
  isLoading: false,
  isMultiSelect: false,
  isRounded: false,
  onBlur: null,
  onChange: null,
  options: [],
  onFocus: null,
  state: null,
  value: undefined
};

SelectField.__docgenInfo = {
  'description': '',
  'props': {
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
    'leftIconName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Name of left field icon',
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
    'isMultiSelect': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Enable multi-select',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isRounded': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is rounded',
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
    'options': {
      'type': {
        'name': 'array'
      },
      'required': false,
      'description': 'Set of options to select from',
      'defaultValue': {
        'value': '[]',
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

return SelectField;

})));
