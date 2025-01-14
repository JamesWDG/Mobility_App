import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabContainer: {
    padding: 10,
    backgroundColor: colors.lightGrey,
    borderRadius: 33,
    marginRight: 9,
    // marginTop: 38, //18,
  },
  activeTabContainer: {
    padding: 10,
    backgroundColor: colors.red,
    borderRadius: 33,
    marginRight: 9,
    // marginTop: 38, //18,
  },
});
