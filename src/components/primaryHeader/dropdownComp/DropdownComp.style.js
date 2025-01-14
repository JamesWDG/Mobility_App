import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  dropdown: (height, width, marginTop, paddingLeft, borderWidth, paddingH) => ({
    height: height,
    width: width,
    marginTop: marginTop,
    paddingLeft: paddingLeft,
    borderWidth: borderWidth,
    paddingHorizontal: paddingH,
    borderRadius: 100,
    borderColor: colors.liteBorder,
    marginVertical: 7,
  }),
  placeholderStyle: width => ({
    fontSize: 16,
    fontFamily: fonts.proximaNovaRegular,
    color: colors.darkGray,
    width: width,
  }),
  selectedTextStyle: width => ({
    fontSize: 16,
    fontFamily: fonts.proximaNovaRegular,
    color: colors.black,
    width: width,
  }),
  iconStyle: {
    width: 20,
    height: 20,
  },
  itemTextStyle: {
    fontSize: 12,
    fontFamily: fonts.proximaNovaSemiBold,
    marginVertical: -10,
    color: colors.dark,
  },
  leftIcon: {
    marginLeft: -5,
    marginRight: 5,
  },
  // itemContainer: borderWidth => ({
  //   height: 30,
  //   width: '90%',
  //   flexDirection: 'row',
  //   paddingHorizontal: 10,
  //   borderBottomWidth: borderWidth,
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   borderColor: colors.liteBorder,
  // }),
  // itemText: {
  //   fontSize: 12,
  //   fontFamily: fonts.proximaNovaRegular,
  // },
});

export default styles;
