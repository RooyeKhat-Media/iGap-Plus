import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Gallery from 'react-native-image-gallery';
import {PopupMenu, Toolbar} from '../../BaseUI/index';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {APP_MODAL_ID_SECONDARY} from '../../../constants/app';
import {saveToDownloads, saveToGallery} from '../../../utils/app';
import {prependFileProtocol} from '../../../utils/core';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class RoomGalleryComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  onMenuClick = (index) => {
    const {uri} = this.props;
    switch (index) {
      case 0:
        saveToGallery(prependFileProtocol(uri), 'image');
        break;
      case 1:
        saveToDownloads(uri);
        break;
    }
  };

  render() {
    const {uri, dimensions, text, fileName, goBack} = this.props;
    const showText = text.length > 0;
    const styles = this.getStyles();

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={<Text style={styles.toolbarText} numberOfLines={1} ellipsizeMode={'middle'}>{fileName}</Text>}
          rightElement={(<PopupMenu actionList={['saveToGallary', 'saveToDownload']} type={APP_MODAL_ID_SECONDARY}
            onPress={(index) => this.onMenuClick(index)}/>)}
        />
        <Gallery
          style={styles.galleryStyle}
          images={[{source: {uri: uri}, dimensions}]}
        />

        {showText &&
        <Text style={styles.messageText}>
          {text}
        </Text>
        }
      </View>
    );
  }
}

RoomGalleryComponent.propTypes = {
  uri: PropTypes.string,
  dimensions: PropTypes.object,
  text: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  fileName: PropTypes.string,
};

export default RoomGalleryComponent;