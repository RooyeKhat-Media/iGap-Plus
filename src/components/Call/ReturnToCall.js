import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getIsInCall} from '../../selector/methods/signaling/callPermissin';
import {connect} from 'react-redux';
import {goCall} from '../../navigators/SecondaryNavigator';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../i18n';

const styles = StyleSheet.create({
  container: {
    height: 34,
    backgroundColor: '#30e6ef',
    justifyContent: 'center',
  },
  returnText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
  },
});

class ReturnToCall extends Component {
  render() {
    const {isInCall, userId} = this.props.callState;
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