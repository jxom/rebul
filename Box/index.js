(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
	(factory((global['Box/index'] = {}),global.React,global.PropTypes));
}(this, (function (exports,React,PropTypes) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

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

var Box = function Box(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);

  return React.createElement(
    'div',
    _extends({ className: 'box ' + (className || '') }, props),
    children
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Box.defaultProps = {
  className: null
};

Box.__docgenInfo = {
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

exports.Box = Box;
exports['default'] = Box;

Object.defineProperty(exports, '__esModule', { value: true });

})));
