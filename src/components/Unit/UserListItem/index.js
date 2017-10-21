import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {ListItem as BaseListItem} from '../../BaseUI/index';
import Avatar from '../../../containers/Unit/Avatar';
import styles from './index.styles';

class UserListItem extends React.Component {
  render() {
    const {userId, divider, displayName, phoneNumber, onPress} = this.props;
    return (<View>
      {divider ?
        (<Text style={styles.divider}>{divider}</Text>) : null}
      <BaseListItem
        onPress={onPress}
        leftElement={<Avatar userId={userId} size={52} style={styles.avatar}/>}
        centerElement={{
          primaryText: displayName,
          secondaryText: phoneNumber,
        }}
      />
    </View>);
  }
}

UserListItem.propTypes = {
  intl: intlShape.isRequired,
  divider: PropTypes.string,
  userId: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  onPress: PropTypes.func,
};
export default injectIntl(UserListItem);