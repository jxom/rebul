import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';

class Message extends React.Component {
  static Header = MessageHeader;
  static Body = MessageBody;

  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('message', className || '')}>{children}</div>;
  };
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Message.defaultProps = {
  className: null
};

export default Message;
