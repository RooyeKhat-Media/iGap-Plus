import React, {Component} from 'react';
import {Text} from 'react-native';
import {FormattedMessage} from 'react-intl';
import ShortMessage from './ShortMessage';
import {uniqueId} from 'lodash';
import PropTypes from 'prop-types';
import i18n from '../../../../i18n';
import {appTheme} from '../../../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class ReplyTo extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {message} = this.props;
    const styles = this.getStyles();
    return (
      <Text numberOfLines={1} style={styles.container}>
        <Text style={styles.replay}><FormattedMessage {...i18n.roomMessageReplyTo}/></Text>
        {' : '}
        <ShortMessage message={message} style={styles.replay}/>
      </Text>
    );
  }
}

ReplyTo.propTypes = {
  message: PropTypes.object.isRequired,
};

export default ReplyTo;

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          padding: 5,
          paddingLeft: 10,
          borderLeftColor: appTheme.primary,
          borderLeftWidth: 3,
          marginBottom: 5,
          color: appTheme.primaryText,
        },
        replay: {
          color: appTheme.titleText,
        },
      },
    },
  ],
  true,
];