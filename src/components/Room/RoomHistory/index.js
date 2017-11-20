import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {FlatList, ListItem, Toolbar} from '../../BaseUI/index';
import styles from './index.styles';
import RoomMessage from '../../../containers/Unit/RoomMessage';
import SendBox from './SendBox';

class RoomHistoryComponent extends React.Component {
  render() {
    const {room, Form, messageList, selectedList, selectedCount, onMessagePress, onMessageLongPress} = this.props;
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
    const {selectedCount, goRoomInfoBtn, cancelSelected} = this.props;
    return (<Toolbar
      style={styles.toolBar}
      leftElement="close"
      onLeftElementPress={cancelSelected}
      centerElement={
        <ListItem
          centerElement={{
            primaryText: selectedCount,
          }}
          style={styles.toolBarListItem}
        />
      }
      rightElement={['reply', 'forward', 'delete']}
      onPress={goRoomInfoBtn}
    />);
  }
}

RoomHistoryComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomHistoryComponent);