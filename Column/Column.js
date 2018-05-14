(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'classnames'], factory) :
	(global['Column/Column'] = factory(global.React,global.PropTypes,global.classNames));
}(this, (function (React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

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

return Column;

})));
