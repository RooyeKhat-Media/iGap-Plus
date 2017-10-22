import React, { Component} from 'react';
import RoomChannelCreateComponent from '../../components/Room/RoomChannelCreate/index';
import {requiredValidator, stringValidator} from '../../utils/validator';
import {ChannelCreate} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {CHANNEL_CREATE} from '../../constants/methods/index';

const formRules = {
  channelName: [
    {validate: requiredValidator},
    {validate: stringValidator},
  ],
  ChannelDescription: [],
};

class RoomChannelCreateScreen extends Component {
    static navigationOptions = {
      header: null,
    };

    handleFormData = async (formData, setError) => {
      try {
        /**
             * @type ProtoChannelCreate
             **/
        const channelCreate = new ChannelCreate();
        channelCreate.setName(formData.channelName);
        channelCreate.setDescription(formData.channelDescription);
        await Api.invoke(CHANNEL_CREATE, channelCreate);

        this.props.navigation.goBack();

      } catch (e) {
        // TODO COMPLETE ERRORS
        setError('create Channel', e.name + ': ' + e.message);
      }
    };

    render() {
      return (
        <RoomChannelCreateComponent
          goBack={this.props.navigation.goBack}
          formRules={formRules}
          handleFormData={this.handleFormData}
        />
      );
    }
}

RoomChannelCreateScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default RoomChannelCreateScreen;