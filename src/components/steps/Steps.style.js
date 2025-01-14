import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  stepsMainContainer: index => ({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    marginRight: index === 8 ? 30 : 0,
  }),
  lineWrapper: index => ({
    width: index === 0 ? 40 : 110,
    justifyContent: 'center',
    zIndex: -1,
  }),
  lineStyling: (item, index) => ({
    width: '100%',
    borderBottomWidth: 1.3,
    borderColor:
      index === 0
        ? colors.transparent
        : item?.selected
        ? colors.c_7939FE
        : colors.gray,
  }),
  stepWrapper: index => ({
    // width: index === 0 ? 30 : 30,
    alignItems: 'center',
    zIndex: 100000000000,
  }),
  stepCircle: item => ({
    height: 33,
    width: 33,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: item.selected ? colors.c_7939FE : colors.c_7939FE,
    overflow: 'hidden',
    zIndex: 100000000000,
  }),
  stepTitleBox: index => ({
    left: index === 0 ? 26 : index === 2 ? 88 : index === 3 ? 100 : 90,
    top: 40,
    position: 'absolute',
    alignItems:
      index === 0 ? 'flex-start' : index === 1 ? 'center' : 'flex-end',
  }),
  selectedStep: {
    height: 11,
    width: 11,
    borderRadius: 11,
    backgroundColor: colors.c_7939FE,
  },

  label: index => ({
    textAlign: index === 0 ? 'left' : 'right',
    width: '100%',
    color: 'black',
  }),
});

export default styles;
