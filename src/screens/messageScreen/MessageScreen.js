import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../config/Colors';
import {LocalImage} from '../../components/localImage/LocalImage';
import Container from '../../components/container/Container';
import {images} from '../../config/Images';
import Avatar from '../../components/avatar/Avatar';
import Title from '../../components/title/Title';
import {styles} from './MessageScreen.styles';
import GeneralStyles from '../../config/GeneralStyle';
import ChatHeader from '../../components/chatHeader/ChatHeader';
import ScreenBg from '../../components/screenBg/ScreenBg';

const MessageScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello!', sender: 'user'},
    {id: '2', text: 'Hi there! How are you?', sender: 'friend'},
  ]);
  const [messageText, setMessageText] = useState('');

  const sendMessage = () => {
    if (messageText.trim()) {
      const newMessage = {
        id: String(messages.length + 1),
        text: messageText,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setMessageText('');
    }
  };

  const renderMessage = ({item}) => {
    return (
      <>
        {item.sender === 'user' ? (
          <Container extraStyle={styles.sender}>
            <Avatar
              source={
                item?.image
                  ? {uri: 'https://via.placeholder.com/150'}
                  : images.userPH
              }
              height={40}
              width={40}
              style={styles.avatar}
              borderRadius={100}
            />

            <Container>
              <View style={[styles.messageContainer, styles.userMessage]}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
              <Container extraStyle={styles.senderTime}>
                <Title
                  text={'08:37PM'}
                  fontSize={12}
                  color={colors.c_666666}
                  otherStyles={GeneralStyles.marginRight(8)}
                />
              </Container>
            </Container>
          </Container>
        ) : (
          <Container extraStyle={styles.receiver}>
            <Avatar
              source={
                item?.image
                  ? {uri: 'https://via.placeholder.com/150'}
                  : images.userPH
              }
              height={40}
              width={40}
              style={styles.avatar}
              borderRadius={100}
            />

            <Container>
              <View style={[styles.messageContainer, styles.friendMessage]}>
                <Text style={[styles.messageText, {color: colors.c_13053D}]}>
                  {item.text}
                </Text>
              </View>
              <Container extraStyle={styles.receiverTime}>
                <Title
                  text={'08:37PM'}
                  fontSize={12}
                  color={colors.c_666666}
                  otherStyles={GeneralStyles.marginLeft(8)}
                />
              </Container>
            </Container>
          </Container>
        )}
      </>
    );
  };

  return (
    <ScreenBg>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView style={{flex: 1}}>
        <ChatHeader navigation={navigation}/>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          inverted // To show the latest message at the bottom
          contentContainerStyle={styles.messageList}
        />

        <View style={styles.inputContainer(0)}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={messageText}
            onChangeText={setMessageText}
            returnKeyType="send"
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
    </ScreenBg>
  );
};

export default MessageScreen;
