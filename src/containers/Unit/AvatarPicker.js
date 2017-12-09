import React from 'react';
import RNFileSystem, {FileUtil} from 'react-native-file-system';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from '../../components/BaseUI';
import PropTypes from 'prop-types';
import {prependFileProtocol} from '../../utils/core';

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
      const selectedFile = await RNFileSystem.filePicker(FileUtil.images());
      this.setState({selectedFile});
      selectPhoto(selectedFile);
    } finally {
    }
  };

  render() {
    const {selectedFile} = this.state;
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

const styles = StyleSheet.create({
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
});