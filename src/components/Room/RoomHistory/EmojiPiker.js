import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import emojiList from '../../../constants/emojiList';

let savedPiker = null;
export const onEmojiSelected = [];

class EmojiPiker extends PureComponent {

  onSelect = (emoji) => {
    if (onEmojiSelected.length > 0) {
      onEmojiSelected[0](emoji);
    }
  };

  piker = () => {
    savedPiker = <View style={styles.container}>
      <ScrollableTabView initialPage={0} prerenderingSiblingsNumber={8}
        renderTabBar={() => <ScrollableTabBar textStyle={styles.text}/>}>
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
  render() {
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

const styles = StyleSheet.create({
  container: {
    height: 250,
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
});

EmojiPiker.propTypes = {
  onEmojiSelected: PropTypes.func,
};

export default EmojiPiker;