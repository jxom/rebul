(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Tag/Tags'] = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

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

var Tags = function Tags(_ref) {
  var children = _ref.children,
      className = _ref.className,
      hasAddons = _ref.hasAddons,
      props = objectWithoutProperties(_ref, ['children', 'className', 'hasAddons']);

  return React.createElement(
    'div',
    _extends({ className: classNames('tags', hasAddons ? 'has-addons' : '', className || '') }, props),
    children
  );
};

Tags.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasAddons: PropTypes.boolean
};

Tags.defaultProps = {
  className: null,
  hasAddons: false
};

Tags.__docgenInfo = {
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
    'hasAddons': {
      'type': {
        'name': 'custom',
        'raw': 'PropTypes.boolean'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
};

return Tags;

})));
