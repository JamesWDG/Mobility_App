import React, {memo} from 'react';
import {TextInput} from 'react-native';
import colors from '../../config/Colors';
import {styles} from './Input.styles';
import {LocalImage} from '../localImage/LocalImage';
import Container from '../container/Container';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Title from '../title/Title';

const Input = props => {
  const {
    VectorIcon,
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    multilineHeight = 80,
    keyboardType,
    multilineInput = false,
    icon = '',
    color = '',
    otherStyles = '',
    secureEntry = false,
    rightIconPress = () => {},
    maxLength,
    rightIcon,
    borderRadius = 100,
    paddingHorizontal = 15,
    editable = true,
    marginLeft = 10,
    coloredIcon = false,
    colorStyle = {},
    iconStyles = {},
    circleStyle = {},
    RightVectorIcon = () => {},
    title = '',
    marginVertical = 10,
  } = props;

  return (
    <Container>
      {title ? <Title text={title} otherStyles={{marginBottom: 8}} /> : null}
      <Container
        extraStyle={[
          styles.mainInputContainer(
            multilineInput,
            multilineHeight,
            borderRadius,
            paddingHorizontal,
            marginVertical,
          ),
          otherStyles,
        ]}>
        {VectorIcon ? (
          <VectorIcon />
        ) : coloredIcon ? (
          <Container extraStyle={circleStyle}>
            <LocalImage
              source={icon}
              otherStyle={iconStyles}
              resizeMode="cover"
            />
          </Container>
        ) : (
          <LocalImage source={icon} />
        )}
        <TextInput
          placeholder={placeholder}
          editable={editable}
          placeholderTextColor={placeholderTextColor || colors.c_747688}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureEntry}
          multiline={multilineInput ? true : false}
          textAlignVertical={multilineInput ? 'top' : 'center'}
          style={[
            styles.inputStyles(
              multilineInput,
              multilineHeight,
              marginLeft,
              editable,
            ),
            {flex: 1},
          ]}
          color={color || colors.black}
          maxLength={maxLength}
        />

        {RightVectorIcon ? (
          <TouchableContainer
            extraStyle={styles.rightSide}
            onPress={rightIconPress}>
            <RightVectorIcon />
          </TouchableContainer>
        ) : (
          <TouchableContainer
            extraStyle={styles.rightSide}
            onPress={rightIconPress}>
            <LocalImage source={rightIcon} />
          </TouchableContainer>
        )}
      </Container>
    </Container>
  );
};

export default memo(Input);
