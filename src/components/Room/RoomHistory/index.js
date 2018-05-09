import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {Confirm, Toolbar, PopupMenu} from '../../BaseUI/index';
import styles from './index.styles';
import SendBox from './SendBox';
import RoomMessage from '../../../containers/Unit/RoomMessage';
import JoinBox from './JoinBox';
import ActionSheet from '../../BaseUI/ActionSheet/index';
import i18n from '../../../i18n/en';
import ForwardList from '../../../containers/Unit/ForwardList';
import {Proto} from '../../../modules/Proto/index';
import RoomActions from '../../../containers/Unit/RoomActions';
import {APP_MODAL_ID_SECONDARY} from '../../../constants/app';
import {textTitleStyle} from '../../../themes/default/index';
import {
  BOX_TYPE_CHANNEL,
  BOX_TYPE_CHAT,
  BOX_TYPE_GROUP,
  BOX_TYPE_NONE,
  BOX_TYPE_OWNER,
  getSecondaryWidth,
  outerDimension,
} from '../../../modules/DimensionCalculator/index';
import {getAuthorHash} from '../../../utils/app';
import ScrollDown from './ScrollDown';
import ReturnToCall from '../../Call/ReturnToCall';

class RoomHistoryComponent extends React.PureComponent {

  _dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2 || this.prevSelectedList[r1] !== this.props.selectedList[r1];
  });

  getDataProvider = (messageList) => {
    return this._dataProvider.cloneWithRows(messageList || []);
  };

  constructor(args) {
    super(args);
    this.prevSelectedList = {};
    const {messageList} = this.props;

    this._layoutProvider = new LayoutProvider(this.layoutProviderType, (type, dim, index) => {
      const {getRoomMessage, messageList, roomType} = this.props;
      const message = getRoomMessage(messageList[index]);
      let boxType = BOX_TYPE_NONE;

      if (roomType === Proto.Room.Type.CHANNEL) {
        boxType = BOX_TYPE_CHANNEL;
      } else if (message && message.authorHash === getAuthorHash()) {
        boxType = BOX_TYPE_OWNER;
      } else if (roomType === Proto.Room.Type.CHAT) {
        boxType = BOX_TYPE_CHAT;
      } else if (roomType === Proto.Room.Type.GROUP) {
        boxType = BOX_TYPE_GROUP;
      }

      const height = outerDimension(message, boxType).height || 0;

      dim.width = getSecondaryWidth();
      dim.height = height;
    });

    this.state = {
      dataProvider: this.getDataProvider(messageList),
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
      dataProvider: this.getDataProvider(messageList),
    }, () => {
      this.prevSelectedList = nextProps.selectedList;
    });
  }

  renderItem = (type, item) => {
    const {onMessagePress, onMessageLongPress, selectedList, roomType, roomId} = this.props;
    return (<View style={styles.messageWrap}>
      <RoomMessage
        roomId={roomId}
        messageId={item}
        roomType={roomType}
        selected={!!selectedList[item]}
        onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>
    </View>);
  };

  onScroll = (event, offsetX, offsetY) => {
    const {onScroll} = this.props;
    onScroll(event, offsetX, offsetY);
    this.actionRef.onScroll(event, offsetX, offsetY);
  };

  flatListRef = (ref) => {
    const {flatListRef} = this.props;
    flatListRef(ref);
    this.flatList = ref;
  };

  scrollToEnd = () => {
    this.flatList.scrollToTop();
  };

  render() {
    const {intl, Form, roomId, roomType, readOnly, isParticipant, isPublic, roomMute, joinBoxToggle, selectedCount, actionSheetControl, forwardModalControl, conformControl} = this.props;
    const {dataProvider} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.mainWrap}>
          {!selectedCount ? this.renderBaseToolbar() : this.renderMessagePropToolbar()}
          <ReturnToCall/>
          <View style={styles.messageListWrap}>
            <RecyclerListView
              ref={this.flatListRef}
              canChangeSize={true}
              renderAheadOffset={640}
              layoutProvider={this._layoutProvider}
              dataProvider={dataProvider}
              rowRenderer={this.renderItem}
              onScroll={this.onScroll}
              forceNonDeterministicRendering={true}/>
          </View>

          <ScrollDown
            scrollToEnd={this.scrollToEnd}
            ref={(ref) => {
              this.actionRef = ref;
            }}/>
          <View style={styles.bottomWrap}>
            <RoomActions roomId={roomId} roomType={roomType}/>
            {!readOnly ? (<SendBox Form={Form}/>) : (
              <JoinBox joinBoxToggle={joinBoxToggle} isPublic={isPublic} roomMute={roomMute}
                isParticipant={isParticipant}/>)}
          </View>

          <ActionSheet
            type={APP_MODAL_ID_SECONDARY}
            title={intl.formatMessage(i18n.roomHistoryActionTitle)}
            ref={actionSheetControl}/>
          <Confirm control={conformControl} type={APP_MODAL_ID_SECONDARY}/>
          <ForwardList ref={forwardModalControl}/>

        </View>
      </View>
    );
  }

  renderBaseToolbar() {
    const {intl, roomTitle, clientUpdating, goRoomInfoBtn, goBack, onRoomHistoryMorePress} = this.props;
    return (<Toolbar
      leftElement="arrow-back"
      onLeftElementPress={goBack}
      centerElement={<Text numberOfLines={1} style={textTitleStyle}>
        {clientUpdating ? intl.formatMessage(i18n.clientUpdating) : roomTitle}</Text>}
      rightElement={(<PopupMenu actionList={[intl.formatMessage(i18n.roomHistoryActionReport)]} type={APP_MODAL_ID_SECONDARY} onPress={onRoomHistoryMorePress}/>)}
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
  clientUpdating: PropTypes.bool.isRequired,
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
  actionSheetControl: PropTypes.func.isRequired,
  toolbarActions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onScroll: PropTypes.func.isRequired,
  forwardModalControl: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(RoomHistoryComponent);