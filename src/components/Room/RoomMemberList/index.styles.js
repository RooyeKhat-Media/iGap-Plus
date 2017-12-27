import {uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../constants/fonts/index';

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
        listItem: {
          primaryText: {
            ...IRANSans_Medium,
          },
        },
      },
    },
  ],
]);