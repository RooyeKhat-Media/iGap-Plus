import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styleSheet from './index.style';
import {closeModal} from '../../../actions/modal';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class Modal extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {modals, dispatch, id} = this.props;
    if (modals && modals.length) {
      const lastModal = modals[modals.length - 1];
      if (lastModal.closeable) {
        dispatch(closeModal(id));
      }
      return true;
    }
    return false;
  };

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {modals} = this.props;
    const styles = this.getStyles();
    if (!modals || !modals.length) {
      return null;
    }
    return (
      <View style={styles.container}>
        {modals.map(({content}, idex) => (
          <View key={idex} style={styles.modal}>
            <TouchableOpacity style={styles.backModal} activeOpacity={1} onPress={this.onBackPress}/>
            {content}
          </View>
        ))}
      </View>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    modals: state.modal[props.id],
  };
};

export default connect(
  mapStateToProps,
)(Modal);