import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MenuLabel extends React.Component {
  render = () => {
    const { children, className, element: Element } = this.props;
    return <Element className={classNames('menu-label', { [className]: Boolean(className) })}>{children}</Element>;
  };
}

MenuLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

MenuLabel.defaultProps = {
  className: null,
  element: 'p'
};

export default MenuLabel;
