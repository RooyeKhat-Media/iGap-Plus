import React, {Component, PropTypes} from 'react';
import styles from './index.styles';
import {Text, View} from 'react-native';
import {ActivityIndicator, Dialog, Modal} from '../index';
import i18n from '../../../i18n';
import {FormattedMessage} from 'react-intl';

class Spinner extends Component {
  constructor(props) {
    super(props);
    const {control} = props;
    control({
      on: this.on,
      off: this.off,
    });
  }

  on = () => {
    this.modal.open();
  };
  off = () => {
    this.modal.close();
  };

  render() {
    let {title} = this.props;
    if (!title) {
      title = <FormattedMessage {...i18n.spinnerDefaultTitle} />;
    }
    return (
      <Modal control={(modal) => {
        this.modal = modal;
      }}>
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