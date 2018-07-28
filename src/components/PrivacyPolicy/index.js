import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {View, WebView} from 'react-native';
import i18n from '../../i18n';
import {Toolbar} from '../BaseUI/index';
import {uniqueId} from 'lodash';
import MemoizeResponsiveStyleSheet from '../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {arrowBackIcon} from '../BaseUI/Utile/index';

class PrivacyPolicyComponent extends React.PureComponent {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, privacyPolicy, goBack} = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.registerTermsOfService)}
          showAuthenticating={false}
        />
        <WebView style={styles.webView} source={{html: privacyPolicy || ''}}/>
      </View>
    );
  }
}

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {
          flex: 1,
          backgroundColor: '#fff',
        },
        webView: {
          flex: 1,
          margin: 15,
        },
      },
    },
  ],
  true,
];

PrivacyPolicyComponent.propTypes = {
  privacyPolicy: PropTypes.string,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(PrivacyPolicyComponent);