import React, {Component} from 'react';
import {Animated, Easing, PanResponder, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {black200, gray800, primary} from '../../../themes/default/index';
import {Icon, IconToggle, MCIcon, TextInput} from '../../BaseUI/index';
import i18n from '../../../i18n/en';
import {injectIntl, intlShape} from 'react-intl';
import {
  ROOM_MESSAGE_ATTACHMENT_TYPE_AUDIO,
  ROOM_MESSAGE_ATTACHMENT_TYPE_FILE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_IMAGE,
  ROOM_MESSAGE_ATTACHMENT_TYPE_VIDEO,
} from '../../../constants/app';
import VoiceRecorder from './VoiceRecorder';

class SendBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showAttachment: false,
      isActive: false,
      height: 0,
      isSoundRecord: false,
    };
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    const {Form} = this.props;
    this.onChangeText(Form.text);
  }

  componentWillMount() {
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
        setTimeout(() => {
          if (!this.state.isSoundRecord && this.micClick) {
            this.setState({
              isSoundRecord: true,
              showAttachment: false,
            });
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
    if (text.length > 0) {
      this.setState({isActive: true, text: text, showAttachment: false});
    } else {
      this.setState({isActive: false, text: ''});
    }
  };

  onContentSizeChange = (event) => {
    this.setState({height: event.nativeEvent.contentSize.height});
  };

  onSubmit = () => {
    const {Form} = this.props;
    Form.submitForm(this.state.text);
    this.setState({isActive: false, text: '', height: 0});
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
  };
  selectContact = () => {
  };
  selectLocation = () => {
  };
  selectEmoji = () => {
  };
  selectMic = () => {
  };

  onEndRecordSound = (path) => {
    this.setState({isSoundRecord: false});
    if (path) {
      // send to chatBox  with this path
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

          <View style={styles.inputBox}>

            <TouchableOpacity onPress={this.selectEmoji}>
              <MCIcon name="emoticon" style={styles.iconFeild} size={28}/>
            </TouchableOpacity>

            <TextInput
              maxHeight={120}
              multiline={true}
              value={this.state.text}
              onChangeText={this.onChangeText}
              onContentSizeChange={this.onContentSizeChange}
              style={[styles.textInputStyle, {height: this.state.height}]}/>

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
        </View>
        {this.state.isSoundRecord &&
        <View style={styles.soundRecorder}>
          <VoiceRecorder
            onEndRecordSound={this.onEndRecordSound}
            onRef={ref => (this.voiceRecorder = ref)}
          />
        </View>
        }
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

    borderLeftColor: primary,
    borderLeftWidth: 3,
  },
});