import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './TouchableContainer.style';

/**
 * Renders a `TouchableOpacity` component from the `react-native-pressable-opacity` library.
 *
 * @param {string} style - The style key used to determine the styling of the `TouchableOpacity` component.
 * @param {object} extraStyle - Additional styles to be applied to the `TouchableOpacity` component.
 * @param {ReactNode} children - The content to be rendered within the `TouchableOpacity` component.
 * @param {function} onPress - The function to be called when the `TouchableOpacity` component is pressed.
 * @returns {ReactNode} - The rendered `TouchableOpacity` component.
 */
const TouchableContainer = ({
  style,
  extraStyle,
  children,
  onPress,
  activeOpacity = 0.7,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      // disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={[styles[style], extraStyle]}>
      {children}
    </TouchableOpacity>
  );
};

export default memo(TouchableContainer);
