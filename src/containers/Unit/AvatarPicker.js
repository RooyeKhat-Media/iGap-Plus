import React from 'react';
import {FileUtil} from 'react-native-file-system';
import {Image, TouchableOpacity} from 'react-native';
import {Avatar} from '../../components/BaseUI';
import PropTypes from 'prop-types';
import {prependFileProtocol} from '../../utils/core';
import {filePicker} from '../../utils/app';
import {uniqueId} from 'lodash';
import MemoizeResponsiveStyleSheet from '../../modules/Responsive/MemoizeResponsiveStyleSheet';

class AvatarPicker extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  onPress = async () => {
    const {selectPhoto} = this.props;
    try {
      const selectedFile = await filePicker(FileUtil.images());
      this.setState({selectedFile});
      selectPhoto(selectedFile);
    } finally {
    }
  };
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {selectedFile} = this.state;
    const styles = this.getStyles();
    return (
      <TouchableOpacity style={styles.avatarWrap} onPress={this.onPress}>
        {selectedFile ? (
          <Image source={{uri: prependFileProtocol(selectedFile.fileUri)}} style={styles.imageStyles}/>) :
          (<Avatar icon="camera-alt" size={120} style={styles.avatar}/>)}
      </TouchableOpacity>
    );
  }
}

AvatarPicker.propTypes = {
  selectPhoto: PropTypes.func.isRequired,
};

export default AvatarPicker;

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        avatarWrap: {
          margin: 10,
          alignSelf: 'center',
          height: 150,
        },
        imageStyles: {
          width: 150,
          height: 150,
          borderRadius: 75,
        },
      },
    },
  ],
  true,
];