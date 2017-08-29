import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {closeModal, openModal} from '../../../actions/modal';
import {connect} from 'react-redux';
import {View} from 'react-native';

class Modal extends Component {
  constructor(props) {
    super(props);
    const {control} = props;
    control({
      open: this.open,
      close: this.close,
    });
  }

  open = () => {
    const {openModal, children} = this.props;
    openModal(<View style={{flex: 1}}>{children}</View>);
  };
  close = () => {
    const {closeModal} = this.props;
    closeModal();
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
    openModal: content => {
      dispatch(openModal(content));
    },
    closeModal: () => {
      dispatch(closeModal());
    },
  };
};

export default connect(null, mapDispatchToProps)(Modal);