import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Confirm, FlatList, ListItem, Toolbar} from '../../BaseUI/index';
import styles from './index.styles';
import RoomMessage from '../../../containers/Unit/RoomMessage';
import SendBox from './SendBox';

class RoomHistoryComponent extends React.Component {
  render() {
    const {room, Form, messageList, selectedList, selectedCount, onMessagePress, onMessageLongPress, conformControl} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.mainWrap}>
          <View style={styles.messageListWrap}>
            {!selectedCount ? this.renderBaseToolbar() : this.renderMessagePropToolbar()}
            <FlatList
              data={messageList}
              keyExtractor={(item, index) => ('history-' + item)}
              extraData={selectedList}
              renderItem={({item}) =>
                (<RoomMessage
                  onMessagePress={onMessagePress}
                  onMessageLongPress={onMessageLongPress}
                  selected={!!selectedList[item]}
                  roomType={room.type}
                  roomId={room.id}
                  messageId={item}/>)}/>
          </View>
          <Confirm control={conformControl}/>
          <SendBox Form={Form}/>
        </View>
      </View>
    );
  }

  renderBaseToolbar() {
    const {room, goRoomInfoBtn, goBack} = this.props;
    return (<Toolbar
      style={styles.toolBar}
      leftElement="arrow-back"
      onLeftElementPress={goBack}
      centerElement={
        <ListItem
          centerElement={{
            primaryText: room.title,
          }}
          style={styles.toolBarListItem}
        />
      }
      rightElement={{
        menu: {
          icon: 'more-vert',
          labels: [
            'Search',
            'Report',
          ],
        },
      }}
      onPress={goRoomInfoBtn}
    />);
  }

  renderMessagePropToolbar() {
    const {selectedCount, cancelSelected, selectedMessageAction, toolbarActions} = this.props;
    return (<Toolbar
      style={styles.toolBar}
      leftElement="close"
      onLeftElementPress={cancelSelected}
      centerElement={selectedCount.toString()}
      rightElement={toolbarActions}
      onRightElementPress={selectedMessageAction}
    />);
  }
}

RoomHistoryComponent.propTypes = {
  intl: intlShape.isRequired,
  room: PropTypes.object.isRequired,
  Form: PropTypes.object.isRequired,
  messageList: PropTypes.arrayOf(PropTypes.string),
  selectedList: PropTypes.object.isRequired,
  selectedCount: PropTypes.number,
  cancelSelected: PropTypes.func.isRequired,
  goRoomInfoBtn: PropTypes.func.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
  selectedMessageAction: PropTypes.func.isRequired,
  toolbarActions: PropTypes.arrayOf(PropTypes.string).isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(RoomHistoryComponent);