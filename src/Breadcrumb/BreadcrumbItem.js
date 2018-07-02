import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BreadcrumbItem = ({ icon, isActive, className, children, element, href, onClick, ...props }) => {
  const Element = element;
  return (
    <li className={classNames({ 'is-active': isActive, [className]: Boolean(className) })}>
      <Element
        onClick={onClick}
        {...(isActive ? { 'aria-current': 'page' } : {})}
        {...(element === 'a' ? { href } : {})}
        {...props}
      >
        {icon && (
          <span className="icon is-small">
            <i className={icon} aria-hidden="true" />
          </span>
        )}
        {children}
      </Element>
    </li>
  );
};

BreadcrumbItem.propTypes = {
  /** Breadcrumb icon name */
  icon: PropTypes.string,
  /** Whether or not the breadcrumb is active */
  isActive: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string,
  onClick: PropTypes.func
};

BreadcrumbItem.defaultProps = {
  icon: null,
  isActive: false,
  children: null,
  className: null,
  element: 'a',
  href: null,
  onClick: null
};

export default BreadcrumbItem;
