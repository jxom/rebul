(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Media/MediaImage'] = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

var MediaImage = function (_React$Component) {
  inherits(MediaImage, _React$Component);

  function MediaImage() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MediaImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MediaImage.__proto__ || Object.getPrototypeOf(MediaImage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          alt = _this$props.alt,
          className = _this$props.className,
          size = _this$props.size,
          src = _this$props.src;

      return React.createElement(Image, { alt: alt, className: className, size: size, src: src });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return MediaImage;
}(React.Component);

MediaImage.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string.isRequired
};

MediaImage.defaultProps = {
  className: null,
  size: null
};

MediaImage.__docgenInfo = {
  'description': '',
  'displayName': 'MediaImage',
  'props': {
    'alt': {
      'type': {
        'name': 'string'
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
    'size': {
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
    'src': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': ''
    }
  }
};

return MediaImage;

})));
