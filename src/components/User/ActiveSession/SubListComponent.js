import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {FormattedMessage, FormattedRelative, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/index';
import {DialogModal, ListItem} from '../../BaseUI/index';

class SubListComponent extends Component {

  render() {
    const {intl, terminateSession, item, showTerminate} = this.props;

    return (
      <View>
        <ListItem
          style={{container: {height: 85, marginTop: 5, paddingTop: 5}}}
          onPress={() => {
            showTerminate && this.dialog.open();
          }}
          centerElement={
            <View style={styles.section1}>
              <View style={styles.sub1}>
                <Text style={styles.textStyle}>{item.getAppName() + '  ' + intl.formatMessage(i18n.activeSessionVersion)
                + ' ' + item.getAppVersion() + '  ,  '}</Text>
                <Text style={styles.textStyle}>{showTerminate ? <FormattedRelative updateInterval={0}
                  value={item.getActiveTime() * 1000}/> : intl.formatMessage(i18n.activeSessionOnline)}</Text>
              </View>

              <Text style={styles.textStyleNormal}><FormattedMessage {...i18n.activeSessionPlatform}
                values={{platform: item.getPlatform()}}/>{' ' + intl.formatMessage(i18n.activeSessionVersion)
              + ' ' + item.getPlatformVersion() + '  ' + item.getDeviceName()}</Text>
              <Text style={styles.textStyleSub}>{item.getIp() + '   ' + item.getCountry()}</Text>
            </View>
          }/>

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.activeSessionAreYouSure}/>}
        content={<FormattedMessage {...i18n.activeSessionCloseThisSession}/>}
        actions={[
          {
            label: intl.formatMessage(i18n.ok),
            onPress: () => {
              terminateSession(item.getSessionId());
            },
          },
          {
            label: intl.formatMessage(i18n.cancel),
            onPress: () => {
            },
          },
        ]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section1: {
    flex: 1,
  },
  section2: {
    justifyContent: 'center',
  },
  sub1: {
    flexDirection: 'row',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textStyleNormal: {
    color: 'black',
    fontSize: 14,
  },
  textStyleSub: {
    color: 'gray',
    fontSize: 14,
  },
  dividerLine: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    margin: 5,
  },
  active: {
    backgroundColor: '#927',
  },
});
SubListComponent.propTypes = {
  intl: intlShape.isRequired,
  terminateSession: PropTypes.func.isRequired,
};
export default injectIntl(SubListComponent);