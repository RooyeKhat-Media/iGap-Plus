import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VideoPlayerComponent from '../../components/General/VideoPlayer/index';

class VideoPlayerScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const {uri, fileName} = this.props.navigation.state.params;
    return (
      <VideoPlayerComponent
        goBack={this.props.navigation.goBack}
        uri={uri}
        fileName={fileName}
      />
    );
  }
}

VideoPlayerScreen.propTypes = {
  uri: PropTypes.string,
  fileName: PropTypes.string,
};

export default VideoPlayerScreen;