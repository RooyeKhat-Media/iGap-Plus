import React, {Component} from 'react';
import IntroComponent from '../components/Intro';
import Call from '../assets/images/intro/call';
import Chat from '../assets/images/intro/chat';
import Free from '../assets/images/intro/free';
import Logo from '../assets/images/intro/logo';
import Security from '../assets/images/intro/security';
import Transfer from '../assets/images/intro/transfer';
import {FormattedMessage} from 'react-intl';

const pages = [
  {
    ImageSvg: Logo,
    title: (<FormattedMessage id="Intro.logoTitle" defaultMessage="iGap Messenger"/>),
    subtitle: (
      <FormattedMessage id="Intro.logoSubTitle" defaultMessage="What is the reason I started using iGap? let's Go!"/>),
  },
  {
    ImageSvg: Security,
    title: (<FormattedMessage id="Intro.securityTitle" defaultMessage="Security & Privacy"/>),
    subtitle: (<FormattedMessage id="Intro.securitySubTitle"
      defaultMessage="iGap attaches the utmost importance to your security and privacy using the individual encryption algorithms and guarantees a safe and secure connection between you, your friends and family."/>),
  },
  {
    ImageSvg: Chat,
    title: (<FormattedMessage id="Intro.chatTitle" defaultMessage="Chat"/>),
    subtitle: (<FormattedMessage id="Intro.chatSubTitle"
      defaultMessage="You can have one-on-one or group chats and even create your own channel and add members in order to share information with millions of people."/>),
  },
  {
    ImageSvg: Call,
    title: (<FormattedMessage id="Intro.callTitle" defaultMessage="Intro callTitle"/>),
    subtitle: (<FormattedMessage id="Intro.callSubTitle" defaultMessage="Intro callSubTitle"/>),
  },
  {
    ImageSvg: Transfer,
    title: (<FormattedMessage id="Intro.transferTitle" defaultMessage="File Transferring"/>),
    subtitle: (<FormattedMessage id="Intro.transferSubTitle"
      defaultMessage="You have an authority to transfer any file with any size and type or save them on your cloud storage; and then share anything you'd like to with anyone you'd want to."/>),
  },
  {
    ImageSvg: Free,
    title: (<FormattedMessage id="Intro.freeTitle" defaultMessage="Everything for Free in iGap!"/>),
    subtitle: (<FormattedMessage id="Intro.freeSubTitle"
      defaultMessage={`Let's stop waiting! iGap is thoroughly free. So,\n just now build your own world freely.`}/>),
  },
];

class Intro extends Component {

  _onClick = () => {
    console.log('OnClicked');
  };

  render() {
    return (
      <IntroComponent pages={pages} onBtnClick={this._onClick}/>
    );
  }
}

export default Intro;
