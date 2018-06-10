import React from 'react';
import PropTypes from 'prop-types';

export default class ClickOutside extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClickOutside: PropTypes.func.isRequired
  };

  container = React.createRef();

  componentDidMount = () => {
    document.addEventListener('touchend', this.handleClickDocument, true);
    document.addEventListener('click', this.handleClickDocument, true);
  };

  componentWillUnmount = () => {
    document.removeEventListener('touchend', this.handleClickDocument, true);
    document.removeEventListener('click', this.handleClickDocument, true);
  };

  handleClickDocument = e => {
    const { onClickOutside } = this.props;
    if (e.type === 'touchend' && e.type === 'click') {
      return;
    }
    const element = this.container.current;
    if (!element.contains(e.target)) {
      onClickOutside(e);
    }
  };

  render = () => {
    const { children, ...props } = this.props;
    return (
      <div ref={this.container} {...props}>
        {children}
      </div>
    );
  };
}
