import React from 'react';
import {Dimensions, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {ActionSheet, Toolbar} from '../../BaseUI/index';
import RoomListItem from '../../../containers/Unit/RoomListItem';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import i18n from '../../../i18n';

class RoomListComponent extends React.PureComponent {

  constructor(args) {
    super(args);
    const {roomList} = this.props;
    let {width} = Dimensions.get('window');
    this.dataProvider = new DataProvider((r1, r2) => {
      return r1.id !== r2.id;
    });

    this._layoutProvider = new LayoutProvider(
      index => {
        return 0;
      },
      (type, dim) => {
        dim.width = width;
        dim.height = 72;
      }
    );
    this.state = {
      dataProvider: this.dataProvider.cloneWithRows(roomList),
      actions: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const {roomList} = nextProps;
    this.setState({
      dataProvider: this.dataProvider.cloneWithRows(roomList),
    });
  }

  _rowRenderer = (type, item) => {
    const {onPress, onLongPress} = this.props;
    return (<RoomListItem onLongPress={onLongPress} onPress={onPress} roomId={item.id}/>);
  };

  render() {
    const {intl, actionSheetControl, actions} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Toolbar
            style={{titleText: {fontFamily: 'neuropolitical', fontWeight: '100'}}}
            centerElement="iGap+"/>
          <RecyclerListView
            layoutProvider={this._layoutProvider}
            dataProvider={this.state.dataProvider}
            rowRenderer={this._rowRenderer}/>
        </View>
        <ActionSheet
          title={intl.formatMessage(i18n.roomListActionTitle)}
          actions={actions}
          control={actionSheetControl}/>
      </View>
    );
  }
}

RoomListComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomListComponent);