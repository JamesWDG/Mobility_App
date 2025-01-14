import React, {memo, useCallback, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../config/Colors';
import Title from '../title/Title';
import {styles} from './BotttomTab.style';
import Container from '../container/Container';
import {LocalImage} from '../localImage/LocalImage';
import Icon from 'react-native-vector-icons/AntDesign';
const TabUI = ({
  item,
  isFocused,
  index,
  handleNavigation = () => {},
  selected,
}) => {
  return (
    <TouchableOpacity
      style={[styles.elementView]}
      onPress={() => {
        handleNavigation(item);
      }}>
      <Container extraStyle={styles.plusIconStyles(item.hide)}>
        {/* <Container extraStyle={styles.check(item.hide)}> */}
        {/* <LocalImage
          source={item?.icon}
          otherStyle={styles.tabIconStyle(item.hide)}
          resizeMode="contain"
          tintColor={
            item.hide
              ? colors.white
              : isFocused
              ? colors.c_5669FF
              : colors.c_00000053
          }
        /> */}
        <Icon
          name={item?.icon}
          size={24}
          // color={item.hide ? 'white' : 'black'}
          color={
            item.hide
              ? colors.white
              : isFocused
              ? colors.c_7939FE
              : colors.black
          }
        />
        {/* </Container> */}
      </Container>
    </TouchableOpacity>
  );
};

export default memo(TabUI);
