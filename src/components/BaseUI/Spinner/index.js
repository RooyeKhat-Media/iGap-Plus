import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './index.styles';
import {Text, View} from 'react-native';
import {ActivityIndicator, Dialog, Modal} from '../index';
import i18n from '../../../i18n';
import {FormattedMessage} from 'react-intl';
import {APP_MODAL_ID_MAIN, APP_MODAL_ID_PRIMARY, APP_MODAL_ID_SECONDARY} from '../../../constants/app';

class Spinner extends Component {
  constructor(props) {
    super(props);
    const {control} = props;
    control({
      on: this.on,
      off: this.off,
    });
  }

  on = (modalId = APP_MODAL_ID_MAIN) => {
    switch (modalId) {
      case APP_MODAL_ID_MAIN:
        this.modal.open();
        break;
      case APP_MODAL_ID_PRIMARY:
        this.modal.openPrimary();
        break;
      case APP_MODAL_ID_SECONDARY:
        this.modal.openSecondary();
        break;
    }
  };
  off = (modalId = APP_MODAL_ID_MAIN) => {
    switch (modalId) {
      case APP_MODAL_ID_MAIN:
        this.modal.close();
        break;
      case APP_MODAL_ID_PRIMARY:
        this.modal.closePrimary();
        break;
      case APP_MODAL_ID_SECONDARY:
        this.modal.closeSecondary();
        break;
    }
  };

  controlFunc = (modal) => {
    this.modal = modal;
  };

  render() {
    let {title} = this.props;
    if (!title) {
      title = <FormattedMessage {...i18n.spinnerDefaultTitle} />;
    }
    return (
      <Modal control={this.controlFunc}>
        <View style={styles.dialogWrap}>
          <View style={styles.container}>
            <Dialog style={styles.dialog}>
              <View style={styles.loadingContainer}>
                <View style={styles.loadingIndicator}>
                  <ActivityIndicator size="large"/>
                </View>
                <View style={styles.loadingTxt}><Text>{title}</Text></View>
              </View>
            </Dialog>
          </View>
        </View>
      </Modal>
    );
  }
}

Spinner.propTypes = {
  control: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.string,
};

export default Spinner;