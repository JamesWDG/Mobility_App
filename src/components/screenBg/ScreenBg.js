import React, {memo} from 'react';
import {ImageBackground} from 'react-native';
import Container from '../container/Container';
import {images} from '../../config/Images';
import styles from './ScreenBg.styles';

const ScreenBg = ({children, otherStyles, radius = false}) => {
  return (
    <Container extraStyle={[styles.container(radius), otherStyles]}>
      <ImageBackground source={images.bgImage} style={styles.imageBg}>
        {children}
      </ImageBackground>
    </Container>
  );
};

export default memo(ScreenBg);