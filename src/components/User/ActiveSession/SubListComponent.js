import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {FormattedRelative, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/index';
import {DialogModal, ListItem} from '../../BaseUI/index';
import {appTheme, red} from '../../../themes/default/index';
import {uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../constants/fonts/index';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class SubListComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, terminateSession, item, showTerminate} = this.props;
    const styles = this.getStyles();
    return (
      <View>
        <ListItem
          style={{container: {height: 130}, primaryText: {...IRANSans_Medium}}}
          onPress={() => {
            showTerminate && this.dialog.open();
          }}
          centerElement={
            <View style={styles.section1}>
              <Text style={styles.textStyle} numberOfLines={1}>
                {item.getDeviceName() + ' , ' + intl.formatMessage(i18n.activeSessionPlatform, {platform: item.getPlatform()})}
              </Text>
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

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        section1: {
          flex: 1,
          marginTop: 10,
        },
        rowField: {
          flexDirection: 'row',
        },
        underLine: {
          borderBottomWidth: 1,
          borderBottomColor: appTheme.border,
          marginTop: 10,
        },
        textStyle: {
          color: appTheme.primaryText,
          ...IRANSans_Medium,
          textAlign: 'left',
        },
        textStyleNormal: {
          color: appTheme.primaryText,
          textAlign: 'left',
        },
        textStyleSub: {
          color: appTheme.secondaryText,
          textAlign: 'left',
        },
        textTerminate: {
          color: red,
          flex: 1,
          ...IRANSans_Medium,
          textAlign: 'right',
        },

      },
    },
  ],
  true,
];
SubListComponent.propTypes = {
  intl: intlShape.isRequired,
  terminateSession: PropTypes.func.isRequired,
};
export default injectIntl(SubListComponent);