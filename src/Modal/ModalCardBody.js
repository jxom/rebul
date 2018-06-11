import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalCardBody extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <section className={classNames('modal-card-body', className || '')}>{children}</section>;
  };
}

ModalCardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ModalCardBody.defaultProps = {
  className: null
};

export default ModalCardBody;
