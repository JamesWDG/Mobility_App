import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import {IOS} from '../../utils/Utility';

export const styles = StyleSheet.create({
  container: bottom => ({
    width: '100%',

    minHeight: Number(bottom) === 0 ? 60 : Number(bottom) + 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: IOS ? 20 : 10,

    paddingTop: 10,

    backgroundColor: colors.white,
   
    zIndex: 500,
    borderTopLeftRadius: 20,  // Radius for top-left corner
    borderTopRightRadius: 20,
   
  }),
  elementContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,  // Radius for top-left corner
    borderTopRightRadius: 20,
  },
  elementView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 6,
    borderTopLeftRadius: 20,  // Radius for top-left corner
    borderTopRightRadius: 20,
    // paddingVertical: 0,
  },
  elementItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconStyle: center => ({
    width: center ? 20 : 25,
    height: center ? 20 : 25,
    objectFit: 'contain',
  }),
  bottomText: {
    // textAlign: 'center',
    // backgroundColor: 'red',
  },
  plusIconStyles: center => ({
    marginTop: center ? (IOS ? -30 : -80) : 0,
    padding: center ? 18 : 0,
    borderRadius: center ? 100 : 0,
    backgroundColor: center ? "#331679" : 'transparent',
    shadowColor: center ? '#4A43EC' : 'transparent', // Shadow color
    shadowOffset: center ? {width: 0, height: 10} : {width: 0, height: 0}, // Offset
    shadowOpacity: center ? 0.25 : 0, // Opacity
    shadowRadius: center ? 20 : 0,
    elevation: 10,
    borderWidth: center ? 5 : 0,
    borderColor: colors.c_E8E8E8,
  }),
  check: center => ({
    // marginTop: center ? (IOS ? -30 : -80) : 0,
    // padding: center ? 18 : 0,
    // borderRadius: center ? 100 : 0,
    // backgroundColor: center ? colors.c_36197F : 'transparent',
    // shadowColor: center ? '#4A43EC' : 'transparent', // Shadow color
    // shadowOffset: center ? {width: 0, height: 10} : {width: 0, height: 0}, // Offset
    // shadowOpacity: center ? 0.25 : 0, // Opacity
    // shadowRadius: center ? 20 : 0,
    // elevation: 10,
    // borderWidth: center ? 5 : 0,
    // borderColor: colors.c_E8E8E8,
    // borderWidth : 2,
    borderColor : "#7939FE",
    // padding : center ? 
  }),
});
