import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Consumer } from './Dropdown';

class DropdownItem extends React.PureComponent {
  handleClick = ({ e, closeOnItemClick, hide }) => {
    const { onClick } = this.props;
    onClick && onClick(e);
    closeOnItemClick && hide();
  };

  render = () => {
    const { children, className, element: Element, isActive, ...props } = this.props;
    return (
      <Consumer>
        {({ closeOnItemClick, hide }) => (
          <Element
            className={classNames('dropdown-item', {
              'is-active': isActive,
              [className]: Boolean(className)
            })}
            {...props}
            onClick={e => this.handleClick({ e, closeOnItemClick, hide })}
          >
            {children}
          </Element>
        )}
      </Consumer>
    );
  };
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

DropdownItem.defaultProps = {
  className: null,
  element: 'div',
  isActive: false,
  onClick: null
};

export default DropdownItem;
