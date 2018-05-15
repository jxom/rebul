import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardFooterItem extends React.Component {
  render = () => {
    const { children, className, element } = this.props;
    const Element = element || 'a';
    return <Element className={classNames('card-content', className || '')}>{children}</Element>;
  };
}

CardFooterItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.string
};

CardFooterItem.defaultProps = {
  className: null,
  element: null
};

export default CardFooterItem;
