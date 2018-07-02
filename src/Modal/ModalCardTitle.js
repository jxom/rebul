import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalCardTitle extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return (
      <p id="modal-title" className={classNames('modal-card-title', { [className]: Boolean(className) })}>
        {children}
      </p>
    );
  };
}

ModalCardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ModalCardTitle.defaultProps = {
  className: null
};

export default ModalCardTitle;
