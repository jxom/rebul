import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalCard extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('modal-card', { [className]: Boolean(className) })}>{children}</div>;
  };
}

ModalCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ModalCard.defaultProps = {
  className: null
};

export default ModalCard;
