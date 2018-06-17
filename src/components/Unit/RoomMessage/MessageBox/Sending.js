import React from 'react';
import PropTypes from 'prop-types';
import {Text as BaseText, View} from 'react-native';
import Text from './Text';
import {min, uniqueId} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {appTheme} from '../../../../themes/default/index';
import {convertBytes} from '../../../../utils/filters';
import MessageElement from './MessageElement';
import {IRANSans_Medium} from '../../../../constants/fonts/index';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default class Sending extends MessageElement {

  getStyle = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {message, pickedFile} = this.props;
    const styles = this.getStyle();
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
        {(message && message.length) ? (<Text showText={true} message={message}/>) : null}
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

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
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
          ...IRANSans_Medium,
          fontSize: 14,
          color: appTheme.primary,
        },
        fileSize: {
          fontSize: 13,
          color: appTheme.secondaryText,
        },
        progressStyle: {
          marginTop: 10,
        },
      },
    },
  ],
  true,
];