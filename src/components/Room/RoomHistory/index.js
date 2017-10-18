import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {FlatList, ListItem, Toolbar} from '../../BaseUI/index';
import styles from './index.styles';
import RoomMessage from '../../../containers/Unit/RoomMessage';

class RoomHistoryComponent extends React.Component {
  render() {
    const {room, messageList, goRoomInfoBtn, goBack} = this.props;
    return (
      <View style={styles.container}>
        <Toolbar
          style={styles.toolBar}
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={
            <ListItem
              centerElement={{
                primaryText: room.title,
                secondaryText: 'Online',
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
        />
        <View style={styles.mainWrap}>
          <View style={styles.messageListWrap}>

            <FlatList
              data={messageList}
              keyExtractor={(item, index) => ('history-' + item)}
              renderItem={({item}) => (<RoomMessage roomType={room.type} roomId={room.id} messageId={item}/>)}/>

          </View>
          <View style={styles.editorWrap}>

          </View>
        </View>
      </View>
    );
  }
}

RoomHistoryComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomHistoryComponent);