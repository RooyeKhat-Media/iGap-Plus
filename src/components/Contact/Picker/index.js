import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {FlatList, Toolbar} from '../../BaseUI';
import UserListItem from '../../../containers/Unit/UserListItem';

class ContactPickerComponent extends React.Component {
  render() {
    const {intl, onSubmit, goBack, title, activeSubmitBtn, selectedList, onSelectItem, contactList} = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="arrow-back"
          rightElement={activeSubmitBtn ? 'done' : null}
          onRightElementPress={onSubmit}
          onLeftElementPress={goBack}
          centerElement={intl.formatMessage(title)}/>
        <View style={styles.container}>
          <FlatList
            data={contactList}
            keyExtractor={(item, index) => ('contact-' + item.id)}
            extraData={selectedList}
            renderItem={({item}) => <UserListItem userId={item.id} onPress={onSelectItem}
              selected={!!selectedList[item.id]} divider={item.divider}/>}
          />
        </View>
      </View>
    );
  }
}

ContactPickerComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(ContactPickerComponent);