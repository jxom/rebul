import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const HelpText = ({ color, children }) => (
  <p className={`help ${classNames(color ? `is-${color}` : '')}`}>{children}</p>
);

HelpText.propTypes = {
  children: PropTypes.node.isRequired,
  color: sharedPropTypes.color
};

HelpText.defaultProps = {
  color: null
};

export default HelpText;
