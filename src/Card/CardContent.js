import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardContent extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('card-content', { [className]: Boolean(className) })}>{children}</div>;
  };
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardContent.defaultProps = {
  className: null
};

export default CardContent;
