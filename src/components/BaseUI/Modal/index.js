import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {closeModal, openModal} from '../../../actions/modal';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {APP_MODAL_ID_MAIN} from '../../../constants/app';

class Modal extends PureComponent {

  open = (closeable = true) => {
    const {openModal, children, type, style} = this.props;
    openModal(type, <View style={style}>{children}</View>, closeable);
  };

  close = () => {
    const {closeModal, type} = this.props;
    closeModal(type);
  };

  render() {
    return null;
  }
}

Modal.defaultProps = {
  type: APP_MODAL_ID_MAIN,
};

Modal.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  type: PropTypes.string,
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

export default connect(null, mapDispatchToProps, null, {withRef: true})(Modal);