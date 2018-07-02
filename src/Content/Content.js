import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Content = ({ children, className }) => (
  <div className={classNames('content', { [className]: Boolean(className) })}>{children}</div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Content.defaultProps = {
  className: null
};

export default Content;
