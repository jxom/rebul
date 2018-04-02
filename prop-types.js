(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'prop-types'], factory) :
	(factory((global.PropTypes = {}),global.PropTypes));
}(this, (function (exports,PropTypes) { 'use strict';

PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var color = PropTypes.oneOf(['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']);
var size = PropTypes.oneOf(['small', 'medium', 'large']);
var state = PropTypes.oneOf(['hovered', 'active', 'focused']);

exports.color = color;
exports.size = size;
exports.state = state;

Object.defineProperty(exports, '__esModule', { value: true });

})));
