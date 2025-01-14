import React, {Fragment} from 'react';
import {Image} from 'react-native';
import TouchableContainer from '../touchableContainer/TouchableContainer';

export const LocalImage = ({
  source,
  resizeMode = 'contain',
  otherStyle,
  tintColor,
  touchableIcon,
  onPress = () => {},
}) => {
  return (
    <Fragment>
      {touchableIcon ? (
        <TouchableContainer onPress={onPress}>
          <Image
            source={source}
            resizeMode={resizeMode}
            style={otherStyle}
            tintColor={tintColor}
          />
        </TouchableContainer>
      ) : (
        <Image
          source={source}
          resizeMode={resizeMode}
          style={otherStyle}
          tintColor={tintColor}
        />
      )}
    </Fragment>
  );
};
