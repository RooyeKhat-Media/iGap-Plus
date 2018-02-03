import {uniqueId} from 'lodash';
import {StyleSheet} from 'react-native';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
        },
        mapBox: {
          ...StyleSheet.absoluteFillObject,
        },
        latlng: {
          width: 200,
          alignItems: 'stretch',
        },
        actionButton: {
          container: {
            width: 70,
            height: 70,
            borderRadius: 100,
          },
        },
      },
    },
  ],
];