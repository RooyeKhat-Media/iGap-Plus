import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Avatar, Drawer} from '../BaseUI/index';
import i18n from '../../i18n/index';

class MainDrawerComponent extends React.Component {
  render() {
    const {
      intl,
      goContacts,
    } = this.props;

    return (
      <View style={{flex: 1}}>
        <Drawer>
          <Drawer.Header>
            <Drawer.Header.Account
              avatar={<Avatar key="a" text={'A'}/>}
              accounts={[
                {key: 1, avatar: <Avatar key="b" text="B"/>},
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
                icon: 'people', value: intl.formatMessage(i18n.mainDrawerContacts), onPress: () => {
                  goContacts();
                },
              },
            ]}
          />
        </Drawer>
      </View>
    );
  }
}

MainDrawerComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(MainDrawerComponent);