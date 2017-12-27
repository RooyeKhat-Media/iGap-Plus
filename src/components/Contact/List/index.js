import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {Avatar, FlatList, ListItem, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import {textTitleStyle} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

class ContactListComponent extends React.Component {
  keyExtractor = (item) => {
    return 'contact-' + item.getId();
  };
  renderItem = ({item}) => {
    return (<ListItem key={item.getId()}
      centerElement={{primaryText: item.getDisplayName(), secondaryText: item.getPhone().toString()}}
      leftElement={<Avatar style={{container: {backgroundColor: item.getColor()}}}
        text={item.getInitials()}/>}
      style={{
        container: {backgroundColor: 'transparent', paddingLeft: 0},
        primaryText: {...IRANSans_Medium},
      }}/>
    );
  };

  render() {
    const {intl, goBack, goContactNew, loading, contactList} = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="arrow-back"
          rightElement="add"
          onRightElementPress={goContactNew}
          onLeftElementPress={goBack}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.contactListTitleToolbar)}</Text>}
        />
        <View style={styles.container}>
          {loading && !contactList.length ? (<Text>Please Wait ...</Text>) :
            (<FlatList
              data={contactList}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}/>)}
        </View>
      </View>
    );
  }
}

ContactListComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(ContactListComponent);