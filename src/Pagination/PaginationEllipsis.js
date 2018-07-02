import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationEllipsis = ({ className }) => (
  <li>
    <span className={classNames('pagination-ellipsis', { [className]: Boolean(className) })}>&hellip;</span>
  </li>
);

PaginationEllipsis.propTypes = {
  className: PropTypes.string
};

PaginationEllipsis.defaultProps = {
  className: null
};

export default PaginationEllipsis;
