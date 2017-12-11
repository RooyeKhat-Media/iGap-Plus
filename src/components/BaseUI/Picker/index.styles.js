import Device from '../../../modules/Responsive/Device';
import {min, max} from 'lodash';

const {width} = Device.dimensions.window;
const boxWidth = min([360, max([width, 280])]);

export default {
  wrapper: {
    height: 45,
  },
  touchable: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 4,
  },
  touchableView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectBox: {flex: 1},
  selectText: {
    color: '#888',
  },
  selectIcon: {
    width: 20,
  },
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
  headerTitle: {
    padding: 10,
    fontWeight: 'bold',
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
};