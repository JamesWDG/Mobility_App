import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Container from '../../components/container/Container';
import Title from '../../components/title/Title';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import colors from '../../config/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import TouchableContainer from '../../components/touchableContainer/TouchableContainer';
import labels from '../../assets/labels/English.labels';
import ScreenBg from '../../components/screenBg/ScreenBg';
import {SafeAreaView} from 'react-native-safe-area-context';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
const MyCars = ({navigation}) => {
  return (
    <ScreenBg>
      <SafeAreaView>
        <PrimaryHeader goBack={true} title={labels.myCars} rightImage={true} />
        <Container
          extraStyle={{
            // backgroundColor: 'red',
            height: Dimensions.get('screen').height * 0.7,
            marginTop: 40,
            gap: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Container extraStyle={{gap: 60, alignItems: 'center'}}>
            <Container
              extraStyle={{maxWidth: Dimensions.get('screen').width * 0.8}}>
              <Title
                text={labels.pleaseRegisterYourHotel}
                fontSize={14}
                otherStyles={{
                  textAlign: 'center',
                  lineHeight: 22,
                  letterSpacing: 2,
                }}
              />
            </Container>
            <LocalImage source={images.emptyHotel} />
          </Container>
          <TouchableContainer
            onPress={() =>
              navigation.navigate('AppStack', {
                screen: 'addCars',
              })
            }
            extraStyle={{
              padding: 12,
              backgroundColor: colors.c_7738FA,
              borderRadius: 100,
              shadowColor: 'rgba(121, 57, 254, 0.8)', // Shadow color
              shadowOffset: {width: 0, height: 4}, // Horizontal and Vertical offset
              shadowOpacity: 0.8, // Opacity of the shadow
              shadowRadius: 14.1, // Blur radius
              elevation: 5,
            }}>
            <Entypo name="plus" size={34} color={colors.white} />
          </TouchableContainer>
        </Container>
      </SafeAreaView>
    </ScreenBg>
  );
};

export default MyCars;
