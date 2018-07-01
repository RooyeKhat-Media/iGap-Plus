/* eslint-disable import/no-unresolved, import/extensions */
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {appTheme} from '../../../themes/default/index';
import {FormattedMessage} from 'react-intl';
import i18n from '../../../i18n';
import {uniqueId} from 'lodash';
import {Proto} from '../../../modules/Proto/index';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {IRANSans_Bold} from '../../../constants/fonts/index';

class RoomActions extends PureComponent {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {actionList, roomType} = this.props;
    const styles = this.getStyles();
    if (!actionList || !actionList.length) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>{actionList.map((action, index) =>
          (<FormattedMessage
            key={'typing-' + index} {...(roomType === Proto.Room.Type.CHAT ? i18n.roomHistoryActionChat : i18n.roomHistoryAction)}
            values={{count: action.users.length, author: action.users[0], action: action.action}}/>)
        )}</Text>
      </View>
    );
  }
}

RoomActions.propTypes = {};

export default RoomActions;

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          top: -40,
          padding: 5,
          borderRadius: 15,
          backgroundColor: appTheme.primary,
          alignSelf: 'center',
          position: 'absolute',

        },
        textContainer: {
          ...IRANSans_Bold,
          color: '#fff',
        },
      },
    },
  ],
  true,
];