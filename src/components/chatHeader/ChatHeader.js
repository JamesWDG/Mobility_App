import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import Avatar from '../avatar/Avatar';
import {styles} from './ChatHeader.styles';
import {images} from '../../config/Images';
import Title from '../title/Title';
import colors from '../../config/Colors';
const ChatHeader = ({navigation}) => {
  return (
    <Container
      extraStyle={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 15,
        paddingVertical: 8,
      }}>
      <Pressable onPress={() => navigation.goBack()}>
        <FontAwesomeIcon name="arrow-left-long" size={23} />
      </Pressable>
      <Container
        extraStyle={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
        <Avatar
          source={images.userPH}
          height={50}
          width={50}
          style={styles.avatar}
          borderRadius={100}
        />
        <Container>
          <Title text="John Doe" fontSize={18} fontWeight={600} />
          <Title text="User" color={colors.gray} />
        </Container>
      </Container>
    </Container>
  );
};

export default ChatHeader;
