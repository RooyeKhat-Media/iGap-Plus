import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dialog, DialogDefaultActions, Modal} from '../index';
import {View} from 'react-native';
import styles from './index.style';
import {injectIntl, intlShape} from 'react-intl';

class DialogModal extends Component {
  constructor(props) {
    super(props);
    const {control} = props;
    control({
      open: this.open,
      close: this.close,
    });
  }

  open = () => {
    this.modal.open();
  };
  close = () => {
    this.modal.close();
  };

  render() {
    const {title, content} = this.props;
    return (
      <Modal control={(modal) => {
        this.modal = modal;
      }}>
        <View style={styles.dialogWrap}>
          <Dialog style={styles.dialog}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Content>
              {content}
            </Dialog.Content>
            <Dialog.Actions>
              <DialogDefaultActions
                actions={['Dismiss']}
                onActionPress={() => {
                  this.close();
                }}
              />
            </Dialog.Actions>
          </Dialog>
        </View>
      </Modal>
    );
  }
}

DialogModal.propTypes = {
  control: PropTypes.func.isRequired,
  title: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(DialogModal);