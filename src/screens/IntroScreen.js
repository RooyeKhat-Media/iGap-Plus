import React, {Component} from 'react';
import IntroComponent from '../components/Intro';
import Call from '../assets/images/intro/call';
import Chat from '../assets/images/intro/chat';
import Free from '../assets/images/intro/free';
import Logo from '../assets/images/intro/logo';
import Security from '../assets/images/intro/security';
import Transfer from '../assets/images/intro/transfer';
import {FormattedMessage} from 'react-intl';
import {goUserRegisterScreen} from '../navigators/AppNavigator';
import i18n from '../i18n';

const pages = [
  {
    ImageSvg: Logo,
    title: (<FormattedMessage {...i18n.introLogoTitle}/>),
    subtitle: (<FormattedMessage  {...i18n.introLogoSubTitle}/>),
  },
  {
    ImageSvg: Security,
    title: (<FormattedMessage {...i18n.introSecurityTitle}/>),
    subtitle: (<FormattedMessage {...i18n.introSecuritySubTitle}/>),
  },
  {
    ImageSvg: Chat,
    title: (<FormattedMessage {...i18n.introChatTitle}/>),
    subtitle: (<FormattedMessage {...i18n.introCallSubTitle}/>),
  },
  {
    ImageSvg: Call,
    title: (<FormattedMessage {...i18n.introCallTitle}/>),
    subtitle: (<FormattedMessage {...i18n.introCallSubTitle}/>),
  },
  {
    ImageSvg: Transfer,
    title: (<FormattedMessage{...i18n.introTransferTitle}/>),
    subtitle: (<FormattedMessage {...i18n.introTransferSubTitle}/>),
  },
  {
    ImageSvg: Free,
    title: (<FormattedMessage {...i18n.introFreeTitle}/>),
    subtitle: (<FormattedMessage {...i18n.introFreeSubTitle}/>),
  },
];

class IntroScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  _onClick = () => {
    goUserRegisterScreen();
  };

  render() {
    return (
      <IntroComponent pages={pages} onBtnClick={this._onClick}/>
    );
  }
}

export default IntroScreen;
