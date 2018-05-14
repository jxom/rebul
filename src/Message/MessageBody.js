import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MessageBody extends React.Component {
  render = () => {
    const { children, className, element } = this.props;
    const Element = element || 'div';
    return <Element className={classNames('message-body', className || '')}>{children}</Element>;
  };
}

MessageBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.string
};

MessageBody.defaultProps = {
  className: null,
  element: null
};

export default MessageBody;
