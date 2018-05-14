(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Table/Table'] = factory(global.React,global.PropTypes,global.classNames));
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

return Table;

})));
