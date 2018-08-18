import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  BackHandler,
  Easing,
  Keyboard,
  PanResponder,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {appTheme} from '../../../themes/default/index';
import {Icon, IconToggle, MCIcon, DialogModal} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {injectIntl, intlShape, FormattedMessage} from 'react-intl';
import {
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
} from '../../../constants/app';
import VoiceRecorder from '../../Room/RoomHistory/VoiceRecorder';
import EmojiPiker, {onEmojiSelected} from '../../Room/RoomHistory/EmojiPiker';
import ShortMessage from '../RoomMessage/MessageBox/ShortMessage';
import Permission, {PERMISSION_MICROPHONE} from '../../../modules/Permission/index';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import styleSheet from './index.style';
import {cameraMode} from '../../../screens/General/CameraScreen';

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
    const {text} = this.props;
    this.onChangeText(text);
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
    const {text, editMessage, pickedFile, forwardedMessage} = nextProps;
    if (text || (editMessage || this.props.editMessage)) {
      this.onChangeText(text);
    }
    this.setState({isActive: (text || pickedFile || forwardedMessage)});
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
    const {onChangeText} = this.props;
    if (text.length > 0) {
      this.setState({isActive: true, text: text, showAttachment: false});
    } else {
      this.setState({isActive: false, text: ''});
    }
    onChangeText(text);
  };

  onSubmit = () => {
    const {submitForm} = this.props;
    submitForm(this.state.text);
    this.setState({
      isActive: false,
      text: '',
      height: 0,
      showEmojiPiker: false,
    });
  };

  selectImages = async () => {
    const {selectAttachment} = this.props;
    this.toggleAttach();
    await selectAttachment(ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE);
  };
  selectAudio = async () => {
    const {selectAttachment} = this.props;
    this.toggleAttach();
    await selectAttachment(ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO);
  };
  selectVideos = async () => {
    const {selectAttachment} = this.props;
    this.toggleAttach();
    await selectAttachment(ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO);
  };
  selectFile = async () => {
    const {selectAttachment} = this.props;
    this.toggleAttach();
    await selectAttachment(ROOM_MESSAGE_ATTACHMENT_TYPE_FILE);
  };

  selectContact = () => {
    const {selectContact} = this.props;
    this.toggleAttach();
    selectContact();
  };
  selectLocation = () => {
    const {selectLocation} = this.props;
    this.toggleAttach();
    selectLocation();
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
    const {onEndRecordSound} = this.props;
    if (this.mounted) {
      this.setState({isSoundRecord: false});
    }
    onEndRecordSound(path);
  };
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, replyTo, pickedFile, editMessage, forwardedMessage, cancelAttach, cancelForward, cancelReply, cancelEdit, onStartRecordSound} = this.props;
    const styles = this.getStyles();
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
              onPress={() => {
                this.dialog.open();
              }
              }>
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
                <Icon name="keyboard-arrow-down" size={35} color="#fff"/>
              </View>
              <Text style={styles.textSharedMedia}>
                {intl.formatMessage(i18n.roomHistorySendBoxClose)}
              </Text>
            </TouchableOpacity>

          </View>
        </Animated.View>
        }

        <View style={styles.inputWrap}>

          {pickedFile && (<View style={styles.addonWrap}>
            <Text style={styles.addonText}>
              {pickedFile.fileName}
            </Text>
            <IconToggle onPress={cancelAttach} name="close"/>
          </View>)}

          {forwardedMessage && (<View style={styles.addonWrap}>
            <Text style={styles.addonText} numberOfLines={1}>
              {intl.formatMessage(i18n.roomHistorySendBoxForward)}
              <ShortMessage message={forwardedMessage}/>
            </Text>
            <View style={styles.replyClose}>
              <IconToggle onPress={cancelForward} name="close"/>
            </View>
          </View>)}

          {replyTo && (<View style={styles.addonWrap}>
            <Text style={styles.addonText} numberOfLines={1}>
              {intl.formatMessage(i18n.roomHistorySendBoxReplyTo) + ' : '}
              <ShortMessage message={replyTo}/>
            </Text>
            <View style={styles.replyClose}>
              <IconToggle onPress={cancelReply} name="close" color={appTheme.icon}/>
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

            {editMessage && <TouchableOpacity onPress={cancelEdit}>
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
            onStartRecordSound={onStartRecordSound}
            onRef={ref => (this.voiceRecorder = ref)}
          />
        </View>}
        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.sendBoxDialogCameraTitle}/>}
        actions={[
          {label:  intl.formatMessage(i18n.sendBoxCaptureImage),
            onPress: () => {
              this.toggleAttach();
              const {selectCamera} = this.props;
              selectCamera(cameraMode.CAMERA);
            },
          },
          {label:  intl.formatMessage(i18n.sendBoxCaptureVideo),
            onPress: () => {
              this.toggleAttach();
              const {selectCamera} = this.props;
              selectCamera(cameraMode.VIDEO);
            },
          },
        ]}/>
      </View>
    );
  }
}

SendBox.propTypes = {
  intl: intlShape.isRequired,
  text: PropTypes.string,
  replyTo: PropTypes.object,
  pickedFile: PropTypes.object,
  editMessage: PropTypes.bool,
  forwardedMessage: PropTypes.object,
  selectAttachment: PropTypes.func,
  selectCamera: PropTypes.func,
  selectContact: PropTypes.func,
  selectLocation: PropTypes.func,
  onStartRecordSound: PropTypes.func,
  onEndRecordSound: PropTypes.func,
  cancelAttach: PropTypes.func,
  onChangeText: PropTypes.func,
  submitForm: PropTypes.func,
  cancelEdit: PropTypes.func,
  cancelReply: PropTypes.func,
  cancelForward: PropTypes.func,
};

export default injectIntl(SendBox);