import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  bulletPointsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    wordBreak: 'break-word',
    wordWrap: 'break-word',
  },
  bulletPoint: {
    height: 8,
    width: 8,
    borderRadius: 100,
    backgroundColor: colors.c_7939FE,
    marginTop: 5,
  },
  separator: {marginVertical: 5},
  contentContainerStyle: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingBottom: 100,
    marginBottom: 60,
    flexGrow: 1,
  },
});
