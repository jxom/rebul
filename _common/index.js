(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames'], factory) :
	(factory((global['_common/index'] = {}),global.React,global.PropTypes,global.classNames));
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

exports.Field = Field;
exports.FieldBody = FieldBody;
exports.FieldControl = FieldControl;
exports.FieldLabel = FieldLabel;
exports.HelpText = HelpText;

Object.defineProperty(exports, '__esModule', { value: true });

})));
