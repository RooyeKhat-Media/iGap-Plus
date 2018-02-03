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

  render() {
    const {nearbyList, getCommentForUser, mapOnMarkerClick} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>

        <FlatList
          keyExtractor={(item, index) => ('nb-' + index)}
          data={nearbyList}
          renderItem={(nearbyUser) =>
            (<View>
              <ListAvatarComponent
                nearbyUser={nearbyUser}
                getCommentForUser={getCommentForUser}
                mapOnMarkerClick={mapOnMarkerClick}
              />
            </View>)}
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