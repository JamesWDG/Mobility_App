import {View, Text} from 'react-native';
import React from 'react';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Title from '../title/Title';
import Entype from 'react-native-vector-icons/Entypo';
import colors from '../../config/Colors';
import Container from '../container/Container';
const DateInput = ({
  borderRadius = 40,
  backgroundColor,
  onPress = () => {},
  calender = false,
  value = '',
  marginLeft = 20,
  title = '',
  marginVertical = 10,
}) => {
  return (
    <Container>
      {title ? <Title text={title} otherStyles={{marginBottom: 8}} /> : null}
      <TouchableContainer
        onPress={onPress}
        extraStyle={{
          backgroundColor: colors.c_F5F5F5,
          height: 52,
          marginVertical: marginVertical,
          borderRadius: borderRadius,
          paddingLeft: marginLeft,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: 15,
        }}>
        <Title text={value || '---- --'} />
        <Entype name={calender ? 'calendar' : 'clock'} size={16} />
      </TouchableContainer>
    </Container>
  );
};

export default DateInput;
