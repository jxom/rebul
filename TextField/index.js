(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames'], factory) :
	(factory((global['TextField/index'] = {}),global.React,global.PropTypes,global.classNames));
}(this, (function (exports,React,PropTypes,classNames) { 'use strict';

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

var TextField = function TextField(_ref) {
  var autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      helpText = _ref.helpText,
      inputSize = _ref.inputSize,
      isDisabled = _ref.isDisabled,
      isExpanded = _ref.isExpanded,
      isLoading = _ref.isLoading,
      isHorizontal = _ref.isHorizontal,
      isReadOnly = _ref.isReadOnly,
      isRounded = _ref.isRounded,
      labelComponent = _ref.labelComponent,
      labelName = _ref.labelName,
      labelSize = _ref.labelSize,
      leftAddonComponent = _ref.leftAddonComponent,
      leftIconName = _ref.leftIconName,
      max = _ref.max,
      maxLength = _ref.maxLength,
      min = _ref.min,
      minLength = _ref.minLength,
      name = _ref.name,
      onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      pattern = _ref.pattern,
      placeholder = _ref.placeholder,
      rightAddonComponent = _ref.rightAddonComponent,
      rightIconName = _ref.rightIconName,
      spellCheck = _ref.spellCheck,
      state$$1 = _ref.state,
      step = _ref.step,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['autoComplete', 'autoFocus', 'children', 'className', 'color', 'helpText', 'inputSize', 'isDisabled', 'isExpanded', 'isLoading', 'isHorizontal', 'isReadOnly', 'isRounded', 'labelComponent', 'labelName', 'labelSize', 'leftAddonComponent', 'leftIconName', 'max', 'maxLength', 'min', 'minLength', 'name', 'onBlur', 'onChange', 'onFocus', 'pattern', 'placeholder', 'rightAddonComponent', 'rightIconName', 'spellCheck', 'state', 'step', 'value']);

  return React.createElement(
    Field,
    { isHorizontal: isHorizontal, label: labelComponent || labelName, labelSize: labelSize },
    React.createElement(
      FieldBody,
      null,
      React.createElement(
        Field,
        { color: color$$1, hasAddons: Boolean(leftAddonComponent || rightAddonComponent), helpText: helpText },
        leftAddonComponent && React.createElement(
          FieldControl,
          null,
          leftAddonComponent
        ),
        React.createElement(
          FieldControl,
          {
            color: color$$1,
            isExpanded: isExpanded,
            isLoading: isLoading,
            leftIconName: leftIconName,
            rightIconName: rightIconName
          },
          React.createElement('input', _extends({
            'aria-label': labelName,
            autoComplete: autoComplete,
            autoFocus: autoFocus,
            className: 'input ' + classNames(color$$1 ? 'is-' + color$$1 : '', inputSize ? 'is-' + inputSize : '', isRounded ? 'is-rounded' : '', state$$1 ? 'is-' + state$$1 : '', className || ''),
            disabled: isDisabled,
            max: max,
            maxLength: maxLength,
            min: min,
            minLength: minLength,
            name: name,
            onBlur: onBlur,
            onChange: function onChange(e) {
              return _onChange && _onChange(e.target.value, e);
            },
            onFocus: onBlur,
            pattern: pattern,
            placeholder: placeholder,
            readOnly: isReadOnly,
            spellCheck: spellCheck,
            step: step,
            value: value
          }, props))
        ),
        rightAddonComponent && React.createElement(
          FieldControl,
          null,
          rightAddonComponent
        )
      )
    )
  );
};

TextField.propTypes = {
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
  labelComponent: PropTypes.element,
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: size,
  /** Addon component to display on the left of the field */
  leftAddonComponent: PropTypes.element,
  /** Name of left field icon */
  leftIconName: PropTypes.string,
  /** Size of the input field */
  inputSize: size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Is input field expanded when addon component exists */
  isExpanded: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is read only */
  isReadOnly: PropTypes.bool,
  /** Input field is rounded */
  isRounded: PropTypes.bool,
  /** Max value for numeric field */
  max: PropTypes.number,
  /** Max length for a alphanumeric field */
  maxLength: PropTypes.number,
  /** Min value for numeric field */
  min: PropTypes.number,
  /** Min length for a alphanumeric field */
  minLength: PropTypes.number,
  /** Name of the input field */
  name: PropTypes.string,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** Regex to check value against */
  pattern: PropTypes.string,
  /** Placeholder of the input */
  placeholder: PropTypes.string,
  /** Addon component to display on the right of the field */
  rightAddonComponent: PropTypes.element,
  /** Name of right field icon */
  rightIconName: PropTypes.string,
  /** Enable spell check for input field */
  spellCheck: PropTypes.bool,
  /** State of field */
  state: state,
  /** Increment/decrement step value for numeric field */
  step: PropTypes.number,
  /** Type of input */
  type: PropTypes.string,
  /** Value of the input */
  value: PropTypes.string
};

TextField.defaultProps = {
  autoComplete: null,
  autoFocus: false,
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelComponent: null,
  labelName: null,
  labelSize: null,
  leftAddonComponent: null,
  leftIconName: null,
  inputSize: null,
  isDisabled: false,
  isExpanded: false,
  isLoading: false,
  isHorizontal: false,
  isReadOnly: false,
  isRounded: false,
  max: null,
  maxLength: null,
  min: null,
  minLength: null,
  name: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  pattern: null,
  placeholder: null,
  rightAddonComponent: null,
  rightIconName: null,
  spellCheck: false,
  state: null,
  step: null,
  type: 'text',
  value: undefined
};

TextField.__docgenInfo = {
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
    'labelComponent': {
      'type': {
        'name': 'element'
      },
      'required': false,
      'description': 'The label that appears above the input',
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
    'leftAddonComponent': {
      'type': {
        'name': 'element'
      },
      'required': false,
      'description': 'Addon component to display on the left of the field',
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
    'isExpanded': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is input field expanded when addon component exists',
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
    'max': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Max value for numeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'maxLength': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Max length for a alphanumeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'min': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Min value for numeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'minLength': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Min length for a alphanumeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'name': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Name of the input field',
      'defaultValue': {
        'value': 'null',
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
    'pattern': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Regex to check value against',
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
    'rightAddonComponent': {
      'type': {
        'name': 'element'
      },
      'required': false,
      'description': 'Addon component to display on the right of the field',
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
      'description': 'Name of right field icon',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'spellCheck': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Enable spell check for input field',
      'defaultValue': {
        'value': 'false',
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
    'step': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Increment/decrement step value for numeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'type': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Type of input',
      'defaultValue': {
        'value': '\'text\'',
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

exports.TextField = TextField;
exports['default'] = TextField;

Object.defineProperty(exports, '__esModule', { value: true });

})));
