import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
   chatItem : {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems : "center",
    marginVertical: 10,
    borderRadius: 8,
    padding: 15,
    // iOS shadow properties
    shadowColor: '#000', // Shadow color (use a grayish color for gray shadow)
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    // Android shadow (elevation)
    elevation: 8,
    
  },
  avatarContainer:{flexDirection: 'row', gap: 12 , alignItems : "flex-start" },
  avatar : {borderWidth: 2, borderColor : colors.c_36197F},
  nameContainer:{gap : 3, paddingTop : 2 },
  
});
