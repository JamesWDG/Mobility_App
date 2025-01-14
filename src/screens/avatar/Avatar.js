import React, {Fragment, memo} from 'react';
import FastImage from 'react-native-fast-image';
import TouchableContainer from '../touchableContainer/TouchableContainer';

/**
 * Renders an Avatar component with customizable properties.
 *
 * @param {object} source - The image source for the avatar.
 * @param {number} height - The height of the avatar.
 * @param {number} width - The width of the avatar.
 * @param {string} resizeMode - The resizeMode for the image.
 * @param {string} tintColor - The tint color for the image.
 * @param {number} borderRadius - The border radius for the avatar.
 * @param {string} backgroundColor - The background color for the avatar.
 * @param {number} borderWidth - The border width for the avatar.
 * @param {string} borderColor - The border color for the avatar.
 * @param {object} style - Additional styles for the avatar.
 * @return {React.Element} The rendered Avatar component.
 */
const Avatar = ({
  source,
  height = 'auto',
  width = 'auto',
  resizeMode = FastImage.resizeMode.cover,
  tintColor,
  borderRadius,
  backgroundColor,
  borderWidth,
  borderColor,
  style,
  touchableAvatar,
  onPress = () => {},
}) => (
  <Fragment>
    {touchableAvatar ? (
      <TouchableContainer onPress={onPress}>
        <FastImage
          source={source}
          style={{
            height,
            width,
            borderRadius,
            backgroundColor,
            borderWidth,
            borderColor,
            ...style,
          }}
          tintColor={tintColor}
          resizeMode={resizeMode}
        />
      </TouchableContainer>
    ) : (
      <FastImage
        source={source}
        style={{
          height,
          width,
          borderRadius,
          backgroundColor,
          borderWidth,
          borderColor,
          ...style,
        }}
        tintColor={tintColor}
        resizeMode={resizeMode}
      />
    )}
  </Fragment>
);

export default memo(Avatar);
