import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  del: {
    textDecorationLine: 'line-through',
  },
  em: {
    fontStyle: 'italic',
  },
  link: {
    textDecorationLine: 'underline',
  },
  mention: {
    textDecorationLine: 'underline',
  },
  paragraph: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  strong: {
    fontWeight: 'bold',
  },
  tag: {
    textDecorationLine: 'underline',
  },
  u: {
    textDecorationLine: 'underline',
  },
  url: {
    textDecorationLine: 'underline',
  },
});

export default styles;
