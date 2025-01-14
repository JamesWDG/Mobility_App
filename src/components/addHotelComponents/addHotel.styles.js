import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  commonCardContainerStyles: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    // paddingHorizontal: 15,s
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bannerContainer: {
    flexDirection: 'row',
  },
  coverContainer: {
    // flex: 0.33,
    height: 200,
  },
  placeSelectionContainer: {flex: 1, alignItems: 'center', gap: 20},
  selectTimeContainer: {flexDirection: 'row', alignItems: 'center', gap: 8},
  checkContainer: {
    borderBottomWidth: 0.5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  whatWillGuestHaveStyles: {textAlign: 'center', marginTop: 30},
  countContainer: {
    minWidth: 50,
    alignItems: 'center',
    textAlign: 'center',
  },
  increamentDecreamentConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  pluscontainer: {
    borderColor: colors.c_7939FE,
    borderWidth: 0.5,
    // backgroundColor: colors.c_7939FE,
    width: 40,
    // height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 12,
    borderRadius: 100,
  },
  guestRowContainer: {flex: 0.95, gap: 6},
  guestRow: (title, GuestHave) => ({
    flexDirection: 'row',
    borderWidth: title == GuestHave ? 0 : 0.2,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    paddingVertical: 15,

    backgroundColor: title == GuestHave ? colors.c_7939FE : colors.white,
  }),
  basicInfoDescriptionStyle: {height: 120, borderRadius: 18},
  commonCardStyles: selected => ({
    // padding: 20,
    width: '31%',
    alignItems: 'center',
    gap: 8,
    borderRadius: 4,
    borderWidth: 0.2,
    paddingHorizontal: 5,
    paddingVertical: 15,
    backgroundColor: selected ? colors.c_7939FE : colors.white,
    //   color: selected == ele ? colors.white : colors.black,
    // iOS Shadow Properties
    shadowColor: '#0000001A', // Shadow color with transparency (RGBA)
    shadowOffset: {width: 0, height: 4}, // Horizontal and vertical offset
    shadowOpacity: 0.1, // Opacity of the shadow
    shadowRadius: 30, // Blur radius

    // Android Shadow Properties (via elevation)
    elevation: 10, // Shadow on Android (elevation typically controls depth)
  }),
});

export default styles;
