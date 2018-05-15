import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardHeaderTitle extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <p className={classNames('card-header-title', className || '')}>{children}</p>;
  };
}

CardHeaderTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardHeaderTitle.defaultProps = {
  className: null
};

export default CardHeaderTitle;
