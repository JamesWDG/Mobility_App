import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  style: {
    height: 56,
    justifyContent: 'center',
    paddingLeft: 5,
    // borderWidth: 1,
    // marginVertical: 10,
    // borderColor: colors.c_E4DFDF,
  },
  textStyle: {
    paddingHorizontal: 2,

    fontSize: 14,
    paddingLeft: 15,
    letterSpacing: 0.5,
    fontFamily: fonts.gabaritoRegular,
    color: colors.dark,
  },
  dropdownTextHighlightStyle: {color: colors.primary},
  dropdownStyle: {
    marginLeft: -10,
    // paddingVertical: 5,
    // marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
  },
  dropdownTextStyle: {
    color: colors.dark,
    fontSize: 14,
    textAlign: 'left',
    fontFamily: fonts.gabaritoRegular,
  },
  icon: {position: 'absolute', right: 20},
});

export default styles;
