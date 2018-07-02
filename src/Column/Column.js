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
  'three-fifths',
  'two-fifths',
  'one-fifth'
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
    className={classNames('column', {
      'is-narrow': isNarrow,
      'is-narrow-mobile': isNarrowMobile,
      'is-narrow-tablet': isNarrowTablet,
      'is-narrow-desktop': isNarrowDesktop,
      [`is-offset-${offset}`]: Boolean(offset),
      [`is-offset-${offsetMobile}-mobile`]: Boolean(offsetMobile),
      [`is-offset-${offsetTablet}-tablet`]: Boolean(offsetTablet),
      [`is-offset-${offsetDesktop}-desktop`]: Boolean(offsetDesktop),
      [`is-offset-${offsetWidescreen}-widescreen`]: Boolean(offsetWidescreen),
      [`is-offset-${offsetFullHD}-fullhd`]: Boolean(offsetFullHD),
      [`is-${size}`]: Boolean(size),
      [`is-${sizeMobile}-mobile`]: Boolean(sizeMobile),
      [`is-${sizeTablet}-tablet`]: Boolean(sizeTablet),
      [`is-${sizeDesktop}-desktop`]: Boolean(sizeDesktop),
      [`is-${sizeWidescreen}-widescreen`]: Boolean(sizeWidescreen),
      [`is-${sizeFullHD}-fullhd`]: Boolean(sizeFullHD),
      [className]: Boolean(className)
    })}
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

export default Column;
