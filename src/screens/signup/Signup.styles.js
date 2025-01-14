import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    mainContainerStyles :(top)=>({flex: 1, alignItems: 'center' , marginVertical : 10 }),
    innerContainer : {width : width * 0.8,alignItems: 'center' , marginTop : 25},
    imageContainer : {height : 129, width:111},
    circleStyles : { width : 46,paddingHorizontal : 5,height : 46, justifyContent : "center" , alignItems : "center" , backgroundColor : colors.c_EBEBEB},
    iconStyles : {height : 26, width : 26,borderRadius : 100 },
    profileIconStyles:{marginTop : 35, marginBottom : 20},
    notAUserText : {flexDirection : "row" , alignItems : "center" , marginTop : 20}
});
