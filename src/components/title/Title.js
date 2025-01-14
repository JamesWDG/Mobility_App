import React, {memo} from 'react';
import {Text} from 'react-native';
import {styles} from './Title.styles';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const Title = ({
  text = '',
  fontSize = 14,
  fontWeight = 400,
  color = colors.black,
  fontFamily = fonts.poppinsRegular,
  otherStyles,
  onPress,
  numberOfLines,
  lSpacing = 0.3,
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={styles.textStyle(
        fontSize,
        color,
        fontFamily,
        otherStyles,
        lSpacing,
        fontWeight
      )}>
      {text}
    </Text>
  );
};

export default memo(Title);
