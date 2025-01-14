import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';
import {arabic} from '../../utils/Utility';

export const styles = StyleSheet.create({
  mainInputContainer: (
    multilineInput,
    multiLineHeight,
    borderRadius,
    paddingHorizontal,
    marginVertical = 10,
  ) => ({
    height: multilineInput ? multiLineHeight : 54,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 0,
    backgroundColor: colors?.c_F5F5F5,
    alignItems: 'center',
    borderColor: colors.c_E4DFDF,
    borderRadius: borderRadius,
    paddingHorizontal: paddingHorizontal,
    marginVertical: marginVertical,
    overflow: 'hidden',
  }),
  inputStyles: (multilineInput, multiLineHeight, marginLeft, editable) => ({
    height: multilineInput ? multiLineHeight : 'auto',
    marginLeft: marginLeft,
    color: editable ? colors.black : colors.c_818181,
    fontFamily: fonts.gabaritoRegular,
    paddingVertical: multilineInput ? 15 : 0,
    textAlign: arabic ? 'right' : 'left',
  }),
  leftIconStyles: (height, width) => ({
    height: height,
    width: width,
  }),
  rightSide: {
    height: 40,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.c_E4DFDF,
    minHeight: 50,
    paddingHorizontal: 10,
  },
  inputContainerStyle2: {
    borderWidth: 0,
    borderRadius: 10,
    borderColor: colors.c_E4DFDF,
  },
  containerStyle: {
    paddingHorizontal: 0,
    height: 50,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'teal',
  },
  inputStyle: {
    fontFamily: fonts.gabaritoRegular,
    color: colors.black,
    fontSize: 14,
    // backgroundColor: 'pink',
    left: -5,
    paddingLeft: 0,
  },
  errorStyle: {height: 0, margin: 0},
  labelStyle: {
    fontFamily: fonts.gabaritoRegular,
    color: colors.dark,
    fontSize: 14,
    marginBottom: 8,
    // paddingLeft: 0,
  },
  arrowStyle: {
    // marginTop: 8,
  },
});
