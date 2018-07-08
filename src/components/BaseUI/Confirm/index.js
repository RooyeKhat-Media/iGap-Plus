import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {DialogModal} from '../index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n';

class Confirm extends PureComponent {
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
      checkbox: null,
    };
  }

  open = (title, description, onConfirm, checkbox = null) => {
    this.setState({title, description, onConfirm, checkbox}, this.dialog.open);
  };

  render() {
    const {intl, type} = this.props;
    const {onConfirm, title, description, checkbox} = this.state;
    return (
      <DialogModal
        control={(dialog) => {
          this.dialog = dialog;
        }} type={type}
        actions={[
          {
            label: intl.formatMessage(i18n.dismiss),
          },
          {
            label: intl.formatMessage(i18n.ok),
            onPress: onConfirm,
          },
        ]}
        title={(<Text>{title && (<FormattedMessage {...title} />)}</Text>)}
        content={(<Text>{description && (<FormattedMessage {...description} />)}</Text>)}
        checkbox={checkbox}
      />
    );
  }
}

Confirm.propTypes = {
  control: PropTypes.func.isRequired,
  type: PropTypes.string,
  intl: intlShape.isRequired,
};

export default injectIntl(Confirm);