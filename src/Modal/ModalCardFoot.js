import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalCardFoot extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <footer className={classNames('modal-card-foot', { [className]: Boolean(className) })}>{children}</footer>;
  };
}

ModalCardFoot.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ModalCardFoot.defaultProps = {
  className: null
};

export default ModalCardFoot;
