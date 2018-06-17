import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleSheet from './index.styles';
import {Text, View} from 'react-native';
import {ActivityIndicator, Dialog, Modal} from '../index';
import i18n from '../../../i18n';
import {FormattedMessage} from 'react-intl';
import {APP_MODAL_ID_MAIN} from '../../../constants/app';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class Spinner extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    const {control} = props;
    control({
      on: this.on,
      off: this.off,
    });
    this.state = {
      type: APP_MODAL_ID_MAIN,
    };
  }

  componentWillUnmount() {
    this.modal.close();
  }

  on = (modalId = APP_MODAL_ID_MAIN) => {
    this.setState({
      type: modalId,
    }, this.modal.open);
  };
  off = (modalId = APP_MODAL_ID_MAIN) => {
    this.setState({
      type: modalId,
    }, this.modal.close);
  };

  controlFunc = (ref) => {
    if (ref) {
      this.modal = ref.getWrappedInstance();
    }
  };

  render() {
    const {type} = this.state;
    const styles = this.getStyles();
    let {title} = this.props;
    if (!title) {
      title = <FormattedMessage {...i18n.spinnerDefaultTitle} />;
    }
    return (
      <Modal ref={this.controlFunc} type={type} style={styles.dialogWrap}>
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