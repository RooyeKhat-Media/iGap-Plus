import React from 'react';
import {Text, View} from 'react-native';
import {FormattedMessage} from 'react-intl';
import {getLogMessageParams} from '../../utils/messenger';
import {appTheme} from '../../themes/default/index';
import {uniqueId} from 'lodash';
import putUserState from '../../modules/Entities/RegisteredUsers';
import putRoomState from '../../modules/Entities/Rooms';
import {connect} from 'react-redux';
import {getLogMessageDetails} from '../../selector/entities/roomMessage';
import MemoizeResponsiveStyleSheet from '../../modules/Responsive/MemoizeResponsiveStyleSheet';

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

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
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


const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          paddingTop: 4,
          paddingBottom: 4,
          paddingRight: 15,
          paddingLeft: 15,
          backgroundColor: appTheme.primary,
          borderRadius: 15,
        },
        text: {
          color: 'white',
        },
      },
    },
  ],
  true,
];