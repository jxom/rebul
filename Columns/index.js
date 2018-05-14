(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames'], factory) :
	(factory((global['Columns/index'] = {}),global.React,global.PropTypes,global.classNames));
}(this, (function (exports,React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

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

exports.Columns = Columns;
exports['default'] = Columns;

Object.defineProperty(exports, '__esModule', { value: true });

})));
