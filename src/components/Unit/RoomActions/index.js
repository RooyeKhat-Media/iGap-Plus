/* eslint-disable import/no-unresolved, import/extensions */
import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {primary} from '../../../themes/default/index';
import {FormattedMessage} from 'react-intl';
import i18n from '../../../i18n';
import {Proto} from '../../../modules/Proto/index';

class RoomActions extends PureComponent {

  render() {
    const {actionList, roomType} = this.props;

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

const styles = StyleSheet.create({
  container: {
    top: -40,
    padding: 5,
    borderRadius: 15,
    backgroundColor: primary,
    alignSelf: 'center',
    position: 'absolute',

  },
  textContainer: {
    color: '#fff',
    fontWeight: 'bold',
  },
});