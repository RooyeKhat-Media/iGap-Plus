import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Avatar, FlatList, ListItem, Toolbar} from '../BaseUI';
import styles from './index.styles';
import RoomMessage from '../../containers/RoomMessage';

class RoomHistoryComponent extends React.Component {
  render() {
    const {intl, room, messageList, goBack} = this.props;
    return (
      <View style={styles.container}>
        <Toolbar
          style={styles.toolBar}
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={
            <ListItem
              centerElement={{
                primaryText: room.getTitle(),
                secondaryText: 'Online',
              }}
              style={styles.toolBarListItem}
              leftElement={<Avatar size={40}
                style={{container: {backgroundColor: room.getColor()}}}
                text={room.getInitials()}
              />}
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
        />
        <View style={styles.mainWrap}>
          <View style={styles.messageListWrap}>

            <FlatList
              data={messageList}
              keyExtractor={(item, index) => ('history-' + item.getMessageId().toString())}
              renderItem={({item}) => (<RoomMessage message={item}/>)}/>

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