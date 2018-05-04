(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
	(factory((global['TextField/index'] = {}),global.React,global.PropTypes));
}(this, (function (exports,React,PropTypes) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

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

var TextField = function TextField(_ref) {
  var autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      label = _ref.label,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      step = _ref.step,
      type = _ref.type,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['autoComplete', 'autoFocus', 'children', 'className', 'disabled', 'label', 'onBlur', 'onChange', 'onFocus', 'placeholder', 'readOnly', 'step', 'type', 'value']);

  return React.createElement(
    'div',
    _extends({ className: 'field' }, props),
    label && React.createElement(
      'label',
      { className: 'label' },
      label
    ),
    React.createElement(
      'div',
      { className: 'control' },
      React.createElement('input', {
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        className: 'input',
        disabled: disabled,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        placeholder: placeholder,
        readOnly: readOnly,
        step: step,
        type: type,
        value: value
      })
    )
  );
};

TextField.propTypes = {
  autoComplete: PropTypes.boolean,
  autoFocus: PropTypes.boolean,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.boolean,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.boolean,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string
};

TextField.defaultProps = {
  autoComplete: false,
  autoFocus: false,
  children: null,
  className: null,
  disabled: false,
  label: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  readOnly: false,
  step: null,
  type: 'text',
  value: null
};

exports.TextField = TextField;
exports['default'] = TextField;

Object.defineProperty(exports, '__esModule', { value: true });

})));
