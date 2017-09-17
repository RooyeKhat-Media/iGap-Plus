import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {ActionSheet, Avatar, FlatList, ListItem} from '../BaseUI';

class RoomsListComponent extends React.Component {
  render() {
    const {intl, loading, roomList} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          {!loading ? (<FlatList
            data={roomList}
            renderItem={({item}) =>
              (<ListItem key={item.getId().toString()}
                centerElement={{
                  primaryText: item.getTitle(), secondaryText: item.getLastMessage() ?
                    (item.getLastMessage().getMessage() ? item.getLastMessage().getMessage() :
                      <Text>Attachment</Text>) : 'No Message',
                }}
                leftElement={<Avatar size={40} style={{container: {backgroundColor: item.getColor()}}}
                  text={item.getInitials()}/>}/>)}/>) : (<Text>Waiting ... </Text>)}
        </View>
        <ActionSheet control={(action) => {
          this.action = action;
        }}/>
      </View>
    );
  }
}

RoomsListComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomsListComponent);