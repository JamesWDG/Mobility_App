import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import {height} from '../../utils/Utility';

const styles = StyleSheet.create({
  container: radius => ({
    flex: 1,
    backgroundColor: colors.white,
    overflow: 'hidden',
    zIndex: 999,
    // minHeight: height,
    // borderRadius: 24,
    borderTopLeftRadius: radius ? 24 : 0, // added
    borderTopRightRadius: radius ? 24 : 0, // added
    // added
  }),
  imageBg: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
export default styles;