import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MessageBody extends React.Component {
  render = () => {
    const { children, className, element } = this.props;
    const Element = element || 'div';
    return <Element className={classNames('message-body', { [className]: Boolean(className) })}>{children}</Element>;
  };
}

MessageBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

MessageBody.defaultProps = {
  className: null,
  element: null
};

export default MessageBody;
