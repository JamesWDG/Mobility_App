import React from 'react';
import {Animated} from 'react-native';
import {styles} from './Container.style';

/**
 * Renders a container component with customizable styles and children.
 *
 * @param {object} style - The base style of the container.
 * @param {object} extraStyle - Additional style to be applied to the container.
 * @param {ReactNode} children - The content to be rendered inside the container.
 * @return {ReactElement} The rendered container component.
 */
const AnimatedContainer = ({style, extraStyle, children}) => {
  return (
    <Animated.View style={[styles[style], extraStyle]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedContainer;
