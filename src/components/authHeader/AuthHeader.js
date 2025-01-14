import {View, Text, Pressable, StatusBar} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Icon from 'react-native-vector-icons/AntDesign';
import Avatar from '../avatar/Avatar';
import {images} from '../../config/Images';
import {styles} from './AuthHeader.styles';
import {LocalImage} from '../localImage/LocalImage';
const AuthHeader = ({navigation, image}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Container extraStyle={styles.container}>
        <Pressable
        // onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu-fold" size={23} />
        </Pressable>
        <LocalImage
          source={images.splashLogo}
          otherStyle={styles.imageContainer}
          resizeMode="contain"
        />
        <Avatar
          source={image ? {uri: image?.uri} : images.userPH}
          height={42}
          width={42}
          borderRadius={125}
          style={styles?.imageBorder}
        />
      </Container>
    </>
  );
};

export default AuthHeader;
