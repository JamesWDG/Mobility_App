import {Dimensions, StyleSheet} from 'react-native';
import fonts from '../../config/Fonts';
import colors from '../../config/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
   


  title: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: fonts.AXIFORMAREGULAR,
    fontWeight: '600',
    textAlign: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 25,
    fontFamily: fonts?.AXIFORMAREGULAR,
    fontWeight: '400',
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 80,
  },
  paginationStyle: {
    width: 12,
    height: 12,
    margin: 5,
    borderRadius: 100,
    backgroundColor : colors?.c_7939FE ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerPagination: active => ({
    width: 12,
    borderRadius: 100,
    height: 12,
    backgroundColor: active ? 'transparent' : colors.c_DCDAE3,
  }),
  paginationContainer: {
    flexDirection: 'row',
    gap : 12,
    marginVertical : 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonExtraStyle: {
    width: Dimensions.get('screen').width * 1,
    paddingVertical: 16,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25,
    fontFamily: fonts.AXIFORMAREGULAR,
    fontWeight: '500',
    color: colors.white,
  },
  skipButtonText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25,
    fontFamily: fonts.AXIFORMAREGULAR,
    fontWeight: '500',
    color: colors.Black,
  },
  buttonGradiant: {
    borderRadius: 8,
    backgroundColor : colors?.c_7939FE
  },
});
