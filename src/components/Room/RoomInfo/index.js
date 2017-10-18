import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';

class RoomInfoComponent extends React.Component {
  render() {
    const {goBack, room, countRoomHistory} = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text>room: {room.title}</Text>
          <Text>Media : {countRoomHistory ? countRoomHistory.media : null}</Text>
        </View>
      </View>
    );
  }
}

RoomInfoComponent.propTypes = {
  intl: intlShape.isRequired,
  room: PropTypes.object,
  countRoomHistory: PropTypes.shape({
    media: PropTypes.number.isRequired,
    image: PropTypes.number.isRequired,
    video: PropTypes.number.isRequired,
    audio: PropTypes.number.isRequired,
    voice: PropTypes.number.isRequired,
    gif: PropTypes.number.isRequired,
    file: PropTypes.number.isRequired,
    url: PropTypes.number.isRequired,
  }),
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(RoomInfoComponent);