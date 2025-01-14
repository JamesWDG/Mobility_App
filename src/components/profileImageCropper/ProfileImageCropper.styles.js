import { Platform, StyleSheet } from "react-native";
import colors from "../../config/Colors";


export const styles = StyleSheet.create({
    avatarContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        // top: Platform.OS == 'ios' ? 100 : 70,
        zIndex: 1000,
      
      },
      avatar: {
        borderWidth: 0.5,
        borderColor: colors.white,
        backgroundColor: colors.c_5669FF1F,
      },
      editIcon: {
        position : "absolute",
        right: -10,
        bottom: 0,
      },
      cameraIconStyles:{backgroundColor : colors.white , padding : 10, borderRadius : 100,borderWidth : 1 , borderColor : '#ecf0f1'}
})