import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardFooter extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <footer className={classNames('card-footer', className || '')}>{children}</footer>;
  };
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardFooter.defaultProps = {
  className: null
};

export default CardFooter;
