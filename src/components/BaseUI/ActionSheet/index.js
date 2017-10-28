import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './index.styles';
import {Text, View} from 'react-native';
import {Modal} from '../index';

class ActionSheet extends Component {
  constructor(props) {
    super(props);
    const {control} = props;
    control({
      show: this.show,
      off: this.off,
    });
  }

  show = () => {
    this.modal.open();
  };
  off = () => {
    this.modal.close();
  };

  render() {
    return (
      <Modal control={(modal) => {
        this.modal = modal;
      }}>
        <View style={styles.container}>
          <Text>Action Sheet</Text>
        </View>
      </Modal>
    );
  }
}

ActionSheet.propTypes = {
  control: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.string,
};

export default ActionSheet;