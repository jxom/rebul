(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Button/Button'] = factory(global.React,global.PropTypes,global.classNames));
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

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      element = _ref.element,
      isInverted = _ref.isInverted,
      isLoading = _ref.isLoading,
      isOutlined = _ref.isOutlined,
      isRounded = _ref.isRounded,
      isSelected = _ref.isSelected,
      isStatic = _ref.isStatic,
      size$$1 = _ref.size,
      state$$1 = _ref.state,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'element', 'isInverted', 'isLoading', 'isOutlined', 'isRounded', 'isSelected', 'isStatic', 'size', 'state']);

  var Element = element;
  return React.createElement(
    Element,
    _extends({
      className: 'button ' + classNames(color$$1 ? 'is-' + color$$1 : '', size$$1 ? 'is-' + size$$1 : '', isInverted ? 'is-inverted' : '', isLoading ? 'is-loading' : '', isOutlined ? 'is-outlined' : '', isRounded ? 'is-rounded' : '', isSelected ? 'is-selected' : '', isStatic ? 'is-static' : '', state$$1 ? 'is-' + state$$1 : '', className || '')
    }, props),
    children
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Button color. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`
   */
  color: color,
  /** Button element type */
  element: PropTypes.string,
  /** Is button color inverted? */
  isInverted: PropTypes.bool,
  /** Is button loading? */
  isLoading: PropTypes.bool,
  /** Is button outlined? */
  isOutlined: PropTypes.bool,
  /** Is button round? */
  isRounded: PropTypes.bool,
  /** Is button selected? */
  isSelected: PropTypes.bool,
  /** Is button static? */
  isStatic: PropTypes.bool,
  /** Size of button. Available values: `small`, `medium`, `large` */
  size: size,
  /** State of button. Available values: `hovered`, `active`, `focused` */
  state: state
};

Button.defaultProps = {
  children: null,
  className: null,
  color: null,
  element: 'button',
  isInverted: false,
  isLoading: false,
  isOutlined: false,
  isRounded: false,
  isSelected: false,
  isStatic: false,
  size: null,
  state: null
};

Button.__docgenInfo = {
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
      'description': 'Button color. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`',
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
      'description': 'Button element type',
      'defaultValue': {
        'value': '\'button\'',
        'computed': false
      }
    },
    'isInverted': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is button color inverted?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isLoading': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is button loading?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isOutlined': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is button outlined?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isRounded': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is button round?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isSelected': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is button selected?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isStatic': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is button static?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of button. Available values: `small`, `medium`, `large`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'state': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.state'
      },
      'required': false,
      'description': 'State of button. Available values: `hovered`, `active`, `focused`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

return Button;

})));
