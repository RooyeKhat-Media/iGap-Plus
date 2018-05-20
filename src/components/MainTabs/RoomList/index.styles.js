import {black600} from '../../../themes/default/index';
import {Neuropolitical} from '../../../constants/fonts/index';

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textTitle: {
    color: black600,
    fontSize: 18,
    alignSelf: 'flex-start',
    ...Neuropolitical,
  },
  roomListWrap: {
    flex: 1,
    minWidth: 100,
    minHeight: 100,
  },
};