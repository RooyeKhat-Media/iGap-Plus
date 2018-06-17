import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Button, FlatList, Icon, TextInput} from '../index';
import styleSheet from './index.styles';
import PropTypes from 'prop-types';
import i18n from '../../../i18n';
import {appTheme} from '../../../themes/default/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class SelectListModal extends React.Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selected: {},
    };
  }

  onSelectItem = (item) => {
    const {multi, onSubmit} = this.props;
    if (multi) {
      this.setState((prevState) => {
        const selected = {...prevState.selected};
        if (selected[item.key]) {
          delete selected[item.key];
        } else {
          selected[item.key] = true;
        }
        return {
          selected,
        };
      });
    } else {
      onSubmit(item.key);
    }
  };

  onSubmit = () => {
    const {selected} = this.state;
    const {onSubmit} = this.props;
    onSubmit(selected);
  };

  render() {
    const {intl, multi, searchable, data, headerTitle, autoFocus, flexContainer} = this.props;
    const {searchText, selected} = this.state;
    const styles = this.getStyles();
    const options = data.filter(function(option) {
      return searchText === '' || (option.filter && option.filter.indexOf(searchText.toLowerCase()) >= 0);
    });
    return (
      <View style={flexContainer ? styles.flexContainer : styles.container}>
        <View style={styles.headerWrap}>
          <View style={styles.headerTopWrap}>
            {headerTitle && (<Text style={styles.headerTitle}>{headerTitle}</Text>)}
          </View>
          {searchable &&
          (<View style={styles.searchWrap}>
            <View style={styles.searchIcon}>
              <Icon name="search" size={26} color={appTheme.icon}/>
            </View>
            <TextInput style={styles.searchInput} autoFocus={autoFocus} underlineColorAndroid="transparent"
              onChangeText={(text) => {
                this.setState({searchText: text});
              }}/>
          </View>)}
        </View>
        <View style={styles.bodyWrap}>
          <FlatList data={options} extraData={selected} keyExtractor={this.keyExtractor} renderItem={this.renderItem}/>
        </View>
        <View style={styles.footerWrap}>
          <View style={styles.headerTopActions}>
            <Button primary
              upperCase={false}
              style={styles.dialogBtn}
              onPress={this.onSubmit}
              text={intl.formatMessage(i18n.dismiss)}/>
            {multi && (<Button primary
              upperCase={false}
              style={styles.dialogBtn}
              onPress={this.onSubmit}
              text={intl.formatMessage(i18n.ok)}/>)}
          </View>
        </View>
      </View>
    );
  }

  renderItem = ({item}) => {
    const {renderItem} = this.props;
    const selected = !!this.state.selected[item.key];
    if (renderItem) {
      return renderItem(item, selected, this.onSelectItem);
    } else {
      return (<TouchableOpacity key={item.key} onPress={() => {
        this.onSelectItem(item);
      }}>
        {item.element}
      </TouchableOpacity>);
    }
  };

  keyExtractor = (item) => {
    return 'picker-' + item.key;
  };
}

SelectListModal.defaultProps = {
  autoFocus: true,
};
SelectListModal.propTypes = {
  intl: intlShape.isRequired,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  renderItem: PropTypes.func,
  onSubmit: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string,
    filter: PropTypes.string,
    element: PropTypes.element,
  })).isRequired,
  headerTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  autoFocus: PropTypes.bool,
};
export default injectIntl(SelectListModal);