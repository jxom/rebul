import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { space } from 'styled-system';
import * as sharedPropTypes from '../_prop-types';
import Delete from '../Delete/Delete';

const DeleteWrapper = styled.span`
  ${space};
`;

const getDeleteWrapperMarginLeft = ({ children, size }) => {
  if (children) {
    return size === 'medium' || size === 'large' ? 2 : 1;
  }
  return 0;
};

const Tag = ({ children, className, color, isRounded, onClickDelete, size, ...props }) => {
  return (
    <span
      className={`tag ${classNames(
        color ? `is-${color}` : '',
        size ? `is-${size}` : '',
        isRounded ? 'is-rounded' : '',
        className || ''
      )}`}
      {...props}
    >
      {children}
      {onClickDelete && (
        <DeleteWrapper ml={getDeleteWrapperMarginLeft({ children, size })}>
          <Delete onClick={onClickDelete} size={size} />
        </DeleteWrapper>
      )}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: sharedPropTypes.color,
  isRounded: PropTypes.bool,
  onClickDelete: PropTypes.func,
  size: sharedPropTypes.size
};

Tag.defaultProps = {
  children: null,
  className: null,
  color: null,
  isRounded: false,
  onClickDelete: null,
  size: 'small'
};

export default Tag;
