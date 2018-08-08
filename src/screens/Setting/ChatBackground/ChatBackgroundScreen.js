import React, {Component} from 'react';
import ChatBackgroundComponent from '../../../components/Setting/ChatBackground/index';
import {INFO_WALLPAPER, INFO_WALLPAPER_RESPONSE} from '../../../constants/methods/index';
import {InfoWallpaper, Proto} from '../../../modules/Proto/index';
import Api from '../../../modules/Api/index';
import {connect} from 'react-redux';
import {fileManagerDownload} from '../../../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER} from '../../../constants/fileManager';
import MetaData from '../../../models/MetaData';
import {METADATA_USER_SELECTED_WALLPAPER, METADATA_USER_WALLPAPER_DATA} from '../../../models/MetaData/constant';
import protoTable from '../../../modules/Proto';
import {objectToUint8Array} from '../../../utils/core';

let priority = 1000000;

class ChatBackgroundScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      picList: [],
      selectedWallpaper: -1,
    };
  }

  async componentDidMount() {
    const wallpaperData = await MetaData.load(METADATA_USER_WALLPAPER_DATA);
    const currentTime = (new Date()).getTime() / 1000;

    if (wallpaperData === null || wallpaperData.data === null || currentTime - wallpaperData.savedTime > 604800) {
      this.getBackGroundPic();
    } else {
      const responseProto = protoTable[INFO_WALLPAPER_RESPONSE].deserializeBinary(objectToUint8Array(wallpaperData.data));
      const selectedWallpaper = await MetaData.load(METADATA_USER_SELECTED_WALLPAPER);
      this.setState({
        picList: responseProto.getWallpaperList(),
        selectedWallpaper: selectedWallpaper !== null ? selectedWallpaper : -1,
      });
    }
  }

  getBackGroundPic = async () => {
    let infoWallpaper = new InfoWallpaper();
    infoWallpaper.setFit(InfoWallpaper.prototype.Fit.PHONE);
    const response = await Api.invoke(INFO_WALLPAPER, infoWallpaper);
    const selectedWallpaper = await MetaData.load(METADATA_USER_SELECTED_WALLPAPER);
    this.saveWallpaperData(response);
    this.setState({
      picList: response.getWallpaperList(),
      selectedWallpaper: selectedWallpaper !== null ? selectedWallpaper : -1,
    });
  };

  startAvatarDownload = (index) => {
    const {download} = this.props;
    download(this.state.picList[index].file);
  };

  stopAvatarDownload = (index) => {
    //backGround chat must download without stop
  };

  saveWallpaperData = (data) => {
    const saveData = {
      savedTime: (new Date()).getTime() / 1000,
      data: data.serializeBinary(),
    };
    MetaData.save(METADATA_USER_WALLPAPER_DATA, saveData);
  };

  saveSelectedWallpaper = (index) => {
    MetaData.save(METADATA_USER_SELECTED_WALLPAPER, index);
  };

  render() {
    return (
      <ChatBackgroundComponent
        goBack={this.props.navigation.goBack}
        backGroundPicList={this.state.picList}
        startAvatarDownload={this.startAvatarDownload}
        stopAvatarDownload={this.stopAvatarDownload}
        saveSelectedWallpaper={this.saveSelectedWallpaper}
        selectedWallpaper={this.state.selectedWallpaper}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    download: (attachment) => {
      dispatch(fileManagerDownload(
        FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
        attachment.getToken(),
        Proto.FileDownload.Selector.FILE,
        attachment.getSize(),
        attachment.getCacheId(),
        attachment.getName(),
        priority--));
    },
  };
};

export default connect(null, mapDispatchToProps)(ChatBackgroundScreen);