import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardHeaderIcon extends React.Component {
  render = () => {
    const { children, className, element, onClick, ...props } = this.props;
    const Element = element || 'div';
    return (
      <Element className={classNames('card-header-icon', className || '')} onClick={onClick} {...props}>
        {children}
      </Element>
    );
  };
}

CardHeaderIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func
};

CardHeaderIcon.defaultProps = {
  className: null,
  element: null,
  onClick: null
};

export default CardHeaderIcon;
