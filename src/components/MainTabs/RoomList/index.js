import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {ActionSheet, FlatList, Toolbar} from '../../BaseUI/index';
import RoomListItem from '../../../containers/Unit/RoomListItem';

class RoomListComponent extends React.PureComponent {

  flatListKeyExtractor = (item, index) => ('room-' + item.id);

  flatListRenderItem = ({item}) => {
    const {onPress} = this.props;
    return (<RoomListItem onPress={onPress} roomId={item.id}/>);
  };

  render() {
    const {roomList} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Toolbar
            style={{titleText: {fontFamily: 'neuropolitical', fontWeight: '100'}}}
            centerElement="iGap+"/>

          <FlatList
            data={roomList}
            keyExtractor={this.flatListKeyExtractor}
            renderItem={this.flatListRenderItem}/>
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