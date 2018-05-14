(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Hero/Hero'] = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

var color = PropTypes.oneOf(['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']);
var size = PropTypes.oneOf(['small', 'medium', 'large']);
var state = PropTypes.oneOf(['hovered', 'active', 'focused']);

var HeroHead = function HeroHead(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement(
    'div',
    { className: classNames('hero-body', className || '') },
    children
  );
};

HeroHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HeroHead.defaultProps = {
  className: null
};

HeroHead.__docgenInfo = {
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

var HeroBody = function HeroBody(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement(
    'div',
    { className: classNames('hero-body', className || '') },
    children
  );
};

HeroBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HeroBody.defaultProps = {
  className: null
};

HeroBody.__docgenInfo = {
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

var HeroFoot = function HeroFoot(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement(
    'div',
    { className: classNames('hero-body', className || '') },
    children
  );
};

HeroFoot.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

HeroFoot.defaultProps = {
  className: null
};

HeroFoot.__docgenInfo = {
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

var HERO_SIZES = ['medium', 'large', 'fullheight'];

var Hero = function (_React$Component) {
  inherits(Hero, _React$Component);

  function Hero() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Hero);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Hero.__proto__ || Object.getPrototypeOf(Hero)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className,
          color$$1 = _this$props.color,
          isBold = _this$props.isBold,
          size$$1 = _this$props.size;

      return React.createElement(
        'div',
        {
          className: classNames('hero', size$$1 ? 'is-' + size$$1 : '', color$$1 ? 'is-' + color$$1 : '', isBold ? 'is-bold' : '', className || '')
        },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return Hero;
}(React.Component);

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Foot = HeroFoot;


Hero.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Adds a background color to hero. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: color,
  /** If true, adds a gradient to hero */
  isBold: PropTypes.bool,
  /** Size of hero. Available values: `medium`, `large`, `fullheight` */
  size: PropTypes.oneOf(HERO_SIZES)
};

Hero.defaultProps = {
  className: null,
  color: null,
  isBold: false,
  size: null
};

Hero.__docgenInfo = {
  'description': '',
  'displayName': 'Hero',
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
      'description': 'Adds a background color to hero. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isBold': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'If true, adds a gradient to hero',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '\'medium\'',
          'computed': false
        }, {
          'value': '\'large\'',
          'computed': false
        }, {
          'value': '\'fullheight\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Size of hero. Available values: `medium`, `large`, `fullheight`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

return Hero;

})));
