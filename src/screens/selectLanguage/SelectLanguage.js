import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './SelectLanguage.styles';
import ScreenBg from '../../components/screenBg/ScreenBg';
import Container from '../../components/container/Container';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import Title from '../../components/title/Title';
import labels from '../../assets/labels/English.labels';
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';
import RadioButton from '../../components/radioButton/RadioButton';
import colors from '../../config/Colors';
import Button from '../../components/button/Button';
import fonts from '../../config/Fonts';
import GeneralStyles from '../../config/GeneralStyle';
const data = [
  {
    id: 1,
    label: 'English',
    desc: '(Phone Language)',
    value: 'english',
  },
  {
    id: 2,
    label: 'Shqip ',
    desc: '(Albanian)',
    value: 'shqip',
  },
  {
    id: 3,
    label: 'Afrikans',
    desc: '(Afrikans)',
    value: 'afrikans',
  },
  {
    id: 4,
    label: 'Arabic ',
    desc: '(Albanian)',
    value: 'albanian',
  },
];
const SelectLanguage = ({navigation}) => {
  // States
  const [selectedId, setSelectedId] = useState(1);
  const [selectedValue, setSelectedValue] = useState('english');
  return (
    <ScreenBg>
      <Container extraStyle={styles.mainContainerStyles}>
        <LocalImage
          source={images.splashLogo}
          otherStyle={styles.imageContainer}
          resizeMode="contain"
        />
        <Container extraStyle={styles.innerContainer}>
          <Title
            text={labels.welcomeTo}
            fontSize={24}
            fontFamily={fonts.poppinsSemiBold}
            fontWeight={600}
          />
          <Title
            text={labels.mobilityMadeEasyLLC}
            fontSize={24}
            fontFamily={fonts.poppinsSemiBold}
            fontWeight={600}
            otherStyles={GeneralStyles.marginTop(6)}
          />
          <Title
            text={labels.chooseLanguageToGetStarted}
            fontSize={18}
            fontWeight={300}
            otherStyles={{marginVertical: 12, textAlign: 'center'}}
          />
          <RadioButton
            data={data}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout={'column'}
            color={colors.c_7939FE}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <Button
            text={labels.select}
            otherStyles={GeneralStyles.marginTop(40)}
            onPress={() => navigation.navigate('intro')}
          />
        </Container>
      </Container>
    </ScreenBg>
  );
};

export default SelectLanguage;
