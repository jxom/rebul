import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardHeader extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <header className={classNames('card-header', className || '')}>{children}</header>;
  };
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardHeader.defaultProps = {
  className: null
};

export default CardHeader;
