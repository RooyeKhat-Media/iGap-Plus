import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {FlatList, Toolbar} from '../../BaseUI';
import UserListItem from '../../../containers/Unit/UserListItem';
import Spinner from '../../BaseUI/Spinner/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class ContactPickerComponent extends React.Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {intl, onSubmit, loaderControl, goBack, title, activeSubmitBtn, selectedList, onSelectItem, contactList} = this.props;
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          rightElement={activeSubmitBtn ? 'done' : null}
          onRightElementPress={onSubmit}
          onLeftElementPress={goBack}
          centerElement={intl.formatMessage(title)}
        />
        <View style={styles.container}>
          <FlatList
            data={contactList}
            keyExtractor={this.userKeyExtractor}
            extraData={selectedList}
            renderItem={this.renderUserItem}
          />
          <Spinner control={loaderControl}/>
        </View>
      </View>
    );
  }
  userKeyExtractor = (item, index) => ('contact-' + item.id);
  renderUserItem = ({item}) => {
    const {onSelectItem, selectedList} = this.props;
    return (<UserListItem userId={item.id} onPress={onSelectItem}
      selected={!!selectedList[item.id]} divider={item.divider}/>);
  };
}

ContactPickerComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(ContactPickerComponent);