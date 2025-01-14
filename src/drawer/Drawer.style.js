import {StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import {IOS} from '../../utils/Utility';

const styles = StyleSheet.create({
  imageBg: {
    height: '100%',
    width: '100%',
  },
  crossContainer: {
    marginTop: IOS ? 60 : 20,
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 25,
  },
  userContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.c_EBEBEB,
  },
  avatarContainer: {
    height: 57,
    width: 57,
    borderRadius: 57,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userMid: {
    width: '80%',
    justifyContent: 'center',
    paddingLeft: 10,
    alignItems: 'flex-start',
  },
  drawerItem: {
    height: 30,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
  },

  logoutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 55,
    paddingHorizontal: 25,
  },
  logoutRow: {
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
  },
});

export default styles;
