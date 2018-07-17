import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {uniqueId} from 'lodash';
import PropTypes from 'prop-types';
import RichTextView from '../../../../modules/RichTextView/index';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class Text extends PureComponent {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {message, showText} = this.props;
    return (
      showText ?
        <View style={styles.container}>
          <RichTextView style={styles.message} rawText={message}/>
        </View> : null
    );
  }
}

Text.propTypes = {
  message: PropTypes.string.isRequired,
  showText: PropTypes.bool.isRequired,
};

export default Text;

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {},
        message: {
          color: '#202020',
        },
      },
    },
  ],
  true,
];