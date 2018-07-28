import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {BasePicker, Form, TextInputField, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {Proto} from '../../../modules/Proto/index';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class RoomReportComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, reason, valueChange, formRules, handleFormData, goBack} = this.props;
    const styles = this.getStyles();

    const options = [
      {value: Proto.ClientRoomReport.Reason.SPAM, label: intl.formatMessage(i18n.roomReportReasonSpam)},
      {value: Proto.ClientRoomReport.Reason.PORNOGRAPHY, label: intl.formatMessage(i18n.roomReportReasonPornography)},
      {value: Proto.ClientRoomReport.Reason.VIOLENCE, label: intl.formatMessage(i18n.roomReportReasonViolence)},
      {value: Proto.ClientRoomReport.Reason.ABUSE, label: intl.formatMessage(i18n.roomReportReasonAbuse)},
      {value: Proto.ClientRoomReport.Reason.OTHER, label: intl.formatMessage(i18n.roomReportReasonOther)},
    ];

    return (
      <View>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          rightElement="check"
          onRightElementPress={async () => {
            try {
              this.form.loadingOn();
              const data = await this.form.submit();
              await handleFormData(data, this.form.setError);
            } finally {
              this.form.loadingOff();
            }
          }}
          centerElement={intl.formatMessage(i18n.roomReportTitle)}
        />
        <ScrollView style={styles.scroll}>
          <Form style={styles.form} control={(form) => {
            this.form = form;
          }}>
            <Text style={styles.text}>{intl.formatMessage(i18n.roomReportReason)}</Text>
            <BasePicker
              name="reason"
              label="reason"
              selectedValue={reason}
              style={styles.piker}
              onValueChange={valueChange}>
              {options.map((item) => (
                <BasePicker.Item key={'reason-' + item.value} label={item.label} value={item.value}/>))}
            </BasePicker>

            {reason === Proto.ClientRoomReport.Reason.OTHER ?
              (<View>
                <Text style={styles.text}>{intl.formatMessage(i18n.roomReportReasonDescription)}</Text>
                <TextInputField
                  isField={true}
                  rules={formRules.description}
                  name="description"
                  label={intl.formatMessage(i18n.roomReportReasonDescription)}
                  placeholder={intl.formatMessage(i18n.roomReportReasonDescription)}
                />
              </View>) : null}
          </Form>
        </ScrollView>
      </View>
    );
  }
}

RoomReportComponent.propTypes = {
  intl: intlShape.isRequired,
  handleFormData: PropTypes.func.isRequired,
  valueChange: PropTypes.func.isRequired,
  formRules: PropTypes.object.isRequired,
  reason: PropTypes.number,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(RoomReportComponent);
