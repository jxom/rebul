import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MediaLeft from './MediaLeft';
import MediaRight from './MediaRight';
import MediaContent from './MediaContent';
import MediaImage from './MediaImage';

class Media extends React.Component {
  static Left = MediaLeft;
  static Right = MediaRight;
  static Content = MediaContent;
  static Image = MediaImage;

  render = () => {
    const { children, className } = this.props;
    return <article className={classNames('media', { [className]: Boolean(className) })}>{children}</article>;
  };
}

Media.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Media.defaultProps = {
  className: null
};

export default Media;
