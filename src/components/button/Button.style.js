import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';

const styles = StyleSheet.create({
  buttonContainer: (
    mTop,
    mBottom,
    borderButton,
    backgroundColor,
    width,
    height,
    borderRadius,
  ) => ({
    height: height,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius,
    borderWidth: borderButton ? 1 : 0,
    borderColor: borderButton ? colors.primary : colors.c_5669FF,
    marginTop: mTop,
    marginBottom: mBottom,
    backgroundColor: borderButton ? colors.white : backgroundColor,
    shadowColor: 'rgba(121, 57, 254, 0.8)',  // Shadow color
    shadowOffset: { width: 0, height: 4 },    // Horizontal and Vertical offset
    shadowOpacity: 0.8,                      // Opacity of the shadow
    shadowRadius: 14.1,                      // Blur radius
    elevation: 5, 
  }),
});

export default styles;
