import React, {Component} from 'react';
import {View} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive/index';
import {injectIntl, intlShape} from 'react-intl';
import PropTypes from 'prop-types';
import ListAvatarComponent from './NearbyList/index';
import {FlatList} from '../../../../components/BaseUI';

class NearbyListComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
  }

  keyExtractor = (item, index) => ('nb-' + index);

  renderItem = (nearbyUser) => {
    const {getCommentForUser, mapOnMarkerClick} = this.props;
    return (<View>
      <ListAvatarComponent
        nearbyUser={nearbyUser}
        getCommentForUser={getCommentForUser}
        mapOnMarkerClick={mapOnMarkerClick}
      />
    </View>);
  };

  render() {
    const {nearbyList} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>

        <FlatList
          keyExtractor={this.keyExtractor}
          data={nearbyList}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

NearbyListComponent.propTypes = {
  intl: intlShape.isRequired,
  myCoordinate: PropTypes.object.isRequired,
  nearbyList: PropTypes.array.isRequired,
  mapOnMarkerClick: PropTypes.func.isRequired,
  getCommentForUser: PropTypes.func.isRequired,

};

export default injectIntl(NearbyListComponent);