import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text as BaseText, View} from 'react-native';
import Text from './Text';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {gray950, primary} from '../../../../themes/default/index';
import {convertBytes} from '../../../../utils/filters';
import MessageElement from './MessageElement';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default class Sending extends MessageElement {

  render() {
    const {message, pickedFile} = this.props;
    const controlBar = this.renderControlBar(
      boxWidth,
      <View style={styles.thumbnail}/>,
      {
        completedIcon: 'save',
        completedIconSize: 30,
        renderProgressBar: false,
      }
    );

    return (
      <View style={styles.container}>
        <View style={styles.fileWrap}>
          {controlBar}

          <View style={styles.fileInfoWrap}>
            <BaseText numberOfLines={1} style={styles.fileName}>
              {pickedFile && pickedFile.fileName}
            </BaseText>
            <BaseText style={styles.fileSize}>
              {pickedFile && convertBytes(pickedFile.fileSize)}
            </BaseText>
            {this.renderProgressBar(boxWidth - 100, styles.progressStyle)}
          </View>
        </View>
        {message && (<Text showText={true} message={message}/>)}
      </View>
    );
  }

}

Sending.propTypes = {
  message: PropTypes.string.isRequired,
  pickedFile: PropTypes.object.isRequired,
  uploading: PropTypes.object,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: 250,
  },
  fileWrap: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  thumbnail: {
    width: 80,
    height: 70,
  },
  fileInfoWrap: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fileName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: primary,
  },
  fileSize: {
    fontSize: 13,
    color: gray950,
  },
  progressStyle: {
    marginTop: 10,
  },
});