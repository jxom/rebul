(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames'), require('styled-components'), require('styled-system')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames', 'styled-components', 'styled-system'], factory) :
	(factory((global['Tag/index'] = {}),global.React,global.PropTypes,global.classNames,global.styled,global.styledSystem));
}(this, (function (exports,React,PropTypes,classNames,styled,styledSystem) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

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











var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
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

var _templateObject = taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

var DeleteWrapper = styled.span(_templateObject, styledSystem.space);

var getDeleteWrapperMarginLeft = function getDeleteWrapperMarginLeft(_ref) {
  var children = _ref.children,
      size$$1 = _ref.size;

  if (children) {
    return size$$1 === 'medium' || size$$1 === 'large' ? 2 : 1;
  }
  return 0;
};

var Tag = function Tag(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      color$$1 = _ref2.color,
      isRounded = _ref2.isRounded,
      onClickDelete = _ref2.onClickDelete,
      size$$1 = _ref2.size,
      props = objectWithoutProperties(_ref2, ['children', 'className', 'color', 'isRounded', 'onClickDelete', 'size']);

  return React.createElement(
    'span',
    _extends({
      className: 'tag ' + classNames(color$$1 ? 'is-' + color$$1 : '', size$$1 ? 'is-' + size$$1 : '', isRounded ? 'is-rounded' : '', className || '')
    }, props),
    children,
    onClickDelete && React.createElement(
      DeleteWrapper,
      { ml: getDeleteWrapperMarginLeft({ children: children, size: size$$1 }) },
      React.createElement(Delete, { onClick: onClickDelete, size: size$$1 })
    )
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Tag color. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: color,
  /** Is tag round? */
  isRounded: PropTypes.bool,
  /** Function to invoke when the delete button is pressed. Delete button is visible when `onClickDelete` is populated. */
  onClickDelete: PropTypes.func,
  /** Size of tag. Available values: `medium`, `large` */
  size: size
};

Tag.defaultProps = {
  children: null,
  className: null,
  color: null,
  isRounded: false,
  onClickDelete: null,
  size: 'small'
};

Tag.__docgenInfo = {
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
      'description': 'Tag color. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isRounded': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is tag round?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'onClickDelete': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke when the delete button is pressed. Delete button is visible when `onClickDelete` is populated.',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of tag. Available values: `medium`, `large`',
      'defaultValue': {
        'value': '\'small\'',
        'computed': false
      }
    }
  }
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

exports.Tag = Tag;
exports.Tags = Tags;
exports['default'] = Tag;

Object.defineProperty(exports, '__esModule', { value: true });

})));
