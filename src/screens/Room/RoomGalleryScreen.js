import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RoomGalleryComponent from '../../components/Room/RoomGallery/index';

class RoomGalleryScreen extends Component {
  render() {
    const {uri, dimensions, text, fileName} = this.props.navigation.state.params;
    return (
      <RoomGalleryComponent
        uri={uri}
        dimensions={dimensions}
        text={text}
        goBack={this.props.navigation.goBack}
        fileName={fileName}
      />
    );
  }
}

RoomGalleryScreen.propTypes = {
  uri: PropTypes.string,
  dimensions: PropTypes.object,
  text: PropTypes.string,
  fileName : PropTypes.string,
};

export default RoomGalleryScreen;