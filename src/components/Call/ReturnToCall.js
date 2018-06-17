import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {getIsInCall} from '../../selector/methods/signaling/callPermissin';
import {connect} from 'react-redux';
import {goCall} from '../../navigators/SecondaryNavigator';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../i18n';
import {uniqueId} from 'lodash';
import {appTheme} from '../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../../modules/Responsive/MemoizeResponsiveStyleSheet';

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          height: 34,
          backgroundColor: appTheme.primary,
          justifyContent: 'center',
        },
        returnText: {
          alignSelf: 'center',
          fontSize: 20,
          color: appTheme.primaryText,
        },
      },
    },
  ],
  true,
];

class ReturnToCall extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {isInCall, userId} = this.props.callState;
    const styles = this.getStyles();
    const {intl} = this.props;
    return (
      (isInCall &&
        <TouchableOpacity style={styles.container} onPress={() => goCall(userId)}>
          <Text style={styles.returnText}>{intl.formatMessage(i18n.callReturnToCall)}</Text>
        </TouchableOpacity>)
    );
  }
}

ReturnToCall.propTypes = {
  intl: intlShape.isRequired,
};

const mapStateToProps = () => {
  return (state) => {
    return {
      callState: getIsInCall(state),
    };
  };
};

export default connect(mapStateToProps)(injectIntl(ReturnToCall));