import React, {Component} from 'react';
import {Animated, Easing, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {black200, gray800} from '../../../themes/default/index';
import {Icon, MCIcon, TextInput} from '../../BaseUI/index';
import i18n from '../../../i18n/en';
import {injectIntl, intlShape} from 'react-intl';

class SendBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAttachment: false,
      hasText: false,
      enteredText: '',
      height: 0,
    };
    this.animatedValue = new Animated.Value(0);
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

  onTextInputChange = (text) => {
    if (text.length > 0) {
      this.setState({hasText: true, enteredText: text, showAttachment: false});
    } else {
      this.setState({hasText: false, enteredText: text});
    }
  };

  onSendClick = () => {
    alert(this.state.enteredText);
    this.setState({hasText: false, enteredText: '', height: 0});
  };

  render() {
    const {intl} = this.props;

    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0],
    });

    const left = {
      backgroundColor: '#fff',
      transform: [{translateY: movingMargin}],
    };

    return (
      <View style={styles.container}>
        {this.state.showAttachment && <Animated.View style={left}>
          <View style={styles.rowField}>
            <TouchableOpacity style={styles.sharedItem} onPress={() => alert('camera')}>
              <Icon name="camera" size={40} color="#fff" style={[styles.iconColor, {backgroundColor: '#c3223c'}]}/>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomHistorySendBoxCamera)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sharedItem} onPress={() => alert('image')}>
              <Icon name="image" size={35} color="#fff" style={[styles.iconColor, {backgroundColor: '#7b19b1'}]}/>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomHistorySendBoxImage)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sharedItem} onPress={() => alert('video')}>
              <Icon name="camera-roll" size={35} color="#fff" style={[styles.iconColor, {backgroundColor: '#990d3e'}]}/>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomHistorySendBoxVideo)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sharedItem} onPress={() => alert('misuc')}>
              <Icon name="library-music" size={35} color="#fff"
                style={[styles.iconColor, {backgroundColor: '#cb6417'}]}/>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomHistorySendBoxMusic)}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowField}>
            <TouchableOpacity style={styles.sharedItem} onPress={() => alert('file')}>
              <Icon name="insert-drive-file" size={35} color="#fff"
                style={[styles.iconColor, {backgroundColor: '#1b38bb'}]}/>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomHistorySendBoxFile)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sharedItem} onPress={() => alert('contact')}>
              <Icon name="contacts" size={35} color="#fff" style={[styles.iconColor, {backgroundColor: '#12b2cf'}]}/>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomHistorySendBoxContact)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sharedItem} onPress={() => alert('location')}>
              <Icon name="location-on" size={35} color="#fff" style={[styles.iconColor, {backgroundColor: '#1ac293'}]}/>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomHistorySendBoxLocation)}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sharedItem} onPress={this.toggleAttach}>
              <Icon name="keyboard-arrow-down" size={35} color="#fff"
                style={[styles.iconColor, {backgroundColor: '#9e9992'}]}/>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomHistorySendBoxClose)}</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>}

        <View style={styles.inputWrap}>
          <View style={styles.inputBox}>
            <TouchableOpacity onPress={() => alert('imoji')}>
              <MCIcon name="emoticon" style={styles.iconFeild} size={28}/>
            </TouchableOpacity>
            <TextInput value={this.state.enteredText} multiline={true} maxHeight={120}
              style={[styles.textInputStyle, {height: this.state.height}]}
              onChangeText={(text) => this.onTextInputChange(text)}
              onContentSizeChange={(event) => {
                this.setState({height: event.nativeEvent.contentSize.height});
              }}/>
            {this.state.hasText && <TouchableOpacity onPress={this.onSendClick}>
              <MCIcon name="send" style={styles.iconSend} size={28}/>
            </TouchableOpacity>}
            {!this.state.hasText && <TouchableOpacity onPress={this.toggleAttach}>
              <MCIcon name="paperclip" style={styles.iconAttachment} size={28}/>
            </TouchableOpacity>}
            {!this.state.hasText && <TouchableOpacity onPress={() => alert('mic')}>
              <MCIcon name="microphone" style={styles.iconMic} size={28}/>
            </TouchableOpacity>}
          </View>
        </View>
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
    color: '#000',
  },
  iconSend: {
    color: '#23fffa',
  },
  iconAttachment: {
    color: '#000',
    transform: [{rotate: '45deg'}],
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
});