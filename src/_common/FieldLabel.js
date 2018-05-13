import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FieldLabel = ({ children, className, ...props }) => (
  <label className={`label ${classNames(className || '')}`}>{children}</label>
);

FieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FieldLabel.defaultProps = {
  className: null
};

export default FieldLabel;
