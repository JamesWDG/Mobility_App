import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

export const styles = StyleSheet.create({
  checkBoxStyle: {
    width: 22, // Width of the square
    height: 22, // Height of the square
    outline: 'none',
    // tintColor: '#000000',
  },
  containerStyle: {
    marginTop: 10,
  },
  labelStyle: {
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.gabaritoRegular,
  },
  container: marginTop => ({
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: marginTop,
  }),
  radioGroup: (padding = 16, width = Dimensions.get('screen').width * 0.9) => ({
    flexDirection: 'column',
    gap: 18,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: width,
    borderRadius: 8,
    padding: padding,
    // elevation: 4,
  }),
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: PixelRatio.roundToNearestPixel(16),
    fontWeight: 600,
    color: '#333',
    marginBottom: 3,
  },
  radioDescription: {
    fontSize: PixelRatio.roundToNearestPixel(14),
    fontWeight: 300,
    color: '#333',
  },
});
