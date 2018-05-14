(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
	(global['Table/TableCell'] = factory(global.React,global.PropTypes));
}(this, (function (React,PropTypes) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
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

return TableCell;

})));
