import React, {Component} from 'react';
import {BackHandler, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './index.style';
import {closeModal} from '../../../actions/modal';

class Modal extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {modals, dispatch} = this.props;
    if (modals.length) {
      const lastModal = modals[modals.length - 1];
      if (lastModal.closeable) {
        dispatch(closeModal());
      }
      return true;
    }
    return false;
  };

  render() {
    const {modals} = this.props;
    if (!modals.length) {
      return null;
    }
    return (
      <View style={styles.container}>
        {modals.map(({content}, idex) => (
          <View key={idex} style={styles.modal}>
            {content}
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    modals: state.modal,
  };
};

export default connect(
  mapStateToProps,
)(Modal);