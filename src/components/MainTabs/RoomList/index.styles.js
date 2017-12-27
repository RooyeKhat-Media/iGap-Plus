import {black600} from '../../../themes/default/index';
import {Neuropolitical} from '../../../constants/fonts/index';

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textTitle: {
    flex: 1,
    color: black600,
    fontSize: 18,
    textAlign: 'left',
    ...Neuropolitical,
    textAlignVertical: 'center',
  },

};