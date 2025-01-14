import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import labels from '../../assets/labels/English.labels';
import styles from './Home.style';
import AuthHeader from '../../components/authHeader/AuthHeader';
import Title from '../../components/title/Title';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import Container from '../../components/container/Container';
import ScreenBg from '../../components/screenBg/ScreenBg';
import ScrollViewComp from '../../components/scrollViewComp/ScrollViewComp';
import LottieView from 'lottie-react-native';
import colors from '../../config/Colors';
import TouchableContainer from '../../components/touchableContainer/TouchableContainer';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <ScreenBg>
      <SafeAreaView style={[styles.container]}>
        <ScrollViewComp>
          <AuthHeader navigation={navigation} />
          <Container extraStyle={{paddingHorizontal: 15, marginTop: 25}}>
            <Title
              text={labels.hotelRooms}
              otherStyles={{marginLeft: 20, marginBottom: 12}}
              fontSize={24}
              fontWeight={700}
            />

            <Container
              extraStyle={{flexDirection: 'row', justifyContent: 'center'}}>
              {/* <LocalImage
              source={images.myHotels}
              // otherStyle={styles.imageContainer}
              resizeMode="contain"
            /> */}

              <TouchableContainer
                extraStyle={{
                  // height: 300,
                  alignItems: 'center',
                  backgroundColor: colors.c_7939FE,
                  marginHorizontal: 20,
                  paddingTop: 15,
                  borderRadius: 10,
                }}
                onPress={() =>
                  navigation.navigate('AppStack', {screen: 'MyHotels'})
                }>
                <LottieView
                  source={require('../../assets/animations/hotel_animation.json')}
                  height={200}
                  width={Dimensions.get('screen').width * 0.86}
                  autoPlay
                  loop
                />
                <Title
                  text="My Hotels"
                  fontSize={24}
                  fontWeight={600}
                  otherStyles={{paddingBottom: 10}}
                  color="white"
                />
              </TouchableContainer>
            </Container>
            <Title
              text={labels.anotherServices}
              otherStyles={{marginLeft: 20, marginTop: 22}}
              fontSize={24}
              fontWeight={700}
            />
            <Container
              extraStyle={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableContainer
                onPress={() =>
                  navigation.navigate('AppStack', {screen: 'myCars'})
                }>
                <LocalImage
                  source={images.myCars}
                  // otherStyle={styles.imageContainer}
                  resizeMode="contain"
                />
              </TouchableContainer>
              <LocalImage
                source={images.myRides}
                // otherStyle={styles.imageContainer}
                resizeMode="contain"
              />
            </Container>
          </Container>
        </ScrollViewComp>
      </SafeAreaView>
    </ScreenBg>
  );
};

export default Home;
