import React, {Component} from 'react';
import {
  Animated,
  BackHandler,
  Easing,
  Keyboard,
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {black200, gray800, primary} from '../../../themes/default/index';
import {Icon, IconToggle, MCIcon} from '../../BaseUI/index';
import i18n from '../../../i18n/en';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
} from '../../../constants/app';
import VoiceRecorder from './VoiceRecorder';
import EmojiPiker from './EmojiPiker';
import ShortMessage from '../../Unit/RoomMessage/MessageBox/ShortMessage';
import Permission, {PERMISSION_MICROPHONE} from '../../../modules/Permission/index';
import {goCamera} from '../../../navigators/SecondaryNavigator';
import {cameraMode} from '../../../screens/General/CameraScreen';

class SendBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showAttachment: false,
      isActive: false,
      height: 0,
      isSoundRecord: false,
      showEmojiPiker: false,
      canLoadEmojiPiker: false,
    };
    this.animatedValue = new Animated.Value(0);
    this.selectionStart = 0;
    this.selectionEnd = 0;
  }

  componentDidMount() {
    const {Form} = this.props;
    this.onChangeText(Form.text);
    setTimeout(() => {
      this.setState({
        canLoadEmojiPiker: true,
      });
    }, 1000);
  }

  onBackPress = () => {
    if (this.state.showEmojiPiker) {
      this.setState({showEmojiPiker: false});
      return true;
    }
    return false;
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);

    this.onEnd = (evt, gestureState) => {
      this.micClick = false;
      if (this.voiceRecorder) {
        this.voiceRecorder.onTouch(gestureState, 'end');
      }
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: this.onEnd,
      onPanResponderTerminate: this.onEnd,
      onPanResponderEnd: this.onEnd,
      onPanResponderReject: this.onEnd,
      onPanResponderGrant: (evt, gestureState) => {
        this.micClick = true;
        setTimeout(async () => {
          if (!this.state.isSoundRecord && this.micClick) {
            const check = await  Permission.check(PERMISSION_MICROPHONE);
            if (check) {
              this.setState({
                isSoundRecord: true,
                showAttachment: false,
                showEmojiPiker: false,
              });
            } else {
              await  Permission.grant(PERMISSION_MICROPHONE,
                this.props.intl.formatMessage(i18n.roomHistoryMicrophonePermission),
                this.props.intl.formatMessage(i18n.roomHistoryRecordSound));
            }
          }
        }, 600);
      },
      onPanResponderMove: (evt, gestureState) => {
        if (this.voiceRecorder) {
          this.voiceRecorder.onTouch(gestureState, 'move');
        }
      },
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillReceiveProps(nextProps) {
    const {Form} = nextProps;
    if (Form.text || (Form.editMessageId || this.props.Form.editMessageId)) {
      this.onChangeText(Form.text);
    }
  }

  animatePop() {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 250,
        easing: Easing.ease,
        useNativeDriver: true,
      }
    ).start();
  }

  toggleAttach = () => {
    if (!this.state.showAttachment) {
      this.animatePop();
    }
    this.setState({showAttachment: !this.state.showAttachment});
  };

  onChangeText = (text) => {
    const {Form} = this.props;
    if (text.length > 0) {
      this.setState({isActive: true, text: text, showAttachment: false});
    } else {
      this.setState({isActive: false, text: ''});
    }
    Form.onChangeText(text);
  };

  onContentSizeChange = (event) => {
    this.setState({height: event.nativeEvent.contentSize.height});
  };

  onSubmit = () => {
    const {Form} = this.props;
    Form.submitForm(this.state.text);
    this.setState({
      isActive: false,
      text: '',
      height: 0,
      showEmojiPiker: false,
    });
    Keyboard.dismiss();
  };

  selectImages = async () => {
    const {Form} = this.props;
    this.toggleAttach();
    await Form.selectAttachment(ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE);
  };
  selectAudio = async () => {
    const {Form} = this.props;
    this.toggleAttach();
    await Form.selectAttachment(ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO);
  };
  selectVideos = async () => {
    const {Form} = this.props;
    this.toggleAttach();
    await Form.selectAttachment(ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO);
  };
  selectFile = async () => {
    const {Form} = this.props;
    this.toggleAttach();
    await Form.selectAttachment(ROOM_MESSAGE_ATTACHMENT_TYPE_FILE);
  };

  selectCamera = async () => {
    this.toggleAttach();
    const {intl} = this.props;
    const denialMessage = [
      intl.formatMessage(i18n.roomHistoryCameraPermission),
      intl.formatMessage(i18n.roomHistoryCameraPermissionMessage),
      intl.formatMessage(i18n.roomHistoryStoragePermission),
      intl.formatMessage(i18n.roomHistoryStoragePermissionMessage),
    ];
    goCamera(
      (path) => {
        //todo nejati     send this image to chatBox with this path
      },
      (error) => {
        // can not open camera or save image file in storage
      },
      cameraMode.CAMERA,
      denialMessage
    );
  };
  selectContact = () => {
  };
  selectLocation = () => {
  };

  emojiButtonClick = () => {
    if (this.state.showEmojiPiker) {
      this.chatTextInput.focus();
      this.setState({
        showEmojiPiker: false,
        showAttachment: false,
      });
    } else {
      Keyboard.dismiss();
      this.setState({
        showEmojiPiker: true,
        showAttachment: false,
      });
    }
  };

  onEmojiSelected = (emoji) => {
    let _text = this.state.text;
    _text = _text.substring(0, this.selectionStart) + emoji + _text.substring(this.selectionEnd);
    this.selectionEnd = this.selectionStart = this.selectionStart + emoji.length;
    this.setState({
      text: _text,
      isActive: true,
    });
  };

  onEndRecordSound = (path) => {
    this.setState({isSoundRecord: false});
    if (path) {
      // todo nejati      send audio to chatBox  with this path
    }
  };

  render() {
    const {intl, Form} = this.props;

    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0],
    });

    return (
      <View style={styles.container}>

        {this.state.showAttachment &&
        <Animated.View style={[
          styles.animatedWrap,
          {
            transform: [{translateY: movingMargin}],
          },
        ]}>

          <View style={styles.rowField}>

            <TouchableOpacity
              style={styles.sharedItem}
              onPress={this.selectCamera}>
              <Icon
                name="camera"
                size={40} color="#fff"
                style={[styles.iconColor, styles.colorRed]}/>
              <Text
                style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxCamera)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sharedItem}
              onPress={this.selectImages}>
              <Icon
                name="image"
                size={35}
                color="#fff"
                style={[styles.iconColor, styles.colorPurple]}/>
              <Text style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxImage)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sharedItem}
              onPress={this.selectVideos}>
              <Icon name="camera-roll"
                size={35}
                color="#fff" style={[styles.iconColor, styles.colorDarkRed]}/>
              <Text style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxVideo)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sharedItem}
              onPress={this.selectAudio}>
              <Icon
                name="library-music"
                size={35}
                color="#fff"
                style={[styles.iconColor, styles.colorOrange]}/>
              <Text style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxMusic)}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowField}>

            <TouchableOpacity
              style={styles.sharedItem}
              onPress={this.selectFile}>
              <Icon
                name="insert-drive-file"
                size={35}
                color="#fff"
                style={[styles.iconColor, styles.colorDarkBlue]}/>
              <Text style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxFile)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sharedItem}
              onPress={this.selectContact}>
              <Icon
                name="contacts"
                size={35}
                color="#fff"
                style={[styles.iconColor, styles.colorLightBlue]}/>
              <Text style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxContact)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sharedItem}
              onPress={this.selectLocation}>
              <Icon
                name="location-on"
                size={35}
                color="#fff"
                style={[styles.iconColor, styles.colorGreen]}/>
              <Text style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxLocation)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sharedItem}
              onPress={this.toggleAttach}>
              <Icon
                name="keyboard-arrow-down"
                size={35}
                color="#fff"
                style={[styles.iconColor, styles.colorBrown]}/>
              <Text style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxClose)}
              </Text>
            </TouchableOpacity>

          </View>
        </Animated.View>}

        <View style={styles.inputWrap}>

          {Form.pickedFile && (<View style={styles.addonWrap}>
            <Text style={styles.addonText}>
              {Form.pickedFile.fileName}
            </Text>
            <IconToggle onPress={Form.cancelAttach} name="close"/>
          </View>)}

          {Form.forwardedMessage && (<View style={styles.addonWrap}>
            <Text style={styles.addonText} numberOfLines={1}>
              <FormattedMessage {...i18n.roomHistorySendBoxForward}/> :
              <ShortMessage message={Form.forwardedMessage}/>
            </Text>
            <View style={styles.replyClose}>
              <IconToggle onPress={Form.cancelForward} name="close"/>
            </View>
          </View>)}

          {Form.replyTo && (<View style={styles.addonWrap}>
            <Text style={styles.addonText} numberOfLines={1}>
              <FormattedMessage {...i18n.roomHistorySendBoxReplyTo}/> :
              <ShortMessage message={Form.replyTo}/>
            </Text>
            <View style={styles.replyClose}>
              <IconToggle onPress={Form.cancelReply} name="close"/>
            </View>
          </View>)}

          <View style={styles.inputBox}>

            <TouchableOpacity onPress={() => this.emojiButtonClick()}>
              <MCIcon name={this.state.showEmojiPiker ? 'keyboard' : 'emoticon'} style={styles.iconFeild} size={28}/>
            </TouchableOpacity>

            <TextInput
              maxHeight={120}
              multiline={true}
              value={this.state.text}
              autoCorrect={false}
              onChangeText={this.onChangeText}
              onContentSizeChange={this.onContentSizeChange}
              onFocus={() => this.setState({showEmojiPiker: false, showAttachment: false})}
              underlineColorAndroid={'transparent'}
              style={[styles.textInputStyle, {height: this.state.height}]}
              ref={(ref) => {
                this.chatTextInput = ref;
              }}
              onSelectionChange={(event) => {
                this.selectionStart = event.nativeEvent.selection.start;
                this.selectionEnd = event.nativeEvent.selection.end;
              }}
            />

            {Form.editMessageId && <TouchableOpacity onPress={Form.cancelEdit}>
              <MCIcon name="close" style={styles.iconClose} size={28}/>
            </TouchableOpacity>}

            {this.state.isActive && <TouchableOpacity onPress={this.onSubmit}>
              <MCIcon name="send" style={styles.iconSend} size={28}/>
            </TouchableOpacity>}

            {!this.state.isActive && <TouchableOpacity onPress={this.toggleAttach}>
              <MCIcon name="paperclip" style={styles.iconAttachment} size={28}/>
            </TouchableOpacity>}

            {!this.state.isActive &&
            <View  {...this._panResponder.panHandlers} >
              <MCIcon name="microphone" style={styles.iconMic} size={28}/>
            </View>
            }
          </View>

          <View style={this.state.showEmojiPiker ? styles.activeEmojiPiker : styles.inActiveEmojiPiker}>
            {this.state.canLoadEmojiPiker && <EmojiPiker onEmojiSelected={this.onEmojiSelected}/>}
          </View>

        </View>
        {this.state.isSoundRecord &&
        <View style={styles.soundRecorder}>
          <VoiceRecorder
            onEndRecordSound={this.onEndRecordSound}
            onRef={ref => (this.voiceRecorder = ref)}
          />
        </View>}
      </View>
    );
  }
}

SendBox.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SendBox);

const styles = StyleSheet.create({
  container: {
  },
  animatedWrap: {
    backgroundColor: '#fff',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 8,
    borderWidth: 0.5,
    borderColor: gray800,
    borderRadius: 25,
    minHeight: 50,
    margin: 5,
  },
  inputWrap: {
    backgroundColor: '#fff',
  },
  textInputStyle: {
    flex: 1,
    borderWidth: 0,
    paddingLeft: 2,
    paddingRight: 4,
    fontSize: 16,
  },
  iconMic: {
    color: '#848484',
  },
  iconSend: {
    color: '#848484',
  },
  iconAttachment: {
    color: '#848484',
    transform: [{rotate: '45deg'}],
  },
  iconClose: {
    color: '#4b4b4b',
  },
  rowField: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 8,
  },
  sharedItem: {
    alignItems: 'center',
  },
  textSharedMedia: {
    color: black200,
    fontSize: 16,
    alignSelf: 'center',
  },
  iconColor: {
    width: 60,
    height: 60,
    borderRadius: 30,
    paddingTop: 10,
    paddingLeft: 12,
  },
  colorRed: {
    backgroundColor: '#c3223c',
  },
  colorPurple: {
    backgroundColor: '#7b19b1',
  },
  colorDarkRed: {
    backgroundColor: '#990d3e',
  },
  colorOrange: {
    backgroundColor: '#cb6417',
  },
  colorDarkBlue: {
    backgroundColor: '#1b38bb',
  },
  colorLightBlue: {
    backgroundColor: '#12b2cf',
  },
  colorGreen: {
    backgroundColor: '#1ac293',
  },
  colorBrown: {
    backgroundColor: '#9e9992',
  },

  addonWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addonText: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderLeftColor: primary,
    borderLeftWidth: 3,
  },
  soundRecorder: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  activeEmojiPiker: {
    height: 250,
  },
  inActiveEmojiPiker: {
    height: 0,
  },
  replyClose: {
    width: 50,
    height: 50,
  },
});