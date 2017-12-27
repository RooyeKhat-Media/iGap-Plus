import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {FormattedRelative, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/index';
import {DialogModal, ListItem} from '../../BaseUI/index';
import {black1, gray1, gray2, red} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

class SubListComponent extends Component {

  render() {
    const {intl, terminateSession, item, showTerminate} = this.props;

    return (
      <View>
        <ListItem
          style={{container: {height: 100}, primaryText: {...IRANSans_Medium}}}
          onPress={() => {
            showTerminate && this.dialog.open();
          }}
          centerElement={
            <View style={styles.section1}>
              <Text
                style={styles.textStyle}>{item.getDeviceName() + ' , ' + intl.formatMessage(i18n.activeSessionPlatform, {platform: item.getPlatform()})}</Text>
              <Text
                style={styles.textStyleNormal}>{intl.formatMessage(i18n.activeSessionCountry) + ' : ' + item.getCountry()}</Text>
              <Text style={styles.textStyleNormal}>{intl.formatMessage(i18n.activeSessionLastActivity) + ' : '}
                {showTerminate ? <FormattedRelative updateInterval={0}
                  value={item.getActiveTime() * 1000}/> : intl.formatMessage(i18n.activeSessionOnline)}
              </Text>
              <View style={styles.rowField}>
                <Text style={styles.textStyleSub}>{'IP : ' + item.getIp()}</Text>
                {showTerminate &&
                <Text style={styles.textTerminate}>{intl.formatMessage(i18n.activeSessionTerminate)}</Text>}
              </View>

            </View>
          }
        />

        {showTerminate && <View style={styles.underLine}/>}

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={intl.formatMessage(i18n.activeSessionTerminateTitle)}
        content={intl.formatMessage(i18n.activeSessionCloseThisSession)}
        actions={[
          {
            label: intl.formatMessage(i18n.ok),
            onPress: () => {
              terminateSession(item.getSessionId());
            },
          },
          {
            label: intl.formatMessage(i18n.dismiss),
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
  rowField: {
    flexDirection: 'row',
  },
  underLine: {
    borderBottomWidth: 1,
    borderBottomColor: gray1,
    marginTop: 10,
    marginBottom: 15,
  },
  textStyle: {
    color: black1,
    ...IRANSans_Medium,
    marginBottom: 3,
  },
  textStyleNormal: {
    color: black1,
  },
  textStyleSub: {
    color: gray2,
  },
  textTerminate: {
    color: red,
    flex: 1,
    ...IRANSans_Medium,
    textAlign: 'right',
  },

});
SubListComponent.propTypes = {
  intl: intlShape.isRequired,
  terminateSession: PropTypes.func.isRequired,
};
export default injectIntl(SubListComponent);