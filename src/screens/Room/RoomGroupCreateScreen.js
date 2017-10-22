import React, { Component} from 'react';
import RoomGroupCreateComponent from '../../components/Room/RoomGroupCreate/index';
import {requiredValidator, stringValidator} from '../../utils/validator';
import {GroupCreate} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {GROUP_CREATE} from '../../constants/methods/index';

const formRules = {
  groupName: [
    {validate: requiredValidator},
    {validate: stringValidator},
  ],
  groupDescription: [],
};

class RoomGroupCreateScreen extends Component {
    static navigationOptions = {
      header: null,
    };

    handleFormData = async (formData, setError) => {
      try {
        /**
             * @type ProtoGroupCreate
             **/
        const groupCreate = new GroupCreate();
        groupCreate.setName( formData.groupName);
        groupCreate.setDescription(   formData.groupDescription);
        await Api.invoke(GROUP_CREATE, groupCreate);

        this.props.navigation.goBack();

      } catch (e) {
        // TODO COMPLETE ERRORS
        setError('create group', e.name + ': ' + e.message);
      }
    };

    render() {
      return (
        <RoomGroupCreateComponent
          goBack={this.props.navigation.goBack}
          formRules={formRules}
          handleFormData={this.handleFormData}
        />
      );
    }
}

RoomGroupCreateScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default RoomGroupCreateScreen;