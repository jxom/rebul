import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toggle from 'react-toggled';

import ClickOutside from '../utils/ClickOutside';
import ModalCard from './ModalCard';
import ModalCardBody from './ModalCardBody';
import ModalCardFoot from './ModalCardFoot';
import ModalCardHead from './ModalCardHead';
import ModalCardTitle from './ModalCardTitle';

class Modal extends React.Component {
  static Card = ModalCard;
  static CardBody = ModalCardBody;
  static CardFoot = ModalCardFoot;
  static CardHead = ModalCardHead;
  static CardTitle = ModalCardTitle;

  render = () => {
    const { children, className, initiallyIsActive, isActive, trigger } = this.props;
    return (
      <Toggle defaultOn={initiallyIsActive} {...(isActive !== null ? { on: isActive } : {})}>
        {({ getTogglerElementProps, getTogglerProps, on, setOn: show, setOff: hide, toggle }) => (
          <React.Fragment>
            {trigger &&
              trigger({
                getTriggerButtonProps: getTogglerProps,
                getTriggerElementProps: getTogglerElementProps,
                show,
                hide,
                toggle
              })}
            <div className={classNames('modal', on ? 'is-active' : '', className || '')}>
              <div className="modal-background" />
              <ClickOutside onClickOutside={hide}>
                <div aria-modal="true" className="modal-content" role="dialog">
                  {typeof children === 'function'
                    ? children({
                        getTriggerButtonProps: getTogglerProps,
                        getTriggerElementProps: getTogglerElementProps,
                        hide
                      })
                    : children}
                </div>
              </ClickOutside>
            </div>
          </React.Fragment>
        )}
      </Toggle>
    );
  };
}

Modal.propTypes = {
  /** Can be either a `node` or a `function`. If it is a `function`, see more about its render props below. */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
  /** Default active state of the modal */
  initiallyIsActive: PropTypes.bool,
  /** Controlled active state of the dropdown */
  isActive: PropTypes.bool,
  /** `trigger` is a function that returns a component. See more about its render props below */
  trigger: PropTypes.func
};

Modal.defaultProps = {
  className: null,
  initiallyIsActive: false,
  isActive: null,
  trigger: null
};

export default Modal;
