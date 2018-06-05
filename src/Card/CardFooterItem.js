import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardFooterItem extends React.Component {
  render = () => {
    const { children, className, element, onClick, ...props } = this.props;
    const Element = element || 'div';
    return (
      <Element className={classNames('card-footer-item', className || '')} onClick={onClick} {...props}>
        {children}
      </Element>
    );
  };
}

CardFooterItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.string,
  onClick: PropTypes.func
};

CardFooterItem.defaultProps = {
  className: null,
  element: null,
  onClick: null
};

export default CardFooterItem;
