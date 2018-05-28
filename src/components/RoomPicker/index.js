import React, {Component} from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Toolbar} from '../BaseUI';
import styles from './index.styles';
import i18n from '../../i18n';
import SelectListModal from '../../components/BaseUI/SelectListModal';
import UserListItem from '../../containers/Unit/UserListItem';
import RoomListItem from '../../containers/Unit/RoomListItem';

class RoomPicker extends Component {
  render() {
    const {intl, data, oSubmit, goBack} = this.props;
    return (
      <View style={styles.wrapper}>
        <Toolbar
          centerElement={intl.formatMessage(i18n.roomPickerTitle)}
          rightElement="close"
          onRightElementPress={goBack}
        />
        {(data && data.length) && (<SelectListModal
          flexContainer={true}
          multi={true}
          searchable={true}
          renderItem={this._renderItem}
          onSubmit={oSubmit}
          data={data}
          autoFocus={false}/>)}
      </View>);
  }

  _renderItem(item, selected, onPress) {
    if (item.userId) {
      return (<UserListItem
        userId={item.userId}
        selected={selected}
        onPress={() => onPress(item)}
      />);
    } else {
      return (<RoomListItem
        roomId={item.roomId}
        disablePin={true}
        selected={selected}
        onPress={() => onPress(item)}
      />);
    }
  }
}

RoomPicker.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(RoomPicker);