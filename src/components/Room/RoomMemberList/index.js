import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {FlatList, IconToggle, ListItem, PopupMenu, Toolbar} from '../../BaseUI/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.styles';
import i18n from '../../../i18n/index';
import UserListItem from '../../../containers/Unit/UserListItem';
import Avatar from '../../../containers/Unit/Avatar';
import {textTitleStyle} from '../../../themes/default/index';

class RoomMemberListComponent extends React.Component {

  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.menu = {};
  }

  _keyExtractor = (item, index) => {
    return 'member-' + index + '-' + item.id;
  };

  _renderUser = ({user, item}) => {
    const {Role} = this.props;
    const uiTheme = this.context.uiTheme.MemberList;
    const styles = this.getStyles();

    const colors = {
      [Role.OWNER]: uiTheme.roleOwnerStarColor,
      [Role.ADMIN]: uiTheme.roleAdminStarColor,
      [Role.MODERATOR]: uiTheme.roleModeratorStarColor,
    };
    const {getActionList, doAction} = this.props;
    return (<ListItem
      leftElement={<Avatar userId={user.id} size={52}/>}
      centerElement={{
        primaryText: user.displayName,
        secondaryText: '@' + user.username,
      }}
      rightElement={(<View style={styles.rightElementWrap}>
        {item.role !== Role.MEMBER &&
        (<IconToggle
          name="star"
          color={colors[item.role]}
          style={styles.rightElement}
        />)}
        {getActionList(item.role) &&
        (<PopupMenu actionList={getActionList(item.role)}
          onPress={(action) => {
            doAction(item.userId, item.role, action);
          }}
        />)}
      </View>)}
      style={styles.listItem}
    />);
  };
  _renderItem = ({item}) => {
    return (
      <UserListItem
        item={item}
        userId={item.userId.toString()}
        render={this._renderUser}/>);
  };

  render() {
    const {intl, memberList, onScroll, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.roomMemberListToolbarTitle)}</Text>}
        />
        <View style={styles.container}>

          <FlatList
            onScroll={onScroll}
            data={memberList}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />

        </View>
      </View>
    );
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet(this.context.uiTheme.MemberList));
  };
}

RoomMemberListComponent.propTypes = {
  intl: intlShape.isRequired,
  room: PropTypes.object,
  memberList: PropTypes.array,
  onScroll: PropTypes.func.isRequired,
  getActionList: PropTypes.func.isRequired,
  doAction: PropTypes.func.isRequired,
  Role: PropTypes.object,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(RoomMemberListComponent);