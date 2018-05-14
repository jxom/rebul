(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Icon/Icon'] = factory(global.React,global.PropTypes,global.classNames));
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

var Icon = function Icon(_ref) {
  var className = _ref.className,
      color$$1 = _ref.color,
      iconClass = _ref.iconClass,
      size$$1 = _ref.size,
      props = objectWithoutProperties(_ref, ['className', 'color', 'iconClass', 'size']);
  return React.createElement(
    'span',
    _extends({
      className: 'icon ' + classNames(size$$1 ? 'is-' + size$$1 : '', color$$1 ? 'has-text-' + color$$1 : '', className || '')
    }, props),
    React.createElement('i', { className: iconClass })
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  /** Color of the icon. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: color,
  /** Icon class name. Example (Font Awesome 5): `fa fa-home` */
  iconClass: PropTypes.string.isRequired,
  /** Size of the icon. Available values: `small`, `medium`, `large` */
  size: size
};

Icon.defaultProps = {
  className: null,
  color: null,
  size: null
};

Icon.__docgenInfo = {
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
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
      },
      'required': false,
      'description': 'Color of the icon. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'iconClass': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Icon class name. Example (Font Awesome 5): `fa fa-home`'
    },
    'size': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the icon. Available values: `small`, `medium`, `large`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

return Icon;

})));
