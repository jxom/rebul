import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardHeaderIcon extends React.Component {
  render = () => {
    const { children, className, element } = this.props;
    const Element = element || 'div';
    return <Element className={classNames('card-header-icon', className || '')}>{children}</Element>;
  };
}

CardHeaderIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.string
};

CardHeaderIcon.defaultProps = {
  className: null,
  element: null
};

export default CardHeaderIcon;
