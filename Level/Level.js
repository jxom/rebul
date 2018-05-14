(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Level/Level'] = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var LevelLeft = function (_React$Component) {
  inherits(LevelLeft, _React$Component);

  function LevelLeft() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, LevelLeft);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = LevelLeft.__proto__ || Object.getPrototypeOf(LevelLeft)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className;

      return React.createElement(
        'div',
        { className: classNames('level-left', className || '') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return LevelLeft;
}(React.Component);

LevelLeft.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

LevelLeft.defaultProps = {
  className: null
};

LevelLeft.__docgenInfo = {
  'description': '',
  'displayName': 'LevelLeft',
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

var LevelRight = function (_React$Component) {
  inherits(LevelRight, _React$Component);

  function LevelRight() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, LevelRight);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = LevelRight.__proto__ || Object.getPrototypeOf(LevelRight)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className;

      return React.createElement(
        'div',
        { className: classNames('level-right', className || '') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return LevelRight;
}(React.Component);

LevelRight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

LevelRight.defaultProps = {
  className: null
};

LevelRight.__docgenInfo = {
  'description': '',
  'displayName': 'LevelRight',
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

var LevelItem = function (_React$Component) {
  inherits(LevelItem, _React$Component);

  function LevelItem() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, LevelItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = LevelItem.__proto__ || Object.getPrototypeOf(LevelItem)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className,
          element = _this$props.element;

      var Element = element || 'div';
      return React.createElement(
        Element,
        { className: classNames('level-item', className || '') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return LevelItem;
}(React.Component);

LevelItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.string
};

LevelItem.defaultProps = {
  className: null,
  element: null
};

LevelItem.__docgenInfo = {
  'description': '',
  'displayName': 'LevelItem',
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
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

var Level = function (_React$Component) {
  inherits(Level, _React$Component);

  function Level() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Level);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Level.__proto__ || Object.getPrototypeOf(Level)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className,
          isMobile = _this$props.isMobile;

      return React.createElement(
        'div',
        { className: classNames('level', isMobile ? 'is-mobile' : '', className || '') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return Level;
}(React.Component);

Level.Left = LevelLeft;
Level.Right = LevelRight;
Level.Item = LevelItem;


Level.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Is level horizontal on mobile? */
  isMobile: PropTypes.bool
};

Level.defaultProps = {
  className: null,
  isMobile: false
};

Level.__docgenInfo = {
  'description': '',
  'displayName': 'Level',
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
    'isMobile': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is level horizontal on mobile?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
};

return Level;

})));
