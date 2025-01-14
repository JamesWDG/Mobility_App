import {View, Text, Pressable, StatusBar} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Container from '../container/Container';
import Title from '../title/Title';
import {LocalImage} from '../localImage/LocalImage';
import {images} from '../../config/Images';
import Avatar from '../avatar/Avatar';
import colors from '../../config/Colors';
import {styles} from './PrimaryHeader.styles';
const PrimaryHeader = ({
  antdesign = false,
  navigation,
  title = '',
  rightImage = false,
  route,
  image = {},
  goBack = false,
}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Container extraStyle={styles.header}>
        {goBack ? (
          antdesign ? (
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesomeIcon name="arrow-left-long" size={23} />
            </Pressable>
          ) : (
            <Pressable onPress={() => navigation.openDrawer()}>
              <AntDesignIcon name="menu-fold" size={23} />
            </Pressable>
          )
        ) : null}
        {title ? <Title text={title} fontSize={18} fontWeight={700} /> : null}

        {rightImage ? (
          <Avatar
            source={image ? {uri: image?.uri} : images.userPH}
            height={42}
            width={42}
            borderRadius={125}
            style={styles?.imageBorder}
          />
        ) : (
          <Container></Container>
        )}
      </Container>
    </>
  );
};

export default PrimaryHeader;
