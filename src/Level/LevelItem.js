import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LevelItem extends React.Component {
  render = () => {
    const { children, className, element } = this.props;
    const Element = element || 'div';
    return <Element className={classNames('level-item', className || '')}>{children}</Element>;
  };
}

LevelItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.string
};

LevelItem.defaultProps = {
  className: null,
  element: null
};

export default LevelItem;
