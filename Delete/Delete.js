(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Delete/Delete'] = factory(global.React,global.PropTypes,global.classNames));
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

var Delete = function Delete(_ref) {
  var className = _ref.className,
      Element = _ref.element,
      size$$1 = _ref.size,
      props = objectWithoutProperties(_ref, ['className', 'element', 'size']);
  return React.createElement(Element, _extends({ className: classNames('delete', size$$1 ? 'is-' + size$$1 : '', className || '') }, props));
};

Delete.propTypes = {
  className: PropTypes.string,
  /** Custom wrapper element */
  element: PropTypes.string,
  /** Size of delete button. Available values: `small`, `medium`, `large` */
  size: size
};

Delete.defaultProps = {
  className: null,
  element: 'button',
  size: null
};

Delete.__docgenInfo = {
  'description': '',
  'props': {
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
    'element': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Custom wrapper element',
      'defaultValue': {
        'value': '\'button\'',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of delete button. Available values: `small`, `medium`, `large`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

return Delete;

})));
