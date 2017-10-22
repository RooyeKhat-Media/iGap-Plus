import React, {PropTypes, Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import { Toolbar, MCIcon} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {injectIntl} from 'react-intl';

class NewComponent extends Component {

    getStyles = () => {
      return MemoizeResponsiveStyleSheet(styleSheet);
    };

    newGroup = () => {
      alert('newGroup');
    };

    newChannel = () => {
      alert('newChannel');
    };

    newSecretP2pChat = () => {
      alert('newSecretP2pChat');
    };

    newCreateInvoice = () => {
      alert('newCreateInvoice');
    };

    render() {
      const {intl, goContactNew} = this.props;
      const styles = this.getStyles();

      return (
        <View style={styles.container}>
          <Toolbar
            leftElement={<Text style={styles.igapCallText}>plus</Text>}
            rightElement="more-vert"
            onRightElementPress={() => alert('menu')}
            searchable={{
              autoFocus: true,
              placeholder: 'Search',
            }}
          />
          <ScrollView>

            <View   style={styles.sectionTop}>
              <TouchableOpacity style={styles.rowField} onPress={ this.newGroup }>
                <MCIcon name="account-multiple" style={styles.iconFeild} size={24}/>
                <Text  style={styles.textitem} >{intl.formatMessage(i18n.newNewGroup)}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowField} onPress={ this.newChannel }>
                <MCIcon name="bullhorn" style={styles.iconFeild} size={24}/>
                <Text  style={styles.textitem} >{intl.formatMessage(i18n.newNewChannel)}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowField} onPress={ this.newSecretP2pChat }>
                <MCIcon name="lock" style={styles.iconFeild} size={24}/>
                <Text  style={styles.textitem} >{intl.formatMessage(i18n.newNewSecretP2PChat)}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowField} onPress={ this.newCreateInvoice }>
                <MCIcon name="credit-card" style={styles.iconFeild} size={24}/>
                <Text  style={styles.textitem} >{intl.formatMessage(i18n.newNewCreateInvoice)}</Text>
              </TouchableOpacity>

              <View  style={[styles.rowField, {  marginTop:15, marginBottom:7}]}>
                <Text  style={styles.titleText} >{intl.formatMessage(i18n.newContacts)}</Text>
                <View   style={styles.divider}/>
              </View>

              <TouchableOpacity style={[styles.rowField, {marginLeft:10}]} onPress={goContactNew }>
                <MCIcon name="plus" style={styles.iconFeild} size={28}/>
                <Text  style={styles.textitem} >{intl.formatMessage(i18n.newAddContacts)}</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      );
    }
}

NewComponent.propTypes = {
  goContactNew: PropTypes.func.isRequired,
};

export default injectIntl(NewComponent);