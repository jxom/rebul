(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Title/Title'] = factory(global.React,global.PropTypes,global.classNames));
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

var Title = function Title(_ref) {
  var children = _ref.children,
      className = _ref.className,
      element = _ref.element,
      isSpaced = _ref.isSpaced,
      isSubTitle = _ref.isSubTitle,
      size = _ref.size,
      props = objectWithoutProperties(_ref, ['children', 'className', 'element', 'isSpaced', 'isSubTitle', 'size']);

  var Element = element || 'h' + (size || '1');
  return React.createElement(
    Element,
    _extends({
      className: classNames(isSubTitle ? 'subtitle' : 'title', size ? 'is-' + size : '', isSpaced ? 'is-spaced' : '', className || '')
    }, props),
    children
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Custom element to use for title. Example: `'p'` */
  element: PropTypes.string,
  /** Does the title have padding? */
  isSpaced: PropTypes.bool,
  /** Is the title a subtitle? */
  isSubTitle: PropTypes.bool,
  /** Size of title. Available values: `"1"`, `"2"`, `"3"`, `"4"`, `"5"`, `"6"` */
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
};

Title.defaultProps = {
  className: null,
  element: null,
  isSpaced: false,
  isSubTitle: false,
  size: null
};

Title.__docgenInfo = {
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
    'element': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Custom element to use for title. Example: `\'p\'`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isSpaced': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Does the title have padding?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isSubTitle': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is the title a subtitle?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '\'1\'',
          'computed': false
        }, {
          'value': '\'2\'',
          'computed': false
        }, {
          'value': '\'3\'',
          'computed': false
        }, {
          'value': '\'4\'',
          'computed': false
        }, {
          'value': '\'5\'',
          'computed': false
        }, {
          'value': '\'6\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Size of title. Available values: `"1"`, `"2"`, `"3"`, `"4"`, `"5"`, `"6"`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

return Title;

})));
