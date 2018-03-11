import Device from '../../../modules/Responsive/Device';
import {max, min} from 'lodash';
import {IRANSans_Medium} from '../../../constants/fonts/index';

const {width} = Device.dimensions.window;
const boxWidth = min([360, max([width, 280])]);

export default {
  container: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 20,
    borderRadius: 2,
    width: boxWidth,
    minWidth: 280,
    maxWidth: 420,
  },
  headerWrap: {
    padding: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  headerTopWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTopActions: {
    flexDirection: 'row',
  },
  headerTitle: {
    padding: 10,
    ...IRANSans_Medium,
    fontSize: 16,
    color: '#5f5f5f',
  },
  searchWrap: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    margin: 5,
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 0,
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
    height: 38,
    borderRadius: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 0,
    paddingBottom: 0,
  },
  searchIcon: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyWrap: {
    backgroundColor: '#f5f5f5',
    padding: 5,
    flex: 1,
  },
  listViewContainer: {
    flex: 1,
  },
  countryList: {
    flex: 1,
  },
  footerWrap: {
    padding: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  dialogBtn: {
    container: {
      marginLeft: 8,
      paddingHorizontal: 8,
      borderWidth: 0,
    },
  },
};