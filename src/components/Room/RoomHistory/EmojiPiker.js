import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import emojiList from '../../../constants/emojiList';

class EmojiPiker extends PureComponent {

  render() {
    const {onEmojiSelected} = this.props;
    return (
      <View style={styles.container}>
        <ScrollableTabView initialPage={0} prerenderingSiblingsNumber={8}
          renderTabBar={() => <ScrollableTabBar textStyle={styles.text}/>}>
          {
            emojiList.map((tab, i) => (
              <ScrollView key={i} tabLabel={tab.tabLabel}>
                <EmojiCategory emojiList={tab.list} onEmojiSelected={onEmojiSelected}/>
              </ScrollView>
            ))
          }
        </ScrollableTabView>
      </View>
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