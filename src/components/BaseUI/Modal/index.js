import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {closeModal, openModal} from '../../../actions/modal';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {APP_MODAL_ID_MAIN, APP_MODAL_ID_PRIMARY, APP_MODAL_ID_SECONDARY} from '../../../constants/app';

class Modal extends Component {
  constructor(props) {
    super(props);
    const {control} = props;
    this.actions = {
      open: this.open,
      close: this.close,
      openPrimary: this.openPrimary,
      closePrimary: this.closePrimary,
      openSecondary: this.openSecondary,
      closeSecondary: this.closeSecondary,
      back: null,
    };
    control(this.actions);
  }

  open = (closeable = true) => {
    const {control, openModal, children} = this.props;
    openModal(APP_MODAL_ID_MAIN, <View style={{flex: 1}}>{children}</View>, closeable);
    this.actions.back = this.close;
    control(this.actions);
  };

  close = () => {
    const {closeModal} = this.props;
    closeModal(APP_MODAL_ID_MAIN);
  };

  openPrimary = (closeable = true) => {
    const {control, openModal, children} = this.props;
    openModal(APP_MODAL_ID_PRIMARY, <View style={{flex: 1}}>{children}</View>, closeable);
    this.actions.back = this.closePrimary;
    control(this.actions);
  };

  closePrimary = () => {
    const {closeModal} = this.props;
    closeModal(APP_MODAL_ID_PRIMARY);
  };

  openSecondary = (closeable = true) => {
    const {control, openModal, children} = this.props;
    openModal(APP_MODAL_ID_SECONDARY, <View style={{flex: 1}}>{children}</View>, closeable);
    this.actions.back = this.closeSecondary;
    control(this.actions);
  };

  closeSecondary = () => {
    const {closeModal} = this.props;
    closeModal(APP_MODAL_ID_SECONDARY);
  };

  render() {
    return null;
  }
}

Modal.propTypes = {
  control: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (id, content, closeable) => {
      dispatch(openModal(id, content, closeable));
    },
    closeModal: (id) => {
      dispatch(closeModal(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Modal);