import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Checkbox, Modal} from '../index';
import {Text, View} from 'react-native';
import styleSheet from './index.style';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class DialogModal extends PureComponent {

  state = {
    checkboxChecked: false,
  };

  componentDidMount() {
    const {checkbox} = this.props;
    if (checkbox) {
      this.setState({checkboxChecked: !!checkbox.checked});
    }
  }

  componentWillReceiveProps(nextProps) {
    const {checkbox} = nextProps;
    if (checkbox && (!this.props.checkbox || checkbox.checked !== this.props.checkbox.checked)) {
      this.setState({checkboxChecked: checkbox.checked});
    }
  }

  toggleCheck = (checked) => {
    this.setState({checkboxChecked: checked});
  };


  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  controlRef = (ref) => {
    const {control} = this.props;
    if (ref) {
      this.modal = ref.getWrappedInstance();
      control(this.modal);
    }
  };

  render() {
    const {intl, type, title, content, actions, checkbox} = this.props;
    const {checkboxChecked} = this.state;
    const styles = this.getStyles();
    return (
      <Modal ref={
        this.controlRef} type={type} style={styles.dialogWrap}>
        <View style={styles.dialog}>
          <Text style={styles.dialogHeader}>{title}</Text>
          <Text style={styles.dialogContent}>{content}</Text>
          {!!checkbox && (<View style={styles.dialogSwitch}>
            <Checkbox label={checkbox.label} value={checkbox.value} checked={checkboxChecked}
              onCheck={this.toggleCheck}/>
          </View>)}
          <View style={styles.dialogActions}>
            {actions ? actions.map((action, idex) => (
              <Button
                key={'action-' + idex}
                upperCase={false} primary
                text={action.label}
                onPress={() => {
                  if (action.onPress) {
                    action.onPress(this.state.checkboxChecked);
                  }
                  this.modal.close();
                }}
                style={styles.dialogBtn}
              />
            )) : (
              <Button
                primary
                text={intl.formatMessage(i18n.ok)}
                onPress={this.modal.close}
                style={styles.dialogBtn}
              />
            )}

          </View>
        </View>
      </Modal>
    );
  }
}

DialogModal.propTypes = {
  control: PropTypes.func.isRequired,
  type: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onPress: PropTypes.func,
    })
  ),
  checkbox: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    checked: PropTypes.bool,
  }),
  intl: intlShape.isRequired,
};

export default injectIntl(DialogModal);