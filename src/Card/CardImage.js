import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardImage extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('card-image', className || '')}>{children}</div>;
  };
}

CardImage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardImage.defaultProps = {
  className: null
};

export default CardImage;
