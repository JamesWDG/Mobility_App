import React, {memo} from 'react';
import styles from './Button.style';
import {LocalImage} from '../localImage/LocalImage';
import {images} from '../../config/Images';
import GeneralStyles from '../../config/GeneralStyle';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Title from '../title/Title';
import colors from '../../config/Colors';
import {ActivityIndicator} from 'react-native';

const Button = ({
  onPress = () => {},
  text,
  otherStyles = {},
  backgroundColor = colors.c_7939FE,
  color = colors.white,
  mTop = 0,
  mBottom = 0,
  iconButton = false,
  icon = images.download,
  borderButton = false,
  width = '100%',
  height = 50,
  fontSize = 16,
  borderRadius = 100,
  iconSpacing = 10,
  loader = false,
  spinnerColor = colors.white,
  fWeight=500
}) => {
  const _loader = () => {
    return <ActivityIndicator color={spinnerColor} size={'small'} />;
  };
  return (
    <TouchableContainer
      onPress={onPress}
      extraStyle={[
        styles.buttonContainer(
          mTop,
          mBottom,
          borderButton,
          backgroundColor,
          width,
          height,
          borderRadius,
        ),
        otherStyles,
      ]}>
      {loader ? (
        _loader()
      ) : (
        <>
          {iconButton && (
            <LocalImage
              source={icon}
              tintColor={borderButton ? colors.primary : color}
              otherStyle={GeneralStyles.marginRight(iconSpacing)}
            />
          )}

          <Title
            text={text}
            color={borderButton ? colors.primary : color}
            fontSize={fontSize}
            fontWeight={fWeight}
          />
        </>
      )}
    </TouchableContainer>
  );
};

export default memo(Button);
