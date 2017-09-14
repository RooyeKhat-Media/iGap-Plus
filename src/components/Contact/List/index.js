import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';

class ContactListComponent extends React.Component {
  render() {
    const {intl, goBack} = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="arrow-back"
          rightElement="more-vert"
          onLeftElementPress={goBack}
          centerElement={intl.formatMessage(i18n.contactListTitle)}/>
        <View style={styles.container}>

        </View>
      </View>
    );
  }
}

ContactListComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(ContactListComponent);