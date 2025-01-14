import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Icon from 'react-native-vector-icons/AntDesign';
import Title from '../title/Title';
import TouchableContainer from '../touchableContainer/TouchableContainer';
const PreviewEditComp = ({title, setSteps}) => {
  return (
    <Container
      extraStyle={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
      }}>
      <Title text={title} fontSize={18} />
      <TouchableContainer onPress={setSteps}>
        <Icon name="edit" size={18} />
      </TouchableContainer>
    </Container>
  );
};

export default PreviewEditComp;
