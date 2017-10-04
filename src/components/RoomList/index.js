import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {ActionSheet, FlatList} from '../BaseUI';
import RoomListItem from '../../containers/Unit/RoomListItem';

class RoomListComponent extends React.Component {
  render() {
    const {onPress, roomList} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <FlatList
            data={roomList}
            keyExtractor={(item, index) => ('room-' + item)}
            renderItem={({item}) =>
              (<RoomListItem onPress={() => {
                onPress(item);
              }} roomId={item}/>)}/>
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