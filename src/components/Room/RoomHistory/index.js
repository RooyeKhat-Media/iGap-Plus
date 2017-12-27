import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {Confirm, Toolbar} from '../../BaseUI/index';
import styles from './index.styles';
import SendBox from './SendBox';
import RoomMessage from '../../../containers/Unit/RoomMessage';
import JoinBox from './JoinBox';
import ActionSheet from '../../BaseUI/ActionSheet/index';
import i18n from '../../../i18n/en';
import ForwardList from '../../../containers/Unit/ForwardList';
import {Proto} from '../../../modules/Proto/index';
import RoomActions from '../../../containers/Unit/RoomActions';
import {textTitleStyle} from '../../../themes/default/index';

class RoomHistoryComponent extends React.PureComponent {

  getDataProvider = (messageList) => {
    return new DataProvider((r1, r2) => {
      return r1 !== r2 || this.prevSelectedList[r1] !== this.props.selectedList[r1];
    }).cloneWithRows(messageList);
  };

  constructor(args) {
    super(args);
    this.prevSelectedList = {};
    const {messageList} = this.props;
    let {width} = Dimensions.get('window');
    this._layoutProvider = new LayoutProvider(this.layoutProviderType, (type, dim) => {
      dim.width = width;
      dim.height = 59;
    });

    this.state = {
      dataProvider: messageList ? this.getDataProvider(messageList) : null,
      actions: [],
    };
  }

  layoutProviderType = (index) => {
    const {getRoomMessageType, messageList} = this.props;
    return getRoomMessageType(messageList[index]);
  };

  componentWillReceiveProps(nextProps) {
    const {messageList} = nextProps;
    this.setState({
      dataProvider: messageList ? this.getDataProvider(messageList) : null,
    }, () => {
      this.prevSelectedList = nextProps.selectedList;
    });
  }

  renderItem = (type, item) => {
    const {onMessagePress, onMessageLongPress, selectedList, roomType, roomId} = this.props;
    return (<RoomMessage
      roomId={roomId}
      messageId={item}
      roomType={roomType}
      selected={!!selectedList[item]}
      onMessagePress={onMessagePress}
      onMessageLongPress={onMessageLongPress}/>);
  };

  render() {
    const {intl, Form, roomId, roomType, readOnly, isParticipant, isPublic, roomMute, joinBoxToggle, messageList, selectedCount, actionSheetActions, actionSheetControl, forwardModalControl, conformControl, onScroll} = this.props;
    const {dataProvider} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.mainWrap}>
          <View style={styles.messageListWrap}>
            {!selectedCount ? this.renderBaseToolbar() : this.renderMessagePropToolbar()}
            {dataProvider ?
              (<RecyclerListView
                renderAheadOffset={640}
                dataProvider={dataProvider}
                layoutProvider={this._layoutProvider}
                rowRenderer={this.renderItem}
                onScroll={onScroll}
                initialRenderIndex={messageList.length - 1}
                forceNonDeterministicRendering={true}/>) : null}
          </View>

          <View style={styles.bottomWrap}>
            <RoomActions roomId={roomId} roomType={roomType} />
            {!readOnly ? (<SendBox Form={Form}/>) : (
              <JoinBox joinBoxToggle={joinBoxToggle} isPublic={isPublic} roomMute={roomMute}
                isParticipant={isParticipant}/>)}
          </View>

          <ActionSheet
            title={intl.formatMessage(i18n.roomHistoryActionTitle)}
            actions={actionSheetActions}
            control={actionSheetControl}/>
          <Confirm control={conformControl}/>
          <ForwardList control={forwardModalControl}/>

        </View>
      </View>
    );
  }

  renderBaseToolbar() {
    const {roomTitle, goRoomInfoBtn, goBack} = this.props;
    return (<Toolbar
      leftElement="arrow-back"
      onLeftElementPress={goBack}
      centerElement={<Text numberOfLines={1} style={textTitleStyle}>{roomTitle}</Text>}
      rightElement={{
        menu: {
          icon: 'more-vert',
          labels: [
            'Search',
            'Report',
          ],
        },
      }}
      onPress={goRoomInfoBtn}
    />);
  }

  renderMessagePropToolbar() {
    const {selectedCount, cancelSelected, selectedMessageAction, toolbarActions} = this.props;
    return (<Toolbar
      leftElement="close"
      onLeftElementPress={cancelSelected}
      centerElement={<Text style={textTitleStyle}>{selectedCount.toString()}</Text>}
      rightElement={toolbarActions}
      onRightElementPress={selectedMessageAction}
    />);
  }
}

RoomHistoryComponent.propTypes = {
  intl: intlShape.isRequired,
  Form: PropTypes.object.isRequired,
  roomId: PropTypes.string.isRequired,
  roomType: PropTypes.oneOf([
    Proto.Room.Type.CHAT,
    Proto.Room.Type.GROUP,
    Proto.Room.Type.CHANNEL,
  ]).isRequired,
  roomTitle: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  isParticipant: PropTypes.bool.isRequired,
  isPublic: PropTypes.bool.isRequired,
  roomMute: PropTypes.bool.isRequired,
  joinBoxToggle: PropTypes.func.isRequired,
  messageList: PropTypes.arrayOf(PropTypes.string),
  selectedList: PropTypes.object.isRequired,
  getRoomMessageType: PropTypes.func.isRequired,
  selectedCount: PropTypes.number,
  cancelSelected: PropTypes.func.isRequired,
  goRoomInfoBtn: PropTypes.func.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
  selectedMessageAction: PropTypes.func.isRequired,
  conformControl: PropTypes.func.isRequired,
  flatListRef: PropTypes.func.isRequired,
  actionSheetActions: PropTypes.array.isRequired,
  actionSheetControl: PropTypes.func.isRequired,
  toolbarActions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onScroll: PropTypes.func.isRequired,
  forwardModalControl: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(RoomHistoryComponent);