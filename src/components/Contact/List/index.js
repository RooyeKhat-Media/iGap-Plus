import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {Avatar, FlatList, ListItem, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';

class ContactListComponent extends React.Component {
  render() {
    const {intl, goBack, loading, contactList} = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="arrow-back"
          rightElement="more-vert"
          onLeftElementPress={goBack}
          centerElement={intl.formatMessage(i18n.contactListTitle)}/>
        <View style={styles.container}>

          {loading ? (<Text>Please Wait ...</Text>) :
            ( <FlatList
              data={contactList}
              renderItem={({item}) =>
                (<TouchableOpacity key={item.getId()}>
                  <ListItem centerElement={{primaryText: item.getDisplayName(), secondaryText: item.getPhone()}}
                    leftElement={<Avatar text={item.getInitials()}/>}
                    style={{container: {backgroundColor: 'transparent', paddingLeft: 0}}}/>
                </TouchableOpacity>)}/>)}

        </View>
      </View>
    );
  }
}

ContactListComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(ContactListComponent);