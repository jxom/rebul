import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardHeaderTitle extends React.Component {
  render = () => {
    const { children, className, element } = this.props;
    const Element = element || 'p';
    return (
      <Element className={classNames('card-header-title', { [className]: Boolean(className) })}>{children}</Element>
    );
  };
}

CardHeaderTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

CardHeaderTitle.defaultProps = {
  className: null,
  element: null
};

export default CardHeaderTitle;
