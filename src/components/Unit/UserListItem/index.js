import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {ListItem as BaseListItem} from '../../BaseUI/index';
import Avatar from '../../../containers/Unit/Avatar';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class UserListItem extends React.Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {userId, divider, displayName, phoneNumber, selected, onPress} = this.props;
    return (<View>
      {divider ?
        (<Text style={styles.divider}>{divider}</Text>) : null}
      <BaseListItem
        onPress={onPress}
        leftElement={<Avatar userId={userId} size={52}/>}
        centerElement={{
          primaryText: displayName,
          secondaryText: phoneNumber,
        }}
        style={(selected ? styles.selectedItem : {})}
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
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};
export default injectIntl(UserListItem);