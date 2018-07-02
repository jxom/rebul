import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PanelBlock from './PanelBlock';
import PanelHeading from './PanelHeading';
import PanelTabs from './PanelTabs';

class Panel extends React.Component {
  static Block = PanelBlock;
  static Heading = PanelHeading;
  static Tabs = PanelTabs;

  render = () => {
    const { children, className, ...props } = this.props;
    return (
      <nav className={classNames('panel', { [className]: Boolean(className) })} {...props}>
        {children}
      </nav>
    );
  };
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Panel.defaultProps = {
  className: null
};

export default Panel;
