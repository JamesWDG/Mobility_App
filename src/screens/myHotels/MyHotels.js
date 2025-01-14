import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import ScreenBg from '../../components/screenBg/ScreenBg';
import Container from '../../components/container/Container';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import labels from '../../assets/labels/English.labels';
import Title from '../../components/title/Title';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import TouchableContainer from '../../components/touchableContainer/TouchableContainer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../config/Colors';
import BannerComp from '../../components/bannerComp/BannerComp';
export const bannersData = [
  {
    id: 1,
    image: images.venueCover,
  },
  {
    id: 2,
    image: images.venueCover,
  },
  {
    id: 3,
    image: images.venueCover,
  },
  {
    id: 4,
    image: images.venueCover,
  },
];
const MyHotels = ({navigation}) => {
  return (
    <ScreenBg>
      <SafeAreaView>
        <PrimaryHeader
          goBack={true}
          title={labels.myHotels}
          rightImage={true}
        />
        {/* <Container extraStyle={{paddingHorizontal: 20}}>
          <Title
            text="Hotel Listing"
            fontSize={20}
            fontWeight={600}
            otherStyles={{marginBottom: 10, textAlign: 'center'}}
          />
          <Container
            extraStyle={{
              // borderColor: 'red',s
              borderWidth: 0.3,
              borderRadius: 20,
              padding: 5,
              // backgroundColor: 'red',
              shadowColor: '#808080', // Gray color
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              // Android shadow property
              elevation: 5,
            }}>
            <Container
              extraStyle={{
                minHeight: 200,
              }}>
              <BannerComp data={bannersData} borderRadius={20} />
            </Container>
            <Container extraStyle={{gap: 6, marginTop: 8, padding: 10}}>
              <Container extraStyle={{gap: 4}}>
                <Title text="Pamela Kinney" fontSize={16} />
                <Title text="New York, NY, USA" />
              </Container>
              <Container
                extraStyle={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}>
                <Title text="House" />
                <Title text="$100" fontSize={18} />
              </Container>
              <Container extraStyle={{marginTop: 10}}>
                <Container
                  extraStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <AntDesign name="edit" size={22} />
                  <AntDesign name="delete" size={22} />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container> */}
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
                screen: 'addHotel',
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

export default MyHotels;
