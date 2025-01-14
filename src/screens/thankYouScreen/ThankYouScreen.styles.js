import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
   container : { flex : 1 , marginBottom : 40},
   thankYouContainer: {flex : 1,justifyContent : "center" , alignItems : "center" , gap : 15},
   btnContainer : (insets)=>({marginBottom : insets.bottom+10 , paddingHorizontal  : 20})
});
