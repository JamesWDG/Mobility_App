import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';

export const styles = StyleSheet.create({
  container: (mT, mB) => ({
    marginTop: mT,
    marginBottom: mB,
    // flexGrow: 1,
  }),
  uploadimageContainer: (height, image) => ({
    height: height,
    borderWidth: image ? 0 : 1,
    borderStyle: 'dashed',
    overflow: 'hidden',
    borderColor: colors.c_EBEBEB,
    borderRadius: 12,
  }),
  uploadBoxStyling: {
    borderRadius: 12,
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossIconStyle: {
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    right: 5,
    zIndex: 1000,
    top: 5,
  },
  imageScroller: {
    flexGrow: 1,
    // height: 150,
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
});
