import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  wrapper: {
    // height: 300,
    width: '100%',
    borderRadius: 20,
    // backgroundColor: 'teal',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    // borderRadius: 40,
  },
  dotStyle: {
    backgroundColor: colors.white,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 25,
    marginBottom: 10,
  },
  activeDotStyle: {
    backgroundColor: colors.c_7939FE,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 25,
    marginBottom: 10,
  },
});

export default styles;
