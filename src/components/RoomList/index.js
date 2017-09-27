import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {ActionSheet, Avatar, FlatList, ListItem} from '../BaseUI';

class RoomListComponent extends React.Component {
  render() {
    const {goRoom, loading, roomList} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          {!loading ? (<FlatList
            data={roomList}
            keyExtractor={(item, index) => ('room-' + item.getId().toString())}
            renderItem={({item}) =>
              (<ListItem
                onPress={() => {
                  goRoom(item.getId());
                }}
                centerElement={{
                  primaryText: item.getTitle(),
                  secondaryText: item.getLastMessage() ?
                    (item.getLastMessage().getMessage() ?
                      item.getLastMessage().getMessage() :
                      'Attachment') : 'No Message',
                }}
                leftElement={<Avatar size={40}
                  style={{container: {backgroundColor: item.getColor()}}}
                  text={item.getInitials()}
                />}
              />)
            }/>) :
            (<Text>Waiting ... </Text>)}

        </View>
        <ActionSheet control={(action) => {
          this.action = action;
        }}/>
      </View>
    );
  }
}

RoomListComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomListComponent);