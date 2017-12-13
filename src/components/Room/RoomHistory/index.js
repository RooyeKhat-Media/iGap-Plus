import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Confirm, FlatList, ListItem, Toolbar} from '../../BaseUI/index';
import styles from './index.styles';
import SendBox from './SendBox';
import RoomMessage from '../../../containers/Unit/RoomMessage';
import JoinBox from './JoinBox';
import ActionSheet from '../../BaseUI/ActionSheet/index';
import i18n from '../../../i18n/en';

class RoomHistoryComponent extends React.PureComponent {

  setRef = (ref) => {
    const {flatListRef} = this.props;
    this.flatList = ref;
    flatListRef(ref);
  };

  keyExtractor = (item, index) => {
    return item;
  };

  renderItem = ({item, index}) => {
    const {onMessagePress, onMessageLongPress, selectedList, roomType, roomId} = this.props;
    return (<RoomMessage
      onMessagePress={onMessagePress}
      onMessageLongPress={onMessageLongPress}
      selected={!!selectedList[item]}
      roomType={roomType}
      roomId={roomId}
      messageId={item}/>);
  };

  getItemLayout = (data, index) => {
    return {length: 80, offset: 80 * index, index};
  };

  render() {
    const {intl, Form, readOnly, isParticipant, isPublic, roomMute, joinBoxToggle, messageList, selectedList, selectedCount, actionSheetActions, actionSheetControl, conformControl, onScroll} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.mainWrap}>
          <View style={styles.messageListWrap}>
            {!selectedCount ? this.renderBaseToolbar() : this.renderMessagePropToolbar()}
            {messageList && messageList.length ? (<FlatList
              ref={this.setRef}
              data={messageList}
              extraData={selectedList}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              getItemLayout={this.getItemLayout}
              waitForInteractions={false}
              onScroll={onScroll}
              initialNumToRender={10}
              initialScrollIndex={messageList.length - 1}/>) : null}
          </View>
          <ActionSheet
            title={intl.formatMessage(i18n.roomHistoryActionTitle)}
            actions={actionSheetActions}
            control={actionSheetControl}/>
          <Confirm control={conformControl}/>
          {!readOnly ? (<SendBox Form={Form}/>) : (
            <JoinBox joinBoxToggle={joinBoxToggle} isPublic={isPublic} roomMute={roomMute}
              isParticipant={isParticipant}/>)}
        </View>
      </View>
    );
  }

  renderBaseToolbar() {
    const {roomTitle, goRoomInfoBtn, goBack} = this.props;
    return (<Toolbar
      style={styles.toolBar}
      leftElement="arrow-back"
      onLeftElementPress={goBack}
      centerElement={
        <ListItem
          centerElement={{
            primaryText: roomTitle,
          }}
          style={styles.toolBarListItem}
        />
      }
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
      style={styles.toolBar}
      leftElement="close"
      onLeftElementPress={cancelSelected}
      centerElement={selectedCount.toString()}
      rightElement={toolbarActions}
      onRightElementPress={selectedMessageAction}
    />);
  }
}

RoomHistoryComponent.propTypes = {
  intl: intlShape.isRequired,
  roomId: PropTypes.string.isRequired,
  roomType: PropTypes.number.isRequired,
  roomTitle: PropTypes.string.isRequired,
  Form: PropTypes.object.isRequired,
  messageList: PropTypes.arrayOf(PropTypes.string),
  selectedList: PropTypes.object.isRequired,
  selectedCount: PropTypes.number,
  cancelSelected: PropTypes.func.isRequired,
  goRoomInfoBtn: PropTypes.func.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
  selectedMessageAction: PropTypes.func.isRequired,
  toolbarActions: PropTypes.arrayOf(PropTypes.string).isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(RoomHistoryComponent);