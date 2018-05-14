import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardHeaderTitle from './CardHeaderTitle';
import CardHeaderIcon from './CardHeaderIcon';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardFooterItem from './CardFooterItem';

class Card extends React.Component {
  static Header = CardHeader;
  static HeaderTitle = CardHeaderTitle;
  static HeaderIcon = CardHeaderIcon;
  static Image = CardImage;
  static Content = CardContent;
  static Footer = CardFooter;
  static FooterItem = CardFooterItem;

  render = () => {
    const { children, className } = this.props;
    return <div className={classNames('card', className || '')}>{children}</div>;
  };
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Card.defaultProps = {
  className: null
};

export default Card;
