import {StyleSheet} from 'react-native';
import colors from '../../../config/Colors';

export const styles = StyleSheet.create({
  imageContainer: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: colors.c_5669FF1F,
  },
  imageIconStyles: (height , width)=>({width: width, objectFit: 'contain', height: height}),
  contentMargin: {
    marginVertical: 10,
  },
  textCenter: {textAlign: 'center'},
});
