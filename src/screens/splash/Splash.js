/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {images} from '../../config/Images';
import styles from './Splash.style';
import ScreenBg from '../../components/screenBg/ScreenBg';
import {LocalImage} from '../../components/localImage/LocalImage';
import Container from '../../components/container/Container';
const Splash = ({navigation}) => {
  useEffect(() => {
    async function navigate() {
      setTimeout(async function () {
        // navigation.replace('Select Language');
        navigation.navigate('TabStack', {screen: 'Home'});
      }, 2000);
    }
    navigate();
  }, []);

  return (
    <ScreenBg>
      <Container extraStyle={styles.imageContainer}>
        <LocalImage
          source={images.splashLogo}
          otherStyle={styles.imageStyles}
          resizeMode="contain"
        />
      </Container>
    </ScreenBg>
  );
};

export default Splash;
