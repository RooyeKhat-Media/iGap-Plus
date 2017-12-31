import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from '../../BaseUI';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/en';

class JoinBox extends Component {
  render() {
    const {isParticipant, roomMute, isPublic, joinBoxToggle, intl} = this.props;
    const style = {container: {height: 50}};
    return (
      <View>
        {(isPublic && !isParticipant) &&
        (<Button primary onPress={joinBoxToggle} style={style}
          text={intl.formatMessage(i18n.roomHistoryJoinBoxJoin)}/>)}
        {(isParticipant) && (roomMute ?
          (<Button primary onPress={joinBoxToggle} style={style}
            text={intl.formatMessage(i18n.roomHistoryJoinBoxUnMute)}/>) :
          (<Button primary onPress={joinBoxToggle} style={style}
            text={intl.formatMessage(i18n.roomHistoryJoinBoxMute)}/>))}
      </View>
    );
  }
}

JoinBox.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(JoinBox);
