import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 0,
          alignSelf: 'center',
        },
        loadingContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        },
        loadingIndicator: {},
        loadingTxt: {
          paddingLeft: 10, paddingTop: 1,
        },
        dialogWrap: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        dialog: {
          container: {
            backgroundColor: '#fff',
            paddingTop: 0,
          },
        },
      },
    },
  ],
];