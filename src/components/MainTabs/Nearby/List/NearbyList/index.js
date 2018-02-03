import React, {Component} from 'react';
import {Text} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {ListItem} from '../../../../../components/BaseUI';
import UserListItem from '../../../../../containers/Unit/UserListItem';
import i18n from '../../../../../i18n';
import PropTypes from 'prop-types';
import Avatar from '../../../../../containers/Unit/Avatar';

class ListNearbyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  async componentDidMount() {
    const {comment} = this.state;
    const {nearbyUser, getCommentForUser} = this.props;
    const nearbyUserProto = nearbyUser.item;
    if (!comment) {
      let serverCommentResult = await getCommentForUser(nearbyUserProto.getUserId());
      this.setState({
        comment: serverCommentResult.getComment(),
      });
    }
  }

  render() {
    const {comment} = this.state;
    const {nearbyUser, mapOnMarkerClick, intl} = this.props;
    let distance = nearbyUser.item.getDistance();
    distance = (distance < 1000 ?
      intl.formatMessage(i18n.shortMeter, {distance}) :
      intl.formatMessage(i18n.shortKilometer, {distance: Math.floor(distance / 1000)}));

    return (
      <UserListItem
        userId={nearbyUser.item.getUserId().toString()}
        render={(userProps) => (
          <ListItem
            style={styleSheet.listItem}
            onPress={() => mapOnMarkerClick(userProps.user.id)}
            leftElement={<Avatar userId={userProps.user.id} size={52}/>}
            centerElement={{
              primaryText: userProps.user.displayName,
              secondaryText: comment || ' ',
            }}
            rightElement={(<Text>{distance}</Text>)}
          />
        )}/>
    );
  }
}

ListNearbyComponent.propTypes = {
  intl: intlShape.isRequired,
  nearbyUser: PropTypes.object.isRequired,
  getCommentForUser: PropTypes.func.isRequired,
  mapOnMarkerClick: PropTypes.func.isRequired,
};

export default injectIntl(ListNearbyComponent);