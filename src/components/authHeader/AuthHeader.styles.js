import {StyleSheet} from 'react-native';

import colors from '../../config/Colors';

export const styles = StyleSheet.create({
  imageBorder: {borderWidth: 2, borderColor: colors.c_7939FE},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  imageContainer: {height: 156, width: 134},
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
