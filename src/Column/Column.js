import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const COLUMN_SIZES = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  'three-quarters',
  'two-thirds',
  'half',
  'one-third',
  'one-quarter',
  'four-fifths',
  'is-three-fifths',
  'is-two-fifths',
  'is-one-fifth'
];

const Column = ({
  children,
  className,
  isNarrow,
  isNarrowMobile,
  isNarrowTablet,
  isNarrowDesktop,
  offset,
  offsetMobile,
  offsetTablet,
  offsetDesktop,
  offsetWidescreen,
  offsetFullHD,
  size,
  sizeMobile,
  sizeTablet,
  sizeDesktop,
  sizeWidescreen,
  sizeFullHD
}) => (
  <div
    className={classNames(
      'column',
      isNarrow ? 'is-narrow' : '',
      isNarrowMobile ? 'is-narrow-mobile' : '',
      isNarrowTablet ? 'is-narrow-tablet' : '',
      isNarrowDesktop ? 'is-narrow-desktop' : '',
      offset ? `is-offset-${offset}` : '',
      offsetMobile ? `is-offset-${offsetMobile}-mobile` : '',
      offsetTablet ? `is-offset-${offsetTablet}-tablet` : '',
      offsetDesktop ? `is-offset-${offsetDesktop}-desktop` : '',
      offsetWidescreen ? `is-offset-${offsetWidescreen}-widescreen` : '',
      offsetFullHD ? `is-offset-${offsetFullHD}-fullhd` : '',
      size ? `is-${size}` : '',
      sizeMobile ? `is-${sizeMobile}-mobile` : '',
      sizeTablet ? `is-${sizeTablet}-tablet` : '',
      sizeDesktop ? `is-${sizeDesktop}-desktop` : '',
      sizeWidescreen ? `is-${sizeWidescreen}-widescreen` : '',
      sizeFullHD ? `is-${sizeFullHD}-fullhd` : '',
      className || ''
    )}
  >
    {children}
  </div>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isNarrow: PropTypes.bool,
  isNarrowMobile: PropTypes.bool,
  isNarrowTablet: PropTypes.bool,
  isNarrowDesktop: PropTypes.bool,
  offset: PropTypes.oneOf(COLUMN_SIZES),
  offsetMobile: PropTypes.oneOf(COLUMN_SIZES),
  offsetTablet: PropTypes.oneOf(COLUMN_SIZES),
  offsetDesktop: PropTypes.oneOf(COLUMN_SIZES),
  offsetWidescreen: PropTypes.oneOf(COLUMN_SIZES),
  offsetFullHD: PropTypes.oneOf(COLUMN_SIZES),
  size: PropTypes.oneOf(COLUMN_SIZES),
  sizeMobile: PropTypes.oneOf(COLUMN_SIZES),
  sizeTablet: PropTypes.oneOf(COLUMN_SIZES),
  sizeDesktop: PropTypes.oneOf(COLUMN_SIZES),
  sizeWidescreen: PropTypes.oneOf(COLUMN_SIZES),
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

export default Column;
