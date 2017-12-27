import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.style';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {DialogModal, FlatList, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import UserListItem from '../../../containers/Unit/UserListItem';
import {textTitleStyle} from '../../../themes/default/index';

let selectedUserID = '0';

class BlockComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {intl, goBack, blockList, blockAction, unBlockAction} = this.props;

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          rightElement="add"
          onRightElementPress={blockAction}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.settingBlockList)}</Text>}
        />

        <FlatList
          data={blockList}
          keyExtractor={(item, index) => ('block-' + index)}
          renderItem={({item}) => <UserListItem userId={item.userId.toString()} onPress={() => {
            selectedUserID = item.userId;
            this.dialog.open();
          }}/>}
        />

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.blockTitleDialog} />}
        content={<FormattedMessage {...i18n.blockContentDialog} />}
        actions={[
          {
            label: intl.formatMessage(i18n.ok),
            onPress: () => {
              unBlockAction(selectedUserID);
            },
          },
          {
            label: intl.formatMessage(i18n.cancel),
            onPress: () => {
            },
          },
        ]}
        />
      </View>
    );
  }
}

BlockComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  blockAction: PropTypes.func.isRequired,
  unBlockAction: PropTypes.func.isRequired,
  blockList: PropTypes.array.isRequired,
};

export default injectIntl(BlockComponent);