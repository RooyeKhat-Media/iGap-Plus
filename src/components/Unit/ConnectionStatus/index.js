/* eslint-disable import/no-unresolved, import/extensions */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {FormattedMessage} from 'react-intl';
import {CLIENT_STATUS} from '../../../modules/Api/index';
import i18n from '../../../i18n';
import styleSheet from './index.styles';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class ConnectionStatusComponent extends PureComponent {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {status, showAuthenticating} = this.props;
    if (status === CLIENT_STATUS.LOGGED_IN || (!showAuthenticating && status === CLIENT_STATUS.SECURED)) {
      return null;
    }
    return (
      <View style={styles.container}>
        {(status === CLIENT_STATUS.DISCONNECTED || status === CLIENT_STATUS.CONNECTING) && (
          <Text style={[styles.textContainer, styles.connecting]}>
            <FormattedMessage {...i18n.connectionStatusConnecting}/>
          </Text>
        )}
        {(status === CLIENT_STATUS.CONNECTED) && (
          <Text style={[styles.textContainer, styles.securing]}>
            <FormattedMessage {...i18n.connectionStatusSecuring}/>
          </Text>
        )}
        {(showAuthenticating && status === CLIENT_STATUS.SECURED) && (
          <Text style={[styles.textContainer, styles.authenticating]}>
            <FormattedMessage {...i18n.connectionStatusAuthenticating}/>
          </Text>
        )}
      </View>
    );
  }
}

ConnectionStatusComponent.propTypes = {
  status: PropTypes.symbol.isRequired,
  showAuthenticating: PropTypes.bool.isRequired,
};

export default ConnectionStatusComponent;