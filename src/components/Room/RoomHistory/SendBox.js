import React, {PureComponent} from 'react';
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
import {injectIntl, intlShape} from 'react-intl';
import {
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
} from '../../../constants/app';
import VoiceRecorder from './VoiceRecorder';
import EmojiPiker, {onEmojiSelected} from './EmojiPiker';
import ShortMessage from '../../Unit/RoomMessage/MessageBox/ShortMessage';
import Permission, {PERMISSION_MICROPHONE} from '../../../modules/Permission/index';

class SendBox extends PureComponent {

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

    onEmojiSelected[0] = this.onEmojiSelected;
  }

  componentDidMount() {
    const {Form} = this.props;
    this.onChangeText(Form.text);
    setTimeout(() => {
      this.setState({
        canLoadEmojiPiker: true,
      });
    }, 100);

  }

  onBackPress = () => {
    if (this.state.showEmojiPiker) {
      this.setState({showEmojiPiker: false});
      return true;
    } else if (this.state.showAttachment) {
      this.setState({showAttachment: false});
      return true;
    }
    return false;
  };

  componentWillMount() {
    this.mounted = true;
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
    this.mounted = false;
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    onEmojiSelected.pop();
  }

  componentWillReceiveProps(nextProps) {
    const {Form} = nextProps;
    if (Form.text || (Form.editMessageId || this.props.Form.editMessageId)) {
      this.onChangeText(Form.text);
    }
    this.setState({isActive: (Form.text || Form.pickedFile || Form.forwardedMessage)});
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

  onSubmit = () => {
    const {Form} = this.props;
    Form.submitForm(this.state.text);
    this.setState({
      isActive: false,
      text: '',
      height: 0,
      showEmojiPiker: false,
    });
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

  selectCamera = () => {
    const {Form} = this.props;
    this.toggleAttach();
    Form.selectCamera();
  };
  selectContact = () => {
    const {Form} = this.props;
    this.toggleAttach();
    Form.selectContact();
  };
  selectLocation = () => {
    const {Form} = this.props;
    this.toggleAttach();
    Form.selectLocation();
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
      setTimeout(() => {
        this.setState({
          showEmojiPiker: true,
          showAttachment: false,
        });
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
    const {Form} = this.props;
    if (this.mounted) {
      this.setState({isSoundRecord: false});
    }
    Form.onEndRecordSound(path);
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
                <View style={[styles.iconColor, styles.colorRed]}>
                  <Icon name="camera" size={40} color="#fff"/>
                </View>
                <Text style={styles.textSharedMedia}>
                  {intl.formatMessage(i18n.roomHistorySendBoxCamera)}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.sharedItem}
                onPress={this.selectImages}>
                <View style={[styles.iconColor, styles.colorPurple]}>
                  <Icon name="image" size={35} color="#fff"/>
                </View>
                <Text style={styles.textSharedMedia}>
                  {intl.formatMessage(i18n.roomHistorySendBoxImage)}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sharedItem}
                onPress={this.selectVideos}>
                <View style={[styles.iconColor, styles.colorDarkRed]}>
                  <Icon name="camera-roll" size={35} color="#fff"/>
                </View>
                <Text style={styles.textSharedMedia}>
                  {intl.formatMessage(i18n.roomHistorySendBoxVideo)}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sharedItem}
                onPress={this.selectAudio}>
                <View style={[styles.iconColor, styles.colorOrange]}>
                  <Icon name="library-music" size={35} color="#fff"/>
                </View>

                <Text style={styles.textSharedMedia}>
                  {intl.formatMessage(i18n.roomHistorySendBoxMusic)}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowField}>

              <TouchableOpacity
                style={styles.sharedItem}
                onPress={this.selectFile}>
                <View style={[styles.iconColor, styles.colorDarkBlue]}>
                  <Icon name="insert-drive-file" size={35} color="#fff"/>
                </View>
                <Text style={styles.textSharedMedia}>
                  {intl.formatMessage(i18n.roomHistorySendBoxFile)}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.sharedItem}
                onPress={this.selectContact}>
                <View style={[styles.iconColor, styles.colorLightBlue]}>
                  <Icon name="contacts" size={35} color="#fff"/>
                </View>
                <Text style={styles.textSharedMedia}>
                  {intl.formatMessage(i18n.roomHistorySendBoxContact)}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.sharedItem}
                onPress={this.selectLocation}>
                <View style={[styles.iconColor, styles.colorGreen]}>
                  <Icon name="location-on" size={35} color="#fff"/>
                </View>
                <Text style={styles.textSharedMedia}>
                  {intl.formatMessage(i18n.roomHistorySendBoxLocation)}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.sharedItem}
                onPress={this.toggleAttach}>
                <View style={[styles.iconColor, styles.colorBrown]}>
                  <Icon name="keyboard-arrow-down" size={35} color="#fff" />
                </View>
                <Text style={styles.textSharedMedia}>
                  {intl.formatMessage(i18n.roomHistorySendBoxClose)}
                </Text>
              </TouchableOpacity>

            </View>
          </Animated.View>
        }

        <View style={styles.inputWrap}>

          {Form.pickedFile && (<View style={styles.addonWrap}>
            <Text style={styles.addonText}>
              {Form.pickedFile.fileName}
            </Text>
            <IconToggle onPress={Form.cancelAttach} name="close"/>
          </View>)}

          {Form.forwardedMessage && (<View style={styles.addonWrap}>
            <Text style={styles.addonText} numberOfLines={1}>
              {intl.formatMessage(i18n.roomHistorySendBoxForward)}
              <ShortMessage message={Form.forwardedMessage}/>
            </Text>
            <View style={styles.replyClose}>
              <IconToggle onPress={Form.cancelForward} name="close"/>
            </View>
          </View>)}

          {Form.replyTo && (<View style={styles.addonWrap}>
            <Text style={styles.addonText} numberOfLines={1}>
              {intl.formatMessage(i18n.roomHistorySendBoxReplyTo) + ' : '}
              <ShortMessage message={Form.replyTo}/>
            </Text>
            <View style={styles.replyClose}>
              <IconToggle onPress={Form.cancelReply} name="close"/>
            </View>
          </View>)}

          <View style={styles.inputBox}>

            <TouchableOpacity onPress={this.emojiButtonClick}>
              <MCIcon name={this.state.showEmojiPiker ? 'keyboard' : 'emoticon'} style={styles.iconEmoji} size={30}/>
            </TouchableOpacity>

            <TextInput
              maxHeight={120}
              multiline={true}
              value={this.state.text}
              autoCorrect={false}
              onChangeText={this.onChangeText}
              onFocus={() => this.setState({showEmojiPiker: false, showAttachment: false})}
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}
              ref={(ref) => {
                this.chatTextInput = ref;
              }}
              onSelectionChange={(event) => {
                this.selectionStart = event.nativeEvent.selection.start;
                this.selectionEnd = event.nativeEvent.selection.end;
              }}
            />

            {Form.editMessageId && <TouchableOpacity onPress={Form.cancelEdit}>
              <MCIcon name="close" style={styles.iconClose} size={30}/>
            </TouchableOpacity>}

            {(this.state.isActive) && <TouchableOpacity onPress={this.onSubmit}>
              <MCIcon name="send" style={styles.iconSend} size={30}/>
            </TouchableOpacity>}

            {!(this.state.isActive) && <TouchableOpacity onPress={this.toggleAttach}>
              <MCIcon name="paperclip" style={styles.iconAttachment} size={30}/>
            </TouchableOpacity>}

            {!(this.state.isActive) &&
              <View  {...this._panResponder.panHandlers} >
                <MCIcon name="microphone" style={styles.iconMic} size={30}/>
              </View>
            }
          </View>

          <View style={this.state.showEmojiPiker ? styles.activeEmojiPiker : styles.inActiveEmojiPiker}>
            {this.state.canLoadEmojiPiker && <EmojiPiker/>}
          </View>

        </View>
        {this.state.isSoundRecord &&
          <View style={styles.soundRecorder}>
            <VoiceRecorder
              onEndRecordSound={this.onEndRecordSound}
              onStartRecordSound={Form.onStartRecordSound}
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
  container: {},
  animatedWrap: {
    backgroundColor: '#fff',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
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
  iconEmoji: {
    color: '#848484',
    paddingLeft: 4,
    backgroundColor: 'transparent',
  },

  iconMic: {
    color: '#848484',
    paddingLeft: 7,
    paddingRight: 6,
    backgroundColor: 'transparent',

  },
  iconSend: {
    color: '#848484',
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'transparent',

  },
  iconAttachment: {
    color: '#848484',
    transform: [{rotate: '45deg'}],
    paddingLeft: 4,
    paddingRight: 1,
    backgroundColor: 'transparent',

  },
  iconClose: {
    color: '#4b4b4b',
    paddingLeft: 4,
    paddingRight: 4,
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
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  colorRed: {
    backgroundColor: '#ff2748',
  },
  colorPurple: {
    backgroundColor: '#dba4da',
  },
  colorDarkRed: {
    backgroundColor: '#ec5877',
  },
  colorOrange: {
    backgroundColor: '#ff8135',
  },
  colorDarkBlue: {
    backgroundColor: '#0193e5',
  },
  colorLightBlue: {
    backgroundColor: '#36becf',
  },
  colorGreen: {
    backgroundColor: '#1de4b3',
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
    color: 'black',
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
    display: 'none',
  },
  replyClose: {
    width: 50,
    height: 50,
  },
});