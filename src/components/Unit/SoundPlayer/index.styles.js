import {StyleSheet} from 'react-native';
import {gray700, primary} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

export default StyleSheet.create({
  fileWrap: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  thumbnail: {
    width: 80,
    height: 70,
  },
  fileInfoWrap: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fileName: {
    ...IRANSans_Medium,
    fontSize: 14,
    color: primary,
  },
  fileSize: {
    fontSize: 12,
    color: gray700,
  },
  progressStyle: {
    marginTop: 10,
  },
  controlBox: {
    flexDirection: 'row',
  },
  headerWrap: {
    height: 30,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  headerSoundName: {
    flexDirection: 'row',
  },
});