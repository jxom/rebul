import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FieldBody = ({ children, className, ...props }) => (
  <div className={`field-body ${classNames(className || '')}`}>{children}</div>
);

FieldBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FieldBody.defaultProps = {
  className: null
};

export default FieldBody;
