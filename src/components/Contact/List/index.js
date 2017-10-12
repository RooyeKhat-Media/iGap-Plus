import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {Avatar, FlatList, ListItem, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';

class ContactListComponent extends React.Component {
  render() {
    const {intl, goBack, goContactNew, loading, contactList} = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="arrow-back"
          rightElement="add"
          onRightElementPress={goContactNew}
          onLeftElementPress={goBack}
          centerElement={intl.formatMessage(i18n.contactListTitleToolbar)}/>
        <View style={styles.container}>
          {loading && !contactList.length ? (<Text>Please Wait ...</Text>) :
            (<FlatList
              data={contactList}
              keyExtractor={(item, index) => ('contact-' + item.getId())}
              renderItem={({item}) =>
                (<ListItem key={item.getId()}
                  centerElement={{primaryText: item.getDisplayName(), secondaryText: item.getPhone().toString()}}
                  leftElement={<Avatar style={{container: {backgroundColor: item.getColor()}}}
                    text={item.getInitials()}/>}
                  style={{container: {backgroundColor: 'transparent', paddingLeft: 0}}}/>
                )}/>)}
        </View>
      </View>
    );
  }
}

ContactListComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(ContactListComponent);