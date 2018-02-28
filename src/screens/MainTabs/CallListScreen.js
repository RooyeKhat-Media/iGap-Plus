import React, {Component} from 'react';
import {connect} from 'react-redux';
import CallListComponent from '../../components/MainTabs/CallList/index';
import {SignalingGetLog, Proto, SignalingClearLog} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {SIGNALING_CLEAR_LOG, SIGNALING_GET_LOG} from '../../constants/methods/index';
import {SIGNALING_GET_LOG_LIST_PAGINATION_LIMIT} from '../../constants/configs';
import {getCallLogList} from '../../selector/methods/signaling/callLog';
import {getCallPermission} from '../../selector/methods/signaling/callPermissin';

let offset = 0;

export function requestGetLog(offset, limit) {
  if (offset === 0 || offset >= limit) {
    const signalingGetLog = new SignalingGetLog();
    const pagination = new Proto.Pagination();
    pagination.setOffset(offset);
    pagination.setLimit(limit);
    signalingGetLog.setPagination(pagination);
    Api.invoke(SIGNALING_GET_LOG, signalingGetLog);
  }
}

class CallListScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {callLogList, permission} = this.props;
    offset = callLogList.length;
    return (
      <CallListComponent
        callLogList={callLogList}
        clearLogList={this.clearLogList}
        onLoadMore={this.onLoadMore}
        permission={permission}
      />
    );
  }

  onLoadMore = () => {
    requestGetLog(offset, SIGNALING_GET_LOG_LIST_PAGINATION_LIMIT);
  };

  clearLogList = () => {
    const {callLogList} = this.props;
    if (callLogList.length > 0) {
      const lastId = callLogList[0].item.id;
      const signalingClearLog = new SignalingClearLog();
      signalingClearLog.setClearId(lastId);
      Api.invoke(SIGNALING_CLEAR_LOG, signalingClearLog);
    }
  };
}

CallListScreen.propTypes = {};

const mapStateToProps = state => {
  return {
    callLogList: getCallLogList(state),
    permission: getCallPermission(state),
  };
};

export default connect(mapStateToProps)(CallListScreen);