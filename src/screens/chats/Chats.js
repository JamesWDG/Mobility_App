import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import ScreenBg from '../../components/screenBg/ScreenBg';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import labels from '../../assets/labels/English.labels';
import {FlatList} from 'react-native';
import TouchableContainer from '../../components/touchableContainer/TouchableContainer';
import Avatar from '../../components/avatar/Avatar';
import Container from '../../components/container/Container';
import Title from '../../components/title/Title';
import {images} from '../../config/Images';
import colors from '../../config/Colors';
import { styles } from './Chats.styles';

const list = [
  {
    name: 'Zain',
    image: 'https://via.placeholder.com/150?text=Zain',
    lastMessage: 'This is Message',
    unread_messages: 4,
    messageTime: '08:23PM',
  },
  {
    name: 'Ali',
    image: 'https://via.placeholder.com/150?text=Ali',
    lastMessage: 'Hey, how are you?',
    unread_messages: 2,
    messageTime: '07:45PM',
  },
  {
    name: 'Sara',
    image: 'https://via.placeholder.com/150?text=Sara',
    lastMessage: "Let's catch up soon!",
    unread_messages: 1,
    messageTime: '06:15PM',
  },
  {
    name: 'John',
    image: 'https://via.placeholder.com/150?text=John',
    lastMessage: 'Good morning!',
    unread_messages: 0,
    messageTime: '09:10AM',
  },
];

const Chats = ({navigation}) => {
  return (
    <ScreenBg>
      <SafeAreaView style={{flex: 1}}>
        {/* <PrimaryHeader
          goBack={true}
          antdesign={true}
          navigation={navigation}
          title={labels.chats}
        /> */}
        <PrimaryHeader
          goBack={true}
          title={labels.chats}
          rightImage={true}
        />

        <Container >
          <FlatList
            data={list}
            contentContainerStyle={{flexGrow: 1, paddingHorizontal: 15}}
            renderItem={({item}) => {
              return (
                <TouchableContainer
                  extraStyle={styles.chatItem}
                  onPress={()=> navigation.navigate("AppStack"  ,{screen : "Messages"})}
                  >
                  <Container extraStyle={styles.avatarContainer}>
                    <Avatar
                      source={item?.image ? {uri: item?.image} : images.userPH}
                      height={50}
                      width={50}
                      style={styles.avatar}
                      borderRadius={100}
                    />
                    <Container extraStyle={styles.nameContainer}>
                      <Title text={item?.name} fontSize={18}
                      fontWeight={600}
                      />
                      <Title text={item?.lastMessage} color={colors.c_666666}/>
                    </Container>
                  </Container>
                  <Title text={item?.messageTime} />
                </TouchableContainer>
              );
            }}
          />
        </Container>
      </SafeAreaView>
    </ScreenBg>
  );
};

export default Chats;
