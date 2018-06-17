import {uniqueId} from 'lodash';

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
      },
    },
  ],
  true,
];

export default styles;
