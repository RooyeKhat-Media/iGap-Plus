import {uniqueId} from 'lodash';

const id = uniqueId();

export default (MemberList) => ([
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
        },
        rightElementWrap: {
          flexDirection: 'row',
        },
      },
    },
  ],
]);