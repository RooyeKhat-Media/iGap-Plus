import React from 'react';
import {TextInput as BaseTextInput} from 'react-native';
import styleSheet from './index.style';
import {appTheme} from '../../../themes/default/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

BaseTextInput.defaultProps.selectionColor = appTheme.primaryText;

export default class TextInput extends React.Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  focuse = () => {
    this.setState({focused: true});
  };

  blur = () => {
    this.setState({focused: false});
  };

  render() {
    const props = this.props;
    const {focused} = this.state;
    const styles = this.getStyles();

    const defaultProps = {
      ...props,
      underlineColorAndroid: 'transparent',
      placeholderTextColor: '#adadad',
    };

    return (<BaseTextInput
      onFocus={this.focuse}
      onBlur={this.blur}
      {...defaultProps}
      disableFullscreenUI={true}
      style={[styles.textInput, props.style, (focused ? styles.focused : {})]}
    />);
  }
}
