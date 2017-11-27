import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import Gallery from 'react-native-image-gallery';
import {Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import LoadingDots from '../../BaseUI/LoadingDots/index';
import {menuAction} from '../../../screens/Room/AvatarListScreen';
import AvatarBox from '../../../containers/Unit/AvatarBox';

class AvatarListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSelectedIndex: 0,
    };
    this.menuItem = [];
    this.menuActionList = [];
  }

  componentWillReceiveProps(nextProps) {
    const {intl} = this.props;
    this.menuItem = [];
    this.menuActionList = [];
    if (nextProps.access) {
      const {accessDeleteAvatar, accessSaveToGallery, accessShareAvatar} = nextProps.access;
      if (accessSaveToGallery) {
        this.menuItem.push(intl.formatMessage(i18n.avatarListSaveToGallery));
        this.menuActionList.push(menuAction.save);
      }
      if (accessShareAvatar) {
        this.menuItem.push(intl.formatMessage(i18n.avatarListShare));
        this.menuActionList.push(menuAction.share);
      }
      if (accessDeleteAvatar) {
        this.menuItem.push(intl.formatMessage(i18n.avatarListDeletePhoto));
        this.menuActionList.push(menuAction.delete);
      }
    }
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  onPageSelected = (index) => {
    this.setState({imageSelectedIndex: index});
  };

  imageComponent = (imageProps) => {
    const {startAvatarDownload, stopAvatarDownload} = this.props;
    return (<AvatarBox {...imageProps}
      startAvatarDownload={startAvatarDownload}
      stopAvatarDownload={stopAvatarDownload}/>);
  };

  render() {
    const {goBack, avatarList, menuClick} = this.props;
    const {imageSelectedIndex} = this.state;
    const styles = this.getStyles();
    if (avatarList === undefined || avatarList === null) {
      return (<LoadingDots style={styles.loading}/>);
    }
    if (avatarList.length === 0) {
      goBack();
      return null;
    }
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={<Text style={styles.countAvatar}>{imageSelectedIndex + 1} / {avatarList.length}</Text>}
          rightElement={{
            menu: {
              icon: 'more-vert',
              labels: this.menuItem,
            },
          }}
          onRightElementPress={(result) => menuClick(this.menuActionList[result.index], imageSelectedIndex)}
        />
        <Gallery
          style={styles.galleryStyle}
          images={avatarList}
          onPageSelected={this.onPageSelected}
          imageComponent={this.imageComponent}
        />
      </View>
    );
  }
}

AvatarListComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  avatarList: PropTypes.array,
  access: PropTypes.object.isRequired,
  menuClick: PropTypes.func.isRequired,
  startAvatarDownload: PropTypes.func.isRequired,
  stopAvatarDownload: PropTypes.func.isRequired,
};

export default injectIntl(AvatarListComponent);