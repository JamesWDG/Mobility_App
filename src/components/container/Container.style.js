import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  flex: {flex: 1},
  flexEnd: {flex: 1, justifyContent: 'flex-end', marginBottom: 20},
  spaceBetween: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  paddingHorizontal: {paddingHorizontal: 16},
  row: {flexDirection: 'row'},
  centerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
