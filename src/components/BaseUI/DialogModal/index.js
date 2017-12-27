import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from '../index';
import {Text, View} from 'react-native';
import styles from './index.style';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n';

class DialogModal extends Component {

  controlRef = (ref) => {
    const {control} = this.props;
    if (ref) {
      this.modal = ref.getWrappedInstance();
      control(this.modal);
    }
  };

  render() {
    const {intl, type, title, content, actions} = this.props;
    return (
      <Modal ref={
        this.controlRef} type={type} style={styles.dialogWrap}>
        <View style={styles.dialog}>
          <Text style={styles.dialogHeader}>{title}</Text>
          <Text style={styles.dialogContent}>{content}</Text>
          <View style={styles.dialogActions}>
            {actions ? actions.map((action, idex) => (
              <Button
                key={'action-' + idex}
                upperCase={false}primary
                text={action.label}
                onPress={() => {
                  if (action.onPress) {
                    action.onPress();
                  }
                  this.modal.close();
                }}
                style={styles.dialogBtn}
              />
            )) : (
              <Button
                primary
                text={intl.formatMessage(i18n.ok)}
                onPress={this.modal.close}
                style={styles.dialogBtn}
              />
            )}

          </View>
        </View>
      </Modal>
    );
  }
}

DialogModal.propTypes = {
  control: PropTypes.func.isRequired,
  type: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onPress: PropTypes.func,
    })
  ),
  intl: intlShape.isRequired,
};

export default injectIntl(DialogModal);