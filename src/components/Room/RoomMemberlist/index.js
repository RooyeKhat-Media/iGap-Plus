import React from 'react';
import PropTypes from 'prop-types';
import {findNodeHandle, NativeModules, ScrollView, StyleSheet, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {FlatList, IconToggle, ListItem, Toolbar} from '../../BaseUI/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.styles';
import i18n from '../../../i18n/index';
import UserListItem from '../../../containers/Unit/UserListItem';
import Avatar from '../../../containers/Unit/Avatar';

const UIManager = NativeModules.UIManager;

class RoomMemberlistComponent extends React.Component {
  constructor(props) {
    super(props);
    this.menu = {};
  }

  onMenuPressed = (id, labels) => {
    const {onPress} = this.props;
    UIManager.showPopupMenu(
      findNodeHandle(this.menu[id]),
      labels,
      () => {
      },
      (result, index) => {
        if (onPress) {
          onPress({action: 'menu', result, index});
        }
      },
    );
  };

  render() {
    const {intl, memberList, onScroll, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={intl.formatMessage(i18n.roomMemberListToolbarTitle)}/>
        <ScrollView style={styles.scroll}>
          <FlatList
            onScroll={onScroll}
            data={memberList}
            keyExtractor={(item, index) => ('member-' + item.id)}
            renderItem={({item}) =>
              <UserListItem userId={item.getUserId().toString()}
                render={(user) =>
                  (<ListItem
                    leftElement={<Avatar userId={user.id} size={52}/>}
                    centerElement={{
                      primaryText: user.displayName,
                      secondaryText: '@' + user.username,
                    }}
                    onPress={() => this.onMenuPressed(user.id, ['action1', 'action2'])}
                    rightElement={(
                      <View
                        key={'menuIcon-' + user.id}>
                        <View
                          ref={(c) => {
                            this.menu[user.id] = c;
                          }}
                          style={{
                            backgroundColor: 'transparent',
                            width: StyleSheet.hairlineWidth,
                            height: StyleSheet.hairlineWidth,
                          }}
                        />
                        <IconToggle name="more-vert"/>
                      </View>
                    )}
                  />)
                }/>}
          />
        </ScrollView>
      </View>
    );
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };
}

RoomMemberlistComponent.propTypes = {
  intl: intlShape.isRequired,
  room: PropTypes.object,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(RoomMemberlistComponent);