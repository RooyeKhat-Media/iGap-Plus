import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        root: {
          flex: 1,
          backgroundColor: 'white',
        },
        itemLayout: {
          height: 72,
          justifyContent: 'center',
        },
        rowLayout: {
          flexDirection: 'row',
        },
        CallTypeIcon: {
          marginTop: 6,
        },
        titleText: {
          fontSize: 18,
          color: 'black',
        },
        rightElement: {
          paddingRight: 10,
          paddingLeft: 5,
        },
        icon: {
          marginRight: 5,
        },
      },
    },
  ],
];