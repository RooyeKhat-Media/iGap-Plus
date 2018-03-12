import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {Text, View, StyleSheet, WebView} from 'react-native';
import i18n from '../../i18n';
import {textTitleStyle} from '../../themes/default/index';
import {Toolbar} from '../BaseUI/index';

class PrivacyPolicyComponent extends React.Component {
  render() {
    const {intl, privacyPolicy, goBack} = this.props;
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.privacyPolicyTitle)}</Text>}
          showAuthenticating={false}
        />
        <WebView style={styles.root} source={{html: privacyPolicy}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

PrivacyPolicyComponent.propTypes = {
  privacyPolicy: PropTypes.string,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(PrivacyPolicyComponent);