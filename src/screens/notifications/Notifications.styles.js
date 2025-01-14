import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    bulletPointsContainer : { flexDirection :"row", alignItems : "flex-start" , gap : 8 , wordBreak: 'break-word' , wordWrap : "break-word"},
    bulletPoint : {height : 8 , width : 8 , borderRadius : 100 , backgroundColor : colors.c_7939FE , marginTop : 5},
    separator : {marginVertical : 5},
    contentContainerStyle:{marginTop : 20 , marginHorizontal : 20 , marginBottom : 60},
    listItem : {
        shadowColor: '#033391',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,  // Corresponding to the alpha value (0.1 for #0333911A)
        shadowRadius: 10,
        elevation: 5, 
        backgroundColor : "white",
        borderRadius : 8,
        padding : 20
    },
    listItemUpperContainer: {flexDirection : "row" , gap : 15, alignItems : "flex-start"}
});
