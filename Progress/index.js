(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames'], factory) :
	(factory((global['Progress/index'] = {}),global.React,global.PropTypes,global.classNames));
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

var Progress = function Progress(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      maxValue = _ref.maxValue,
      size$$1 = _ref.size,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'maxValue', 'size', 'value']);

  return React.createElement(
    'progress',
    _extends({
      className: 'progress ' + classNames(color$$1 ? 'is-' + color$$1 : '', size$$1 ? 'is-' + size$$1 : '', className || ''),
      max: maxValue,
      value: value
    }, props),
    children
  );
};

Progress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: color,
  /** Max value */
  maxValue: PropTypes.string,
  /** Size of progress bar. Available values: `small`, `medium`, `large` */
  size: size,
  /** Value of progress bar */
  value: PropTypes.string.isRequired
};

Progress.defaultProps = {
  children: null,
  className: null,
  color: null,
  maxValue: '100',
  size: null
};

Progress.__docgenInfo = {
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
      'description': 'Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'maxValue': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Max value',
      'defaultValue': {
        'value': '\'100\'',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of progress bar. Available values: `small`, `medium`, `large`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'value': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Value of progress bar'
    }
  }
};

exports.Progress = Progress;
exports['default'] = Progress;

Object.defineProperty(exports, '__esModule', { value: true });

})));
