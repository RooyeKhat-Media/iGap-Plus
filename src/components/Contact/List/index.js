import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {Avatar, FlatList, ListItem, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class ContactListComponent extends React.Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };


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
    const styles = this.getStyles();
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          rightElement="add"
          onRightElementPress={goContactNew}
          centerElement={intl.formatMessage(i18n.contactListTitleToolbar)}
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