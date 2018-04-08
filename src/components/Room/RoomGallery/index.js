import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Gallery from 'react-native-image-gallery';
import {Toolbar} from '../../BaseUI/index';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {textTitleStyle} from '../../../themes/default/index';

class RoomGalleryComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {uri, dimensions, text, fileName, goBack} = this.props;
    const showText = text.length > 0;
    const styles = this.getStyles();

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={<Text style={[textTitleStyle, {paddingRight: 20}]} numberOfLines={1}
            ellipsizeMode={'middle'}>{fileName}</Text>}/>
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
  fileName : PropTypes.string,
};

export default RoomGalleryComponent;