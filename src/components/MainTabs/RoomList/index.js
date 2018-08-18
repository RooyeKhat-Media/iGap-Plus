import React from 'react';
import PropType from 'prop-types';
import {Text, View} from 'react-native';
import {filter} from 'lodash';
import MaterialTabs from 'react-native-material-tabs';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {ActionSheet, Confirm, Toolbar} from '../../BaseUI/index';
import RoomListItem from '../../../containers/Unit/RoomListItem';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import i18n from '../../../i18n';
import {APP_MODAL_ID_PRIMARY, SOUND_PLAYER_BOX_TOOLBAR} from '../../../constants/app';
import {getPrimaryWidth} from '../../../modules/DimensionCalculator';
import ReturnToCall from '../../Call/ReturnToCall';
import {appTheme} from '../../../themes/default/index';
import SoundPlayer from '../../../containers/Unit/SoundPlayer';
import ConnectionStatus from '../../../containers/Unit/ConnectionStatus';
import {Proto} from '../../../modules/Proto/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {IRANSans} from '../../../constants/fonts/index';
import {getRoomType} from '../../../utils/app';

class RoomListComponent extends React.PureComponent {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  getDataProvider = (roomList, selectedTab) => {
    const filterRoomList = filter(roomList, (item) => {
      switch (selectedTab) {
        case 1:
          return getRoomType(item.id) === Proto.Room.Type.CHAT;
        case 2:
          return getRoomType(item.id) === Proto.Room.Type.GROUP;
        case 3:
          return getRoomType(item.id) === Proto.Room.Type.CHANNEL;
        default:
          return true;
      }
    });
    return new DataProvider((r1, r2) => {
      return r1.id !== r2.id;
    }).cloneWithRows(filterRoomList);
  };

  constructor(args) {
    super(args);
    const {roomList} = this.props;

    this._layoutProvider = new LayoutProvider(() => {
      return 'DEFAULT';
    }, (type, dim) => {
      dim.width = getPrimaryWidth();
      dim.height = 72;
    });
    this.state = {
      selectedTab: 0,
      dataProvider: this.getDataProvider(roomList, 0),
      actions: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const {roomList} = nextProps;
    this.setState({
      dataProvider: this.getDataProvider(roomList, this.state.selectedTab),
    });
  }

  _rowRenderer = (type, item) => {
    const {onPress, onLongPress} = this.props;
    return (<RoomListItem onLongPress={onLongPress} onPress={onPress} roomId={item.id}/>);
  };

  onChangeTab = (index) => {
    const {roomList} = this.props;
    this.setState({
      selectedTab: index,
      dataProvider: this.getDataProvider(roomList, index),
    });
  };

  render() {
    const {intl, clientUpdating, actionSheetControl, confirmControl, roomList} = this.props;
    const styles = this.getStyles();
    const {dataProvider} = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Toolbar
            hideConnectionStatus={true}
            hideSoundPlayer={true}
            centerElement={
              clientUpdating ?
                intl.formatMessage(i18n.clientUpdating)
                :
                <Text style={styles.textTitle}>{intl.formatMessage(i18n.iGapPlus)}</Text>
            }
          />
          <MaterialTabs
            barColor={appTheme.pageBackground}
            indicatorColor={'#ffffffff'}
            activeTextColor={appTheme.primary}
            inactiveTextColor={appTheme.secondaryText}
            textStyle={{...IRANSans}}
            items={[
              intl.formatMessage(i18n.roomListFilterAll),
              intl.formatMessage(i18n.roomListFilterChat),
              intl.formatMessage(i18n.roomListFilterGroup),
              intl.formatMessage(i18n.roomListFilterChannel),
            ]}
            selectedIndex={this.state.selectedTab}
            onChange={this.onChangeTab}
          />
          <ConnectionStatus/>
          <SoundPlayer type={SOUND_PLAYER_BOX_TOOLBAR}/>
          <ReturnToCall/>
          <View style={styles.roomListWrap}>
            {!!roomList.length && (<RecyclerListView
              canChangeSize={true}
              renderAheadOffset={640}
              layoutProvider={this._layoutProvider}
              dataProvider={dataProvider}
              rowRenderer={this._rowRenderer}/>)}
          </View>
        </View>
        <ActionSheet
          type={APP_MODAL_ID_PRIMARY}
          title={intl.formatMessage(i18n.roomListActionTitle)}
          ref={actionSheetControl}/>
        <Confirm control={confirmControl} type={APP_MODAL_ID_PRIMARY}/>
      </View>
    );
  }
}

RoomListComponent.propTypes = {
  intl: intlShape.isRequired,
  clientUpdating: PropType.bool,
  roomList: PropType.array,
};
export default injectIntl(RoomListComponent);