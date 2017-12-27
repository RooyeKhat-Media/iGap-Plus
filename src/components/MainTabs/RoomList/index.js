import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {ActionSheet, Confirm, Toolbar} from '../../BaseUI/index';
import RoomListItem from '../../../containers/Unit/RoomListItem';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import i18n from '../../../i18n';
import {APP_MODAL_ID_PRIMARY} from '../../../constants/app';

class RoomListComponent extends React.PureComponent {

  getDataProvider = (roomList) => {
    return new DataProvider((r1, r2) => {
      return r1.id !== r2.id;
    }).cloneWithRows(roomList);
  };

  constructor(args) {
    super(args);
    const {roomList} = this.props;
    let {width} = Dimensions.get('window');

    this._layoutProvider = new LayoutProvider(() => {
      return 'DEFAULT';
    }, (type, dim) => {
      dim.width = width;
      dim.height = 72;
    });
    this.state = {
      dataProvider: this.getDataProvider(roomList),
      actions: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const {roomList} = nextProps;
    this.setState({
      dataProvider: this.getDataProvider(roomList),
    });
  }

  _rowRenderer = (type, item) => {
    const {onPress, onLongPress} = this.props;
    return (<RoomListItem onLongPress={onLongPress} onPress={onPress} roomId={item.id}/>);
  };

  render() {
    const {intl, actionSheetControl, confirmControl} = this.props;
    const {dataProvider} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Toolbar
            centerElement={<Text style={styles.textTitle}>{intl.formatMessage(i18n.iGapPlus)}</Text>}
          />
          <RecyclerListView
            renderAheadOffset={640}
            layoutProvider={this._layoutProvider}
            dataProvider={dataProvider}
            rowRenderer={this._rowRenderer}/>
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
};
export default injectIntl(RoomListComponent);