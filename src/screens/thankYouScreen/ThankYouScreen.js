import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Container from '../../components/container/Container';
import ScreenBg from '../../components/screenBg/ScreenBg';
import Button from '../../components/button/Button';
import labels from '../../assets/labels/English.labels';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import Title from '../../components/title/Title';
import colors from '../../config/Colors';
import {styles} from './ThankYouScreen.styles';
import GeneralStyles from '../../config/GeneralStyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ThankYouScreen = ({route}) => {
  const params = route.params?.params || route.params;
  const insets = useSafeAreaInsets();
  return (
    <ScreenBg>
      <SafeAreaView style={styles.container}>
        <Container extraStyle={styles.thankYouContainer}>
          <LocalImage source={images.thankYou} />
          <Title
            text={params.title}
            fontSize={30}
            fontWeight={700}
            color={colors.c_7939FE}
          />
          <Title
            text={params.description}
            fontSize={20}
            fontWeight={500}
            otherStyles={GeneralStyles.textAlign('center')}
          />
        </Container>
        <Container extraStyle={styles.btnContainer(insets)}>
          <Button
            text={params.btnText}
            onPress={params.onPress}
            fontSize={18}
            fWeight={600}
          />
        </Container>
      </SafeAreaView>
    </ScreenBg>
  );
};

export default ThankYouScreen;
