import React, {Component} from 'react';
import PropTypes from 'prop-types';
import i18n from '../../../../i18n/index';
import {Text} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {appTheme} from '../../../../themes/default/index';
import {uniqueId} from 'lodash';
import Api from '../../../../modules/Api/index';
import {CHAT_GET_ROOM} from '../../../../constants/methods/index';
import {goRoomHistory, goRoomInfo} from '../../../../navigators/SecondaryNavigator';
import {ChatGetRoom} from '../../../../modules/Proto/index';
import {connect} from 'react-redux';
import {getRoomTitle} from '../../../../selector/entities/room';
import {getUserTitle} from '../../../../selector/entities/registeredUser';
import Client from '../../../../modules/Api/Client';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class ForwardFrom extends Component {

  onForwardClick = async () => {
    if (Client.instance.isLoggedIn) {
      const {roomId, userId} = this.props;
      if (roomId) {
        goRoomHistory(roomId, null, false);
      } else if (userId) {
        const chatGetRoom = new ChatGetRoom();
        chatGetRoom.setPeerId(userId);
        const chatGetRoomResponse = await Api.invoke(CHAT_GET_ROOM, chatGetRoom);
        goRoomInfo(chatGetRoomResponse.getRoom().getId().toString());
      }
    }
  };

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {author, intl} = this.props;
    const styles = this.getStyles();
    return (
      <Text numberOfLines={1} style={styles.normalText}>
        {intl.formatMessage(i18n.roomMessageForwardFrom)}
        {' '}
        {
          author ?
            <Text style={styles.text} onPress={this.onForwardClick}>{author.title}</Text>
            :
            <Text>{intl.formatMessage(i18n.roomMessagePrivateRoom)}</Text>
        }
      </Text>
    );
  }
}

ForwardFrom.propTypes = {
  intl: intlShape.isRequired,
  roomId: PropTypes.string,
  userId: PropTypes.string,
  roomType: PropTypes.string,
};

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        text: {
          color: appTheme.primary,
        },
        normalText: {
          color: appTheme.primaryText,
        },
      },
    },
  ],
  true,
];

const mapStateToProps = (state, props) => {
  return {
    author: props.roomId ? getRoomTitle(state, props) : getUserTitle(state, props),
  };
};

export default connect(mapStateToProps)(injectIntl(ForwardFrom));