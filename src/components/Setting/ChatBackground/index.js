import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import {injectIntl} from 'react-intl';
import {ActivityIndicator, FlatList, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import {arrowBackIcon} from '../../BaseUI/Utile/index';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import AvatarBox from '../../../containers/Unit/AvatarBox';

class ChatBackgroundComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedBackGround: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {backGroundPicList, selectedWallpaper} = nextProps;
    if (backGroundPicList.length > 0 && selectedWallpaper >= 0) {
      this.setState({
        selectedBackGround: {
          index: selectedWallpaper,
          avatar: backGroundPicList[selectedWallpaper],
        },
      });
    }
  }

  render() {
    const {intl, goBack, backGroundPicList, startAvatarDownload, stopAvatarDownload, saveSelectedWallpaper} = this.props;
    const styles = this.getStyles();
    const showIndicator = !backGroundPicList || backGroundPicList.length === 0;

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          rightElement="check"
          onRightElementPress={() => {
            if (this.state.selectedBackGround) {
              saveSelectedWallpaper(this.state.selectedBackGround.index);
              goBack();
            }
          }}
          centerElement={intl.formatMessage(i18n.settingChatBackground)}
        />
        <View style={styles.container}>
          <View style={styles.backPic}>
            {this.state.selectedBackGround &&
            <AvatarBox
              style={styles.avatarBack}
              image={this.state.selectedBackGround}
              startAvatarDownload={startAvatarDownload}
              stopAvatarDownload={stopAvatarDownload}
            />}
          </View>

          {showIndicator && <ActivityIndicator size="large" color="#3298ee" style={styles.indicator}/>}

          <View style={styles.listBack}>
            <FlatList
              data={backGroundPicList}
              keyExtractor={(item, index) => ('wallpaper-' + index)}
              renderItem={this.renderUserItem}
              horizontal={true}
            />
          </View>
        </View>
      </View>
    );
  }

  renderUserItem = (item) => {
    const {startAvatarDownload, stopAvatarDownload} = this.props;
    const styles = this.getStyles();
    const image = {
      index: item.index,
      avatar: item.item,
    };
    return <TouchableOpacity activeOpacity={1} style={styles.smallAvatarBack}
      onPress={() => this.setState({selectedBackGround: image})}>
      <AvatarBox
        style={styles.smallAvatar}
        image={image}
        startAvatarDownload={startAvatarDownload}
        stopAvatarDownload={stopAvatarDownload}
      />
    </TouchableOpacity>;
  };
}

ChatBackgroundComponent.propTypes = {
  goBack: PropTypes.func.isRequired,
  backGroundPicList: PropTypes.array.isRequired,
  startAvatarDownload: PropTypes.func.isRequired,
  stopAvatarDownload: PropTypes.func.isRequired,
  saveSelectedWallpaper: PropTypes.func.isRequired,
  selectedWallpaper: PropTypes.number,
};

export default injectIntl(ChatBackgroundComponent);