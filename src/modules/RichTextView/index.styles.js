import {uniqueId} from 'lodash';
import {IRANSans_Bold} from '../../constants/fonts/index';

const uId = uniqueId();
const styles = [
  uId,
  () => [
    {
      query: {},
      style: {
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
          ...IRANSans_Bold,
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
      },
    },
  ],
  true,
];

export default styles;
