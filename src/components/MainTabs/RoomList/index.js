import React from 'react';
import {Dimensions, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {ActionSheet, Toolbar} from '../../BaseUI/index';
import RoomListItem from '../../../containers/Unit/RoomListItem';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';

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
    };
  }

  componentWillReceiveProps(nextProps) {
    const {roomList} = nextProps;
    this.setState({
      dataProvider: this.dataProvider.cloneWithRows(roomList),
    });
  }
  _rowRenderer = (type, item) => {
    const {onPress} = this.props;
    return (<RoomListItem onPress={onPress} roomId={item.id}/>);
  };

  render() {
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
        <ActionSheet control={(action) => {
          this.action = action;
        }}/>
      </View>
    );
  }
}

RoomListComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomListComponent);