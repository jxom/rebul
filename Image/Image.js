(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Image/Image'] = factory(global.React,global.PropTypes,global.classNames));
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

var Image = function Image(_ref) {
  var alt = _ref.alt,
      className = _ref.className,
      size = _ref.size,
      src = _ref.src,
      props = objectWithoutProperties(_ref, ['alt', 'className', 'size', 'src']);
  return React.createElement(
    'figure',
    _extends({ className: classNames('image', size ? 'is-' + size + 'x' + size : '', className || '') }, props),
    React.createElement('img', { src: src, alt: alt })
  );
};

Image.propTypes = {
  /** Image alt text */
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  /** Size of image. Available values: `16`, `24`, `32`, `48`, `64`, `96`, `128` */
  size: PropTypes.oneOf(['16', '24', '32', '48', '64', '96', '128']).isRequired,
  /** Image source URL */
  src: PropTypes.string.isRequired
};

Image.defaultProps = {
  className: null
};

Image.__docgenInfo = {
  'description': '',
  'props': {
    'alt': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Image alt text'
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
    'size': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '\'16\'',
          'computed': false
        }, {
          'value': '\'24\'',
          'computed': false
        }, {
          'value': '\'32\'',
          'computed': false
        }, {
          'value': '\'48\'',
          'computed': false
        }, {
          'value': '\'64\'',
          'computed': false
        }, {
          'value': '\'96\'',
          'computed': false
        }, {
          'value': '\'128\'',
          'computed': false
        }]
      },
      'required': true,
      'description': 'Size of image. Available values: `16`, `24`, `32`, `48`, `64`, `96`, `128`'
    },
    'src': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Image source URL'
    }
  }
};

return Image;

})));
