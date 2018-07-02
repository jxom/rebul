import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationList = ({ children, className, ...props }) => (
  <ul className={classNames('pagination-list', { [className]: Boolean(className) })} {...props}>
    {children}
  </ul>
);

PaginationList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

PaginationList.defaultProps = {
  className: null
};

export default PaginationList;
