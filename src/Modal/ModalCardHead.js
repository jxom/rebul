import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalCardHead extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <header className={classNames('modal-card-head', { [className]: Boolean(className) })}>{children}</header>;
  };
}

ModalCardHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ModalCardHead.defaultProps = {
  className: null
};

export default ModalCardHead;
