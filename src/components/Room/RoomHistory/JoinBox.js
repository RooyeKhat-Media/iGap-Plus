import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {gray800} from '../../../themes/default/index';
import {Button} from '../../BaseUI';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/en';

class JoinBox extends Component {
  render() {
    const {isParticipant, roomMute, isPublic, joinBoxToggle, intl} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.controlBox}>
          {(isPublic && !isParticipant) &&
          (<Button primary onPress={joinBoxToggle} text={intl.formatMessage(i18n.roomHistoryJoinBoxJoin)}/>)}
          {(isParticipant) && (roomMute ?
            (<Button primary onPress={joinBoxToggle} text={intl.formatMessage(i18n.roomHistoryJoinBoxUnMute)}/>) :
            (<Button primary onPress={joinBoxToggle} text={intl.formatMessage(i18n.roomHistoryJoinBoxMute)}/>))}
        </View>
      </View>
    );
  }
}

JoinBox.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(JoinBox);

const styles = StyleSheet.create({
  container: {
  },
  controlBox: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 8,
    borderColor: gray800,
    minHeight: 50,
  },
});