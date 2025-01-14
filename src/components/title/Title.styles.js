import {PixelRatio, StyleSheet} from 'react-native';
import {arabic} from '../../utils/Utility';

export const styles = StyleSheet.create({
  textStyle: (fZize, color, fFamily, OtherStyles, lSpacing , fontWeight) => ({
    textAlign: arabic ? 'right' : 'left',
    fontSize: PixelRatio.roundToNearestPixel(fZize),
    color: color,
    fontFamily: fFamily,
    fontWeight : fontWeight,
    letterSpacing: lSpacing,
    ...OtherStyles,
    // backgroundColor: 'red',
  }),
});
