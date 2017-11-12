import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {DialogModal} from '../index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n';

class Confirm extends Component {
  constructor(props) {
    super(props);
    const {control} = props;
    control({
      open: this.open,
    });
    this.state = {
      onConfirm: null,
      title: null,
      description: null,
    };
  }

  open = (title, description, onConfirm) => {
    this.setState({title, description, onConfirm}, () => {
      this.dialog.open();
    });
  };

  render() {
    const {intl} = this.props;
    const {onConfirm, title, description} = this.state;
    return (
      <DialogModal
        control={(dialog) => {
          this.dialog = dialog;
        }}
        actions={[
          {
            label: intl.formatMessage(i18n.ok),
            onPress: onConfirm,
          },
          {
            label: intl.formatMessage(i18n.dismiss),
          },
        ]}
        title={(<Text>{title && (<FormattedMessage {...title} />)}</Text>)}
        content={(<Text>{title && (<FormattedMessage {...description} />)}</Text>)}
      />
    );
  }
}

Confirm.propTypes = {
  control: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(Confirm);