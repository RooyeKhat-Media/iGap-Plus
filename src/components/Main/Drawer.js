import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Avatar, Drawer} from '../BaseUI';
import {goUserTwoStepRecoveryByEmailScreen} from '../../navigators/AppNavigator';

class MainDrawer extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Drawer>
          <Drawer.Header>
            <Drawer.Header.Account
              avatar={<Avatar text={'A'}/>}
              accounts={[
                {avatar: <Avatar text="B"/>},
                {avatar: <Avatar text="C"/>},
              ]}
              footer={{
                dense: true,
                centerElement: {
                  primaryText: 'Reservio',
                  secondaryText: 'business@email.com',
                },
                rightElement: 'arrow-drop-down',
              }}
            />
          </Drawer.Header>
          <Drawer.Section
            divider
            items={[
              {
                icon: 'bookmark-border', value: 'Notifications', onPress: () => {
                  goUserTwoStepRecoveryByEmailScreen();
                },
              },
              {icon: 'today', value: 'Calendar'},
              {icon: 'people', value: 'Clients'},
            ]}
          />
          <Drawer.Section
            title="Personal"
            items={[
              {icon: 'info', value: 'Info'},
              {icon: 'settings', value: 'Settings'},
            ]}
          />
        </Drawer>
      </View>
    );
  }
}

MainDrawer.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(MainDrawer);