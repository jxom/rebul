(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames'), require('styled-components'), require('styled-system'), require('react-autosize-textarea')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames', 'styled-components', 'styled-system', 'react-autosize-textarea'], factory) :
	(factory((global.index = {}),global.React,global.PropTypes,global.classNames,global.styled,global.styledSystem,global.TextareaAutosize));
}(this, (function (exports,React,PropTypes,classNames,styled,styledSystem,TextareaAutosize) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;
TextareaAutosize = TextareaAutosize && TextareaAutosize.hasOwnProperty('default') ? TextareaAutosize['default'] : TextareaAutosize;

var color = PropTypes.oneOf(['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']);
var size = PropTypes.oneOf(['small', 'medium', 'large']);
var state = PropTypes.oneOf(['hovered', 'active', 'focused']);

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









var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var Label = function Label(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size$$1 = _ref.size;
  return React.createElement(
    'label',
    { className: 'label ' + classNames(size$$1 ? 'is-' + size$$1 : '', className || '') },
    children
  );
};

var FieldLabel = function FieldLabel(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      isHorizontal = _ref2.isHorizontal,
      size$$1 = _ref2.size,
      props = objectWithoutProperties(_ref2, ['children', 'className', 'isHorizontal', 'size']);
  return isHorizontal ? React.createElement(
    'div',
    { className: classNames(isHorizontal ? 'field-label is-normal' : '') },
    React.createElement(
      Label,
      { className: className, size: size$$1 },
      children
    )
  ) : React.createElement(
    Label,
    { className: className, size: size$$1 },
    children
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: size
};

Label.defaultProps = {
  className: null,
  size: null
};

FieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isHorizontal: PropTypes.bool,
  size: size
};

FieldLabel.defaultProps = {
  className: null,
  isHorizontal: false,
  size: null
};

var HelpText = function HelpText(_ref) {
  var color$$1 = _ref.color,
      children = _ref.children;
  return React.createElement(
    'p',
    { className: 'help ' + classNames(color$$1 ? 'is-' + color$$1 : '') },
    children
  );
};

HelpText.propTypes = {
  children: PropTypes.node.isRequired,
  color: color
};

HelpText.defaultProps = {
  color: null
};

HelpText.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
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

var Field = function Field(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      hasAddons = _ref.hasAddons,
      helpText = _ref.helpText,
      isHorizontal = _ref.isHorizontal,
      label = _ref.label,
      labelSize = _ref.labelSize,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'hasAddons', 'helpText', 'isHorizontal', 'label', 'labelSize']);
  return React.createElement(
    'div',
    _extends({
      className: 'field ' + classNames(isHorizontal ? 'is-horizontal' : '', hasAddons ? 'has-addons' : '', className || '')
    }, props),
    label && React.createElement(
      FieldLabel,
      { isHorizontal: isHorizontal, size: labelSize },
      label
    ),
    children,
    helpText && React.createElement(
      HelpText,
      { color: color$$1 },
      helpText
    )
  );
};

Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: color,
  hasAddons: PropTypes.bool,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isHorizontal: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelSize: size
};

Field.defaultProps = {
  className: null,
  color: null,
  hasAddons: false,
  helpText: null,
  isHorizontal: false,
  label: null,
  labelSize: null
};

Field.__docgenInfo = {
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
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
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
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'helpText': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'string'
        }, {
          'name': 'element'
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isHorizontal': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'label': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'string'
        }, {
          'name': 'element'
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
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

var FieldBody = function FieldBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);
  return React.createElement(
    'div',
    { className: 'field-body ' + classNames(className || '') },
    children
  );
};

FieldBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FieldBody.defaultProps = {
  className: null
};

FieldBody.__docgenInfo = {
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

var FieldControl = function FieldControl(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      isExpanded = _ref.isExpanded,
      isLoading = _ref.isLoading,
      leftIconName = _ref.leftIconName,
      rightIconName = _ref.rightIconName,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'isExpanded', 'isLoading', 'leftIconName', 'rightIconName']);
  return React.createElement(
    'div',
    {
      className: 'control ' + classNames(isExpanded ? 'is-expanded' : '', isLoading ? 'is-loading' : '', leftIconName ? 'has-icons-left' : '', rightIconName ? 'has-icons-right' : '', className || '')
    },
    children,
    leftIconName && React.createElement(
      'span',
      { className: 'icon is-small is-left' },
      React.createElement('i', { className: leftIconName })
    ),
    rightIconName && React.createElement(
      'span',
      { className: 'icon is-small is-right' },
      React.createElement('i', { className: rightIconName })
    )
  );
};

FieldControl.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: color,
  isExpanded: PropTypes.bool,
  isLoading: PropTypes.bool,
  leftIconName: PropTypes.string,
  rightIconName: PropTypes.string
};

FieldControl.defaultProps = {
  className: null,
  color: null,
  isExpanded: false,
  isLoading: false,
  leftIconName: null,
  rightIconName: null
};

FieldControl.__docgenInfo = {
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
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isExpanded': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
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
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'leftIconName': {
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
    'rightIconName': {
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

var Box = function Box(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);

  return React.createElement(
    'div',
    _extends({ className: 'box ' + (className || '') }, props),
    children
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Box.defaultProps = {
  className: null
};

Box.__docgenInfo = {
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

var Buttons = function Buttons(_ref) {
  var children = _ref.children,
      className = _ref.className,
      hasAddons = _ref.hasAddons,
      props = objectWithoutProperties(_ref, ['children', 'className', 'hasAddons']);

  return React.createElement(
    'div',
    _extends({ className: classNames('buttons', hasAddons ? 'has-addons' : '', className || '') }, props),
    children
  );
};

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasAddons: PropTypes.bool
};

Buttons.defaultProps = {
  className: null,
  hasAddons: false
};

Buttons.__docgenInfo = {
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
        'name': 'bool'
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

var COLUMN_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter', 'four-fifths', 'three-fifths', 'two-fifths', 'one-fifth'];

var Column = function Column(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isNarrow = _ref.isNarrow,
      isNarrowMobile = _ref.isNarrowMobile,
      isNarrowTablet = _ref.isNarrowTablet,
      isNarrowDesktop = _ref.isNarrowDesktop,
      offset = _ref.offset,
      offsetMobile = _ref.offsetMobile,
      offsetTablet = _ref.offsetTablet,
      offsetDesktop = _ref.offsetDesktop,
      offsetWidescreen = _ref.offsetWidescreen,
      offsetFullHD = _ref.offsetFullHD,
      size = _ref.size,
      sizeMobile = _ref.sizeMobile,
      sizeTablet = _ref.sizeTablet,
      sizeDesktop = _ref.sizeDesktop,
      sizeWidescreen = _ref.sizeWidescreen,
      sizeFullHD = _ref.sizeFullHD;
  return React.createElement(
    'div',
    {
      className: classNames('column', isNarrow ? 'is-narrow' : '', isNarrowMobile ? 'is-narrow-mobile' : '', isNarrowTablet ? 'is-narrow-tablet' : '', isNarrowDesktop ? 'is-narrow-desktop' : '', offset ? 'is-offset-' + offset : '', offsetMobile ? 'is-offset-' + offsetMobile + '-mobile' : '', offsetTablet ? 'is-offset-' + offsetTablet + '-tablet' : '', offsetDesktop ? 'is-offset-' + offsetDesktop + '-desktop' : '', offsetWidescreen ? 'is-offset-' + offsetWidescreen + '-widescreen' : '', offsetFullHD ? 'is-offset-' + offsetFullHD + '-fullhd' : '', size ? 'is-' + size : '', sizeMobile ? 'is-' + sizeMobile + '-mobile' : '', sizeTablet ? 'is-' + sizeTablet + '-tablet' : '', sizeDesktop ? 'is-' + sizeDesktop + '-desktop' : '', sizeWidescreen ? 'is-' + sizeWidescreen + '-widescreen' : '', sizeFullHD ? 'is-' + sizeFullHD + '-fullhd' : '', className || '')
    },
    children
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isNarrow: PropTypes.bool,
  isNarrowMobile: PropTypes.bool,
  isNarrowTablet: PropTypes.bool,
  isNarrowDesktop: PropTypes.bool,
  /** Default offset size. Available values: View **Column Sizes** */
  offset: PropTypes.oneOf(COLUMN_SIZES),
  /** Mobile offset size (mobile as min breakpoint). Available values: View **Column Sizes** */
  offsetMobile: PropTypes.oneOf(COLUMN_SIZES),
  /** Tablet offset size (tablet as min breakpoint). Available values: View **Column Sizes** */
  offsetTablet: PropTypes.oneOf(COLUMN_SIZES),
  /** Desktop offset size (desktop as min breakpoint). Available values: View **Column Sizes** */
  offsetDesktop: PropTypes.oneOf(COLUMN_SIZES),
  /** Widescreen offset size (widescreen as min breakpoint). Available values: View **Column Sizes** */
  offsetWidescreen: PropTypes.oneOf(COLUMN_SIZES),
  /** Full HD offset size (fullhd as min breakpoint). Available values: View **Column Sizes** */
  offsetFullHD: PropTypes.oneOf(COLUMN_SIZES),
  /** Default size. Available values: View **Column Sizes** */
  size: PropTypes.oneOf(COLUMN_SIZES),
  /** Mobile size (mobile as min breakpoint). Available values: View **Column Sizes** */
  sizeMobile: PropTypes.oneOf(COLUMN_SIZES),
  /** Tablet size (tablet as min breakpoint). Available values: View **Column Sizes** */
  sizeTablet: PropTypes.oneOf(COLUMN_SIZES),
  /** Desktop size (desktop as min breakpoint). Available values: View **Column Sizes** */
  sizeDesktop: PropTypes.oneOf(COLUMN_SIZES),
  /** Widescreen size (widescreen as min breakpoint). Available values: View **Column Sizes** */
  sizeWidescreen: PropTypes.oneOf(COLUMN_SIZES),
  /** Full HD size (fullhd as min breakpoint). Available values: View **Column Sizes** */
  sizeFullHD: PropTypes.oneOf(COLUMN_SIZES)
};

Column.defaultProps = {
  className: null,
  isNarrow: false,
  isNarrowMobile: false,
  isNarrowTablet: false,
  isNarrowDesktop: false,
  offset: null,
  offsetMobile: null,
  offsetTablet: null,
  offsetDesktop: null,
  offsetWidescreen: null,
  offsetFullHD: null,
  size: null,
  sizeMobile: null,
  sizeTablet: null,
  sizeDesktop: null,
  sizeWidescreen: null,
  sizeFullHD: null
};

Column.__docgenInfo = {
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
    'isNarrow': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isNarrowMobile': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isNarrowTablet': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isNarrowDesktop': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'offset': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Default offset size. Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'offsetMobile': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Mobile offset size (mobile as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'offsetTablet': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Tablet offset size (tablet as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'offsetDesktop': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Desktop offset size (desktop as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'offsetWidescreen': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Widescreen offset size (widescreen as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'offsetFullHD': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Full HD offset size (fullhd as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Default size. Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'sizeMobile': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Mobile size (mobile as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'sizeTablet': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Tablet size (tablet as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'sizeDesktop': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Desktop size (desktop as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'sizeWidescreen': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Widescreen size (widescreen as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'sizeFullHD': {
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
        }, {
          'value': '\'7\'',
          'computed': false
        }, {
          'value': '\'8\'',
          'computed': false
        }, {
          'value': '\'9\'',
          'computed': false
        }, {
          'value': '\'10\'',
          'computed': false
        }, {
          'value': '\'11\'',
          'computed': false
        }, {
          'value': '\'12\'',
          'computed': false
        }, {
          'value': '\'three-quarters\'',
          'computed': false
        }, {
          'value': '\'two-thirds\'',
          'computed': false
        }, {
          'value': '\'half\'',
          'computed': false
        }, {
          'value': '\'one-third\'',
          'computed': false
        }, {
          'value': '\'one-quarter\'',
          'computed': false
        }, {
          'value': '\'four-fifths\'',
          'computed': false
        }, {
          'value': '\'three-fifths\'',
          'computed': false
        }, {
          'value': '\'two-fifths\'',
          'computed': false
        }, {
          'value': '\'one-fifth\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Full HD size (fullhd as min breakpoint). Available values: View **Column Sizes**',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

var Columns = function Columns(_ref) {
  var breakpoint = _ref.breakpoint,
      children = _ref.children,
      className = _ref.className,
      isGapless = _ref.isGapless,
      isMultiline = _ref.isMultiline;
  return React.createElement(
    'div',
    {
      className: classNames('columns', breakpoint ? 'is-' + breakpoint : '', isGapless ? 'is-gapless' : '', isMultiline ? 'is-multiline' : '', className || '')
    },
    children
  );
};

Columns.propTypes = {
  /** Minimum breakpoint of where responsive columns is effective. Available values: `mobile`, `tablet`, `desktop`, `widescreen`, `fullhd` */
  breakpoint: PropTypes.oneOf(['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Do the columns have no gaps? */
  isGapless: PropTypes.bool,
  /** Do the columns span on multiple lines? */
  isMultiline: PropTypes.bool
};

Columns.defaultProps = {
  breakpoint: null,
  className: null,
  isGapless: false,
  isMultiline: false
};

Columns.__docgenInfo = {
  'description': '',
  'props': {
    'breakpoint': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '\'mobile\'',
          'computed': false
        }, {
          'value': '\'tablet\'',
          'computed': false
        }, {
          'value': '\'desktop\'',
          'computed': false
        }, {
          'value': '\'widescreen\'',
          'computed': false
        }, {
          'value': '\'fullhd\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Minimum breakpoint of where responsive columns is effective. Available values: `mobile`, `tablet`, `desktop`, `widescreen`, `fullhd`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
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
    'isGapless': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Do the columns have no gaps?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isMultiline': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Do the columns span on multiple lines?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
};

var CONTAINER_SIZES = ['fluid', 'desktop', 'widescreen', 'fullhd'];

var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size;
  return React.createElement(
    'div',
    { className: classNames('container', size ? 'is-' + size : '', className || '') },
    children
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Available values: `fluid`, `desktop`, `widescreen`, `fullhd` */
  size: PropTypes.oneOf(CONTAINER_SIZES)
};

Container.defaultProps = {
  className: null,
  size: null
};

Container.__docgenInfo = {
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
    'size': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '\'fluid\'',
          'computed': false
        }, {
          'value': '\'desktop\'',
          'computed': false
        }, {
          'value': '\'widescreen\'',
          'computed': false
        }, {
          'value': '\'fullhd\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Available values: `fluid`, `desktop`, `widescreen`, `fullhd`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

var Content = function Content(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement(
    'div',
    { className: classNames('content', className || '') },
    children
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Content.defaultProps = {
  className: null
};

Content.__docgenInfo = {
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

var Footer = function Footer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);

  return React.createElement(
    'footer',
    _extends({ className: 'footer ' + (className || '') }, props),
    children
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Footer.defaultProps = {
  children: null,
  className: null
};

Footer.__docgenInfo = {
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
    }
  }
};

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

var MediaLeft = function (_React$Component) {
  inherits(MediaLeft, _React$Component);

  function MediaLeft() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MediaLeft);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MediaLeft.__proto__ || Object.getPrototypeOf(MediaLeft)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className;

      return React.createElement(
        'div',
        { className: classNames('media-left', className || '') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return MediaLeft;
}(React.Component);

MediaLeft.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MediaLeft.defaultProps = {
  className: null
};

MediaLeft.__docgenInfo = {
  'description': '',
  'displayName': 'MediaLeft',
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

var MediaRight = function (_React$Component) {
  inherits(MediaRight, _React$Component);

  function MediaRight() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MediaRight);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MediaRight.__proto__ || Object.getPrototypeOf(MediaRight)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className;

      return React.createElement(
        'div',
        { className: classNames('media-right', className || '') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return MediaRight;
}(React.Component);

MediaRight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MediaRight.defaultProps = {
  className: null
};

MediaRight.__docgenInfo = {
  'description': '',
  'displayName': 'MediaRight',
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

var MediaContent = function (_React$Component) {
  inherits(MediaContent, _React$Component);

  function MediaContent() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MediaContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MediaContent.__proto__ || Object.getPrototypeOf(MediaContent)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className;

      return React.createElement(
        'div',
        { className: classNames('media-content', className || '') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return MediaContent;
}(React.Component);

MediaContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MediaContent.defaultProps = {
  className: null
};

MediaContent.__docgenInfo = {
  'description': '',
  'displayName': 'MediaContent',
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

var Media = function (_React$Component) {
  inherits(Media, _React$Component);

  function Media() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Media.__proto__ || Object.getPrototypeOf(Media)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className;

      return React.createElement(
        'article',
        { className: classNames('media', className || '') },
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return Media;
}(React.Component);

Media.Left = MediaLeft;
Media.Right = MediaRight;
Media.Content = MediaContent;
Media.Image = MediaImage;


Media.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Media.defaultProps = {
  className: null
};

Media.__docgenInfo = {
  'description': '',
  'displayName': 'Media',
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

var Notification = function Notification(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      onClickClose = _ref.onClickClose,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'onClickClose']);

  return React.createElement(
    'div',
    _extends({ className: 'notification ' + classNames(color$$1 ? 'is-' + color$$1 : '', className || '') }, props),
    onClickClose && React.createElement(Delete, { onClick: onClickClose }),
    children
  );
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: color,
  /** Function to invoke when close button clicked */
  onClickClose: PropTypes.func
};

Notification.defaultProps = {
  className: null,
  color: null,
  onClickClose: null
};

Notification.__docgenInfo = {
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
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.color'
      },
      'required': false,
      'description': 'Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onClickClose': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke when close button clicked',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

var Progress = function Progress(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      maxValue = _ref.maxValue,
      size$$1 = _ref.size,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'maxValue', 'size', 'value']);

  return React.createElement(
    'progress',
    _extends({
      className: 'progress ' + classNames(color$$1 ? 'is-' + color$$1 : '', size$$1 ? 'is-' + size$$1 : '', className || ''),
      max: maxValue,
      value: value
    }, props),
    children
  );
};

Progress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: color,
  /** Max value */
  maxValue: PropTypes.string,
  /** Size of progress bar. Available values: `small`, `medium`, `large` */
  size: size,
  /** Value of progress bar */
  value: PropTypes.string.isRequired
};

Progress.defaultProps = {
  children: null,
  className: null,
  color: null,
  maxValue: '100',
  size: null
};

Progress.__docgenInfo = {
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
      'description': 'Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'maxValue': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Max value',
      'defaultValue': {
        'value': '\'100\'',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of progress bar. Available values: `small`, `medium`, `large`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'value': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Value of progress bar'
    }
  }
};

var Section = function Section(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);

  return React.createElement(
    'section',
    _extends({ className: 'section ' + (className || '') }, props),
    children
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Section.defaultProps = {
  children: null,
  className: null
};

Section.__docgenInfo = {
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
    }
  }
};

var SelectField = function SelectField(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      helpText = _ref.helpText,
      inputSize = _ref.inputSize,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      isHorizontal = _ref.isHorizontal,
      isLoading = _ref.isLoading,
      isMultiSelect = _ref.isMultiSelect,
      isRounded = _ref.isRounded,
      labelName = _ref.labelName,
      labelSize = _ref.labelSize,
      leftIconName = _ref.leftIconName,
      onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      state$$1 = _ref.state,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['children', 'className', 'color', 'helpText', 'inputSize', 'id', 'isDisabled', 'isHorizontal', 'isLoading', 'isMultiSelect', 'isRounded', 'labelName', 'labelSize', 'leftIconName', 'onBlur', 'onChange', 'onFocus', 'options', 'state', 'value']);

  return React.createElement(
    Field,
    { id: id, isHorizontal: isHorizontal, label: labelName, labelSize: labelSize },
    React.createElement(
      FieldBody,
      null,
      React.createElement(
        Field,
        { color: color$$1, helpText: helpText },
        React.createElement(
          FieldControl,
          { leftIconName: leftIconName },
          React.createElement(
            'div',
            {
              className: 'select ' + classNames(color$$1 ? 'is-' + color$$1 : '', isLoading ? 'is-loading' : '', isMultiSelect ? 'is-multiple' : '', isRounded ? 'is-rounded' : '', inputSize ? 'is-' + inputSize : '', className || ''),
              disabled: isDisabled
            },
            React.createElement(
              'select',
              _extends({
                className: classNames(state$$1 ? 'is-' + state$$1 : ''),
                multiple: isMultiSelect,
                onBlur: onBlur,
                onChange: function onChange(e) {
                  return _onChange && _onChange(e.target.value, e);
                },
                onFocus: onBlur,
                value: value
              }, props),
              options.map(function (option, i) {
                return React.createElement(
                  'option',
                  { key: i, value: option.value },
                  option.label
                );
              })
            )
          )
        )
      )
    )
  );
};

SelectField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of input field. */
  color: color,
  /** Displays help text */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: size,
  /** Name of left field icon */
  leftIconName: PropTypes.string,
  /** ID for the input field */
  id: PropTypes.string,
  /** Size of the input field */
  inputSize: size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Enable multi-select */
  isMultiSelect: PropTypes.bool,
  /** Input field is rounded */
  isRounded: PropTypes.bool,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Set of options to select from */
  options: PropTypes.array,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** State of field */
  state: state,
  /** Value of the input */
  value: PropTypes.string
};

SelectField.defaultProps = {
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelName: null,
  labelSize: null,
  leftIconName: null,
  id: null,
  inputSize: null,
  isDisabled: false,
  isHorizontal: false,
  isLoading: false,
  isMultiSelect: false,
  isRounded: false,
  onBlur: null,
  onChange: null,
  options: [],
  onFocus: null,
  state: null,
  value: undefined
};

SelectField.__docgenInfo = {
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
      'description': 'Color of input field.',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'helpText': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'string'
        }, {
          'name': 'element'
        }]
      },
      'required': false,
      'description': 'Displays help text',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The label that appears above the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the label field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'leftIconName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Name of left field icon',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'id': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'ID for the input field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'inputSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the input field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isDisabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Disable the input field',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isHorizontal': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is horizontal',
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
      'description': 'Input field is loading',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isMultiSelect': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Enable multi-select',
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
      'description': 'Input field is rounded',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'onBlur': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on blur',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onChange': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on change',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'options': {
      'type': {
        'name': 'array'
      },
      'required': false,
      'description': 'Set of options to select from',
      'defaultValue': {
        'value': '[]',
        'computed': false
      }
    },
    'onFocus': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on focus',
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
      'description': 'State of field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'value': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Value of the input',
      'defaultValue': {
        'value': 'undefined',
        'computed': true
      }
    }
  }
};

var TableHead = function TableHead(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'thead',
    props,
    children
  );
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired
};

TableHead.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    }
  }
};

var TableBody = function TableBody(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'tbody',
    props,
    children
  );
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired
};

TableBody.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    }
  }
};

var TableFoot = function TableFoot(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'tfoot',
    props,
    children
  );
};

TableFoot.propTypes = {
  children: PropTypes.node.isRequired
};

TableFoot.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    }
  }
};

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isSelected = _ref.isSelected,
      props = objectWithoutProperties(_ref, ['children', 'className', 'isSelected']);

  return React.createElement(
    'tr',
    _extends({ className: classNames(isSelected ? 'is-selected' : '', className || '') }, props),
    children
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isSelected: PropTypes.bool
};

TableRow.defaultProps = {
  className: null,
  isSelected: false
};

TableRow.__docgenInfo = {
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
    'isSelected': {
      'type': {
        'name': 'bool'
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

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'td',
    props,
    children
  );
};

TableCell.propTypes = {
  children: PropTypes.node
};

TableCell.defaultProps = {
  children: null
};

TableCell.__docgenInfo = {
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
    }
  }
};

var TableCellHead = function TableCellHead(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'th',
    props,
    children
  );
};

TableCellHead.propTypes = {
  children: PropTypes.node
};

TableCellHead.defaultProps = {
  children: null
};

TableCellHead.__docgenInfo = {
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
    }
  }
};

var Table = function (_React$Component) {
  inherits(Table, _React$Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className,
          isBordered = _this$props.isBordered,
          isFullWidth = _this$props.isFullWidth,
          isHoverable = _this$props.isHoverable,
          isNarrow = _this$props.isNarrow,
          isStriped = _this$props.isStriped,
          props = objectWithoutProperties(_this$props, ['children', 'className', 'isBordered', 'isFullWidth', 'isHoverable', 'isNarrow', 'isStriped']);

      return React.createElement(
        'table',
        _extends({
          className: 'table ' + classNames(isBordered ? 'is-bordered' : '', isFullWidth ? 'is-fullwidth' : '', isHoverable ? 'is-hoverable' : '', isNarrow ? 'is-narrow' : '', isStriped ? 'is-striped' : '', className || '')
        }, props),
        children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return Table;
}(React.Component);

Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.CellHead = TableCellHead;


Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Is the table bordered? */
  isBordered: PropTypes.bool,
  /** Is the table full width? */
  isFullWidth: PropTypes.bool,
  /** Is the table hoverable? */
  isHoverable: PropTypes.bool,
  /** Is the table narrow? */
  isNarrow: PropTypes.bool,
  /** Is the table striped? */
  isStriped: PropTypes.bool
};

Table.defaultProps = {
  className: null,
  isBordered: false,
  isFullWidth: false,
  isHoverable: false,
  isNarrow: false,
  isStriped: false
};

Table.__docgenInfo = {
  'description': '',
  'displayName': 'Table',
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
    'isBordered': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is the table bordered?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isFullWidth': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is the table full width?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isHoverable': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is the table hoverable?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isNarrow': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is the table narrow?',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isStriped': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is the table striped?',
      'defaultValue': {
        'value': 'false',
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

var TextAreaField = function TextAreaField(_ref) {
  var autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      helpText = _ref.helpText,
      inputSize = _ref.inputSize,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      isLoading = _ref.isLoading,
      isHorizontal = _ref.isHorizontal,
      isReadOnly = _ref.isReadOnly,
      labelName = _ref.labelName,
      labelSize = _ref.labelSize,
      onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      rows = _ref.rows,
      state$$1 = _ref.state,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['autoComplete', 'autoFocus', 'children', 'className', 'color', 'helpText', 'inputSize', 'id', 'isDisabled', 'isLoading', 'isHorizontal', 'isReadOnly', 'labelName', 'labelSize', 'onBlur', 'onChange', 'onFocus', 'placeholder', 'rows', 'state', 'value']);

  return React.createElement(
    Field,
    { id: id, isHorizontal: isHorizontal, label: labelName, labelSize: labelSize },
    React.createElement(
      FieldBody,
      null,
      React.createElement(
        Field,
        { color: color$$1, helpText: helpText },
        React.createElement(
          FieldControl,
          { color: color$$1, isLoading: isLoading },
          React.createElement(TextareaAutosize, _extends({
            autoComplete: autoComplete,
            autoFocus: autoFocus,
            className: 'textarea ' + classNames(color$$1 ? 'is-' + color$$1 : '', inputSize ? 'is-' + inputSize : '', state$$1 ? 'is-' + state$$1 : '', className || ''),
            disabled: isDisabled,
            onBlur: onBlur,
            onChange: function onChange(e) {
              return _onChange && _onChange(e.target.value, e);
            },
            onFocus: onBlur,
            placeholder: placeholder,
            readOnly: isReadOnly,
            rows: rows,
            value: value
          }, props))
        )
      )
    )
  );
};

TextAreaField.propTypes = {
  /** Set an autocomplete attribute on the field */
  autoComplete: PropTypes.string,
  /** Automatically set focus to the field */
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of input field. */
  color: color,
  /** Displays help text */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: size,
  /** ID for the input field */
  id: PropTypes.string,
  /** Size of the input field */
  inputSize: size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is read only */
  isReadOnly: PropTypes.bool,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** Placeholder of the input */
  placeholder: PropTypes.string,
  /** Minimum number of rows */
  rows: PropTypes.number,
  /** State of field */
  state: state,
  /** Value of the input */
  value: PropTypes.string
};

TextAreaField.defaultProps = {
  autoComplete: null,
  autoFocus: false,
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelName: null,
  labelSize: null,
  id: null,
  inputSize: null,
  isDisabled: false,
  isLoading: false,
  isHorizontal: false,
  isReadOnly: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  rows: 3,
  state: null,
  value: undefined
};

TextAreaField.__docgenInfo = {
  'description': '',
  'props': {
    'autoComplete': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Set an autocomplete attribute on the field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'autoFocus': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Automatically set focus to the field',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
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
      'description': 'Color of input field.',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'helpText': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'string'
        }, {
          'name': 'element'
        }]
      },
      'required': false,
      'description': 'Displays help text',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The label that appears above the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the label field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'id': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'ID for the input field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'inputSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the input field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isDisabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Disable the input field',
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
      'description': 'Input field is loading',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isHorizontal': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is horizontal',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isReadOnly': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is read only',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'onBlur': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on blur',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onChange': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on change',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onFocus': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on focus',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'placeholder': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Placeholder of the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'rows': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Minimum number of rows',
      'defaultValue': {
        'value': '3',
        'computed': false
      }
    },
    'state': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.state'
      },
      'required': false,
      'description': 'State of field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'value': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Value of the input',
      'defaultValue': {
        'value': 'undefined',
        'computed': true
      }
    }
  }
};

var TextField = function TextField(_ref) {
  var autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      children = _ref.children,
      className = _ref.className,
      color$$1 = _ref.color,
      helpText = _ref.helpText,
      inputSize = _ref.inputSize,
      isDisabled = _ref.isDisabled,
      isExpanded = _ref.isExpanded,
      isLoading = _ref.isLoading,
      isHorizontal = _ref.isHorizontal,
      isReadOnly = _ref.isReadOnly,
      isRounded = _ref.isRounded,
      labelComponent = _ref.labelComponent,
      labelName = _ref.labelName,
      labelSize = _ref.labelSize,
      leftAddonComponent = _ref.leftAddonComponent,
      leftIconName = _ref.leftIconName,
      max = _ref.max,
      maxLength = _ref.maxLength,
      min = _ref.min,
      minLength = _ref.minLength,
      name = _ref.name,
      onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      pattern = _ref.pattern,
      placeholder = _ref.placeholder,
      rightAddonComponent = _ref.rightAddonComponent,
      rightIconName = _ref.rightIconName,
      spellCheck = _ref.spellCheck,
      state$$1 = _ref.state,
      step = _ref.step,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['autoComplete', 'autoFocus', 'children', 'className', 'color', 'helpText', 'inputSize', 'isDisabled', 'isExpanded', 'isLoading', 'isHorizontal', 'isReadOnly', 'isRounded', 'labelComponent', 'labelName', 'labelSize', 'leftAddonComponent', 'leftIconName', 'max', 'maxLength', 'min', 'minLength', 'name', 'onBlur', 'onChange', 'onFocus', 'pattern', 'placeholder', 'rightAddonComponent', 'rightIconName', 'spellCheck', 'state', 'step', 'value']);

  return React.createElement(
    Field,
    { isHorizontal: isHorizontal, label: labelComponent || labelName, labelSize: labelSize },
    React.createElement(
      FieldBody,
      null,
      React.createElement(
        Field,
        { color: color$$1, hasAddons: Boolean(leftAddonComponent || rightAddonComponent), helpText: helpText },
        leftAddonComponent && React.createElement(
          FieldControl,
          null,
          leftAddonComponent
        ),
        React.createElement(
          FieldControl,
          {
            color: color$$1,
            isExpanded: isExpanded,
            isLoading: isLoading,
            leftIconName: leftIconName,
            rightIconName: rightIconName
          },
          React.createElement('input', _extends({
            'aria-label': labelName,
            autoComplete: autoComplete,
            autoFocus: autoFocus,
            className: 'input ' + classNames(color$$1 ? 'is-' + color$$1 : '', inputSize ? 'is-' + inputSize : '', isRounded ? 'is-rounded' : '', state$$1 ? 'is-' + state$$1 : '', className || ''),
            disabled: isDisabled,
            max: max,
            maxLength: maxLength,
            min: min,
            minLength: minLength,
            name: name,
            onBlur: onBlur,
            onChange: function onChange(e) {
              return _onChange && _onChange(e.target.value, e);
            },
            onFocus: onBlur,
            pattern: pattern,
            placeholder: placeholder,
            readOnly: isReadOnly,
            spellCheck: spellCheck,
            step: step,
            value: value
          }, props))
        ),
        rightAddonComponent && React.createElement(
          FieldControl,
          null,
          rightAddonComponent
        )
      )
    )
  );
};

TextField.propTypes = {
  /** Set an autocomplete attribute on the field */
  autoComplete: PropTypes.string,
  /** Automatically set focus to the field */
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of input field. */
  color: color,
  /** Displays help text */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The label that appears above the input */
  labelComponent: PropTypes.element,
  /** The label that appears above the input */
  labelName: PropTypes.string,
  /** Size of the label field */
  labelSize: size,
  /** Addon component to display on the left of the field */
  leftAddonComponent: PropTypes.element,
  /** Name of left field icon */
  leftIconName: PropTypes.string,
  /** Size of the input field */
  inputSize: size,
  /** Disable the input field */
  isDisabled: PropTypes.bool,
  /** Is input field expanded when addon component exists */
  isExpanded: PropTypes.bool,
  /** Input field is loading */
  isLoading: PropTypes.bool,
  /** Input field is horizontal */
  isHorizontal: PropTypes.bool,
  /** Input field is read only */
  isReadOnly: PropTypes.bool,
  /** Input field is rounded */
  isRounded: PropTypes.bool,
  /** Max value for numeric field */
  max: PropTypes.number,
  /** Max length for a alphanumeric field */
  maxLength: PropTypes.number,
  /** Min value for numeric field */
  min: PropTypes.number,
  /** Min length for a alphanumeric field */
  minLength: PropTypes.number,
  /** Name of the input field */
  name: PropTypes.string,
  /** Function to invoke on blur */
  onBlur: PropTypes.func,
  /** Function to invoke on change */
  onChange: PropTypes.func,
  /** Function to invoke on focus */
  onFocus: PropTypes.func,
  /** Regex to check value against */
  pattern: PropTypes.string,
  /** Placeholder of the input */
  placeholder: PropTypes.string,
  /** Addon component to display on the right of the field */
  rightAddonComponent: PropTypes.element,
  /** Name of right field icon */
  rightIconName: PropTypes.string,
  /** Enable spell check for input field */
  spellCheck: PropTypes.bool,
  /** State of field */
  state: state,
  /** Increment/decrement step value for numeric field */
  step: PropTypes.number,
  /** Type of input */
  type: PropTypes.string,
  /** Value of the input */
  value: PropTypes.string
};

TextField.defaultProps = {
  autoComplete: null,
  autoFocus: false,
  children: null,
  className: null,
  color: null,
  helpText: null,
  labelComponent: null,
  labelName: null,
  labelSize: null,
  leftAddonComponent: null,
  leftIconName: null,
  inputSize: null,
  isDisabled: false,
  isExpanded: false,
  isLoading: false,
  isHorizontal: false,
  isReadOnly: false,
  isRounded: false,
  max: null,
  maxLength: null,
  min: null,
  minLength: null,
  name: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  pattern: null,
  placeholder: null,
  rightAddonComponent: null,
  rightIconName: null,
  spellCheck: false,
  state: null,
  step: null,
  type: 'text',
  value: undefined
};

TextField.__docgenInfo = {
  'description': '',
  'props': {
    'autoComplete': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Set an autocomplete attribute on the field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'autoFocus': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Automatically set focus to the field',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
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
      'description': 'Color of input field.',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'helpText': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'string'
        }, {
          'name': 'element'
        }]
      },
      'required': false,
      'description': 'Displays help text',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelComponent': {
      'type': {
        'name': 'element'
      },
      'required': false,
      'description': 'The label that appears above the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'The label that appears above the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'labelSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the label field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'leftAddonComponent': {
      'type': {
        'name': 'element'
      },
      'required': false,
      'description': 'Addon component to display on the left of the field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'leftIconName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Name of left field icon',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'inputSize': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.size'
      },
      'required': false,
      'description': 'Size of the input field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'isDisabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Disable the input field',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isExpanded': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Is input field expanded when addon component exists',
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
      'description': 'Input field is loading',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isHorizontal': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is horizontal',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isReadOnly': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Input field is read only',
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
      'description': 'Input field is rounded',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'max': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Max value for numeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'maxLength': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Max length for a alphanumeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'min': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Min value for numeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'minLength': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Min length for a alphanumeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'name': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Name of the input field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onBlur': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on blur',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onChange': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on change',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'onFocus': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'Function to invoke on focus',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'pattern': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Regex to check value against',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'placeholder': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Placeholder of the input',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'rightAddonComponent': {
      'type': {
        'name': 'element'
      },
      'required': false,
      'description': 'Addon component to display on the right of the field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'rightIconName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Name of right field icon',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'spellCheck': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Enable spell check for input field',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'state': {
      'type': {
        'name': 'custom',
        'raw': 'sharedPropTypes.state'
      },
      'required': false,
      'description': 'State of field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'step': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Increment/decrement step value for numeric field',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'type': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Type of input',
      'defaultValue': {
        'value': '\'text\'',
        'computed': false
      }
    },
    'value': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Value of the input',
      'defaultValue': {
        'value': 'undefined',
        'computed': true
      }
    }
  }
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

exports.Field = Field;
exports.FieldBody = FieldBody;
exports.FieldControl = FieldControl;
exports.FieldLabel = FieldLabel;
exports.HelpText = HelpText;
exports.Box = Box;
exports.Button = Button;
exports.Buttons = Buttons;
exports.Column = Column;
exports.Columns = Columns;
exports.Container = Container;
exports.Content = Content;
exports.Delete = Delete;
exports.Footer = Footer;
exports.Hero = Hero;
exports.HeroBody = HeroBody;
exports.Icon = Icon;
exports.Image = Image;
exports.Level = Level;
exports.LevelLeft = LevelLeft;
exports.LevelRight = LevelRight;
exports.LevelItem = LevelItem;
exports.Media = Media;
exports.MediaLeft = MediaLeft;
exports.MediaRight = MediaRight;
exports.MediaContent = MediaContent;
exports.MediaImage = MediaImage;
exports.Notification = Notification;
exports.Progress = Progress;
exports.Section = Section;
exports.SelectField = SelectField;
exports.TableHead = TableHead;
exports.TableBody = TableBody;
exports.TableFoot = TableFoot;
exports.TableRow = TableRow;
exports.TableCell = TableCell;
exports.TableCellHead = TableCellHead;
exports.Table = Table;
exports.Tag = Tag;
exports.Tags = Tags;
exports.TextAreaField = TextAreaField;
exports.TextField = TextField;
exports.Title = Title;

Object.defineProperty(exports, '__esModule', { value: true });

})));
