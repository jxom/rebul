import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MessageHeader extends React.Component {
  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('message-header', className || '')}>{children}</div>;
  };
}

MessageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MessageHeader.defaultProps = {
  className: null
};

export default MessageHeader;
