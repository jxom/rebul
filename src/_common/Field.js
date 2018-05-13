import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FieldLabel from './FieldLabel';

const Field = ({ children, className, label, ...props }) => (
  <div className={`field ${classNames(className || '')}`}>
    {label && <FieldLabel>{label}</FieldLabel>}
    {children}
  </div>
);

Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

Field.defaultProps = {
  className: null,
  label: null
};

export default Field;
