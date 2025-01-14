import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './Container.style';

/**
 * Renders a container component with customizable styles and children.
 *
 * @param {object} style - The base style of the container.
 * @param {object} extraStyle - Additional style to be applied to the container.
 * @param {ReactNode} children - The content to be rendered inside the container.
 * @return {ReactElement} The rendered container component.
 */
const Container = ({style, extraStyle, children, pointerEvents = 'auto' , key}) => {
  return (
    <View pointerEvents={pointerEvents} style={[styles[style], extraStyle]} key={key}>
      {children}
    </View>
  );
};

export default memo(Container);
