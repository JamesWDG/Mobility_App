import { StyleSheet } from "react-native";
import colors from "../../config/Colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#f5f5f5',
    },
    receiver : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
      },
    sender:{
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
      },
      receiverTime : {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      avatar : {borderWidth : 2, borderColor : colors.c_7939FE},
      senderTime : {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      },
    messageList: {
      paddingBottom: 10,
      paddingTop: 10,
    },
    messageContainer: {
      maxWidth: '80%',
      marginBottom: 5,
      padding: 10,
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    userMessage: {
      backgroundColor: colors.c_7939FE,
      borderBottomEndRadius: 0,
      alignSelf: 'flex-end',
    },
    friendMessage: {
      backgroundColor: '#e5e5e5',
      alignSelf: 'flex-start',
      borderBottomStartRadius : 0
    },
    messageText: {
      color: '#fff',
      fontSize: 16,
    },
    inputContainer: bottom => ({
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    //   borderTopWidth: 1,
      borderTopColor: '#ddd',
      backgroundColor: '#fff',
      paddingBottom: 15,
    }),
    input: {
      flex: 1,
      padding: 15,
      borderRadius: 20,
      backgroundColor: '#f1f1f1',
      marginRight: 10,
    },
    sendButton: {
      backgroundColor: colors.c_13053D,
      borderRadius: 20,
      // paddingVertical: 15,
      paddingHorizontal: 20,
  
      padding: 13,
      borderBottomEndRadius: 0,
    },
    sendButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });