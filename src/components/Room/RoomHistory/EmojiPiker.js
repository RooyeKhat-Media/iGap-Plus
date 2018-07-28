import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {I18nManager, ScrollView, Text, View} from 'react-native';
import {uniqueId} from 'lodash';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import emojiList from '../../../constants/emojiList';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';

let savedPiker = null;
export const onEmojiSelected = [];

class EmojiPiker extends PureComponent {

  onSelect = (emoji) => {
    if (onEmojiSelected.length > 0) {
      onEmojiSelected[0](emoji);
    }
  };

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  piker = () => {
    const styles = this.getStyles();
    savedPiker = <View style={styles.container}>
      <ScrollableTabView initialPage={0} prerenderingSiblingsNumber={8}
        renderTabBar={() => <ScrollableTabBar textStyle={styles.text} underlineStyle={{height: 0}}/>}>
        {
          emojiList.map((tab, i) => (
            <ScrollView key={i} tabLabel={tab.tabLabel}>
              <EmojiCategory emojiList={tab.list} onEmojiSelected={this.onSelect}/>
            </ScrollView>
          ))
        }
      </ScrollableTabView>
    </View>;
    return savedPiker;
  };

  render() {
    return (
      savedPiker ? savedPiker : this.piker()
    );
  }
}

class EmojiCategory extends PureComponent {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {emojiList, onEmojiSelected} = this.props;
    return (
      <View>
        <View style={styles.categoryInner}>
          {emojiList.map((item, i) =>
            <Text key={i} style={styles.emoji} onPress={() => onEmojiSelected(item)}>{item}</Text>
          )}
        </View>
      </View>
    );
  }
}

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          height: 250,
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        },
        categoryInner: {
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
        },
        emoji: {
          minWidth: 40,
          fontSize: 28,
          color: 'black',
          margin: 2,
        },
        text: {
          fontSize: 22,
          color: 'black',
        },
      },
    },
  ],
  true,
];

EmojiPiker.propTypes = {
  onEmojiSelected: PropTypes.func,
};

export default EmojiPiker;