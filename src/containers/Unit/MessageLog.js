import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FormattedMessage} from 'react-intl';
import {getLogMessageParams} from '../../utils/messenger';
import {primary} from '../../themes/default/index';
import putUserState from '../../modules/Entities/RegisteredUsers';
import putRoomState from '../../modules/Entities/Rooms';
import {connect} from 'react-redux';
import {getLogMessageDetails} from '../../selector/entities/roomMessage';

/**
 *
 * @param message {ProtoRoomMessage}
 * @returns {XML}
 */
class MessageLog extends React.PureComponent {

  async componentDidMount() {
    const {message} = this.props;

    const roomId = message.roomId;
    const userId = message.authorUser;

    await putRoomState(roomId);
    if (userId) {
      await putUserState(userId);
    }

    if (message.log && message.log.getTargetUser()) {
      const targetUserId = message.log.getTargetUser().getId().toString();
      await putUserState(targetUserId);
    }
  }

  render() {
    const {message, messageDetail} = this.props;
    const logParams = getLogMessageParams(message, messageDetail);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {logParams ? ( <FormattedMessage {...logParams}/>) : null}
        </Text>
      </View>);
  }
}

const makeMapStateToProps = () => {
  return (state, props) => ({
    messageDetail: getLogMessageDetails(state, props),
  });
};

export default connect(
  makeMapStateToProps
)(MessageLog);


const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: primary,
    borderRadius: 15,
  },
  text: {
    color: 'white',
  },
});