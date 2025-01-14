import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ScreenBg from '../../components/screenBg/ScreenBg';
import ScrollViewComp from '../../components/scrollViewComp/ScrollViewComp';
import {LocalImage} from '../../components/localImage/LocalImage';
import Title from '../../components/title/Title';
import labels from '../../assets/labels/English.labels';
import fonts from '../../config/Fonts';
import {images} from '../../config/Images';
import Container from '../../components/container/Container';
import TouchableContainer from '../../components/touchableContainer/TouchableContainer';
import colors from '../../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/button/Button';
import GeneralStyles from '../../config/GeneralStyle';
// Get screen width for carousel layout
const {width: screenWidth} = Dimensions.get('window');

// You can adjust these values as per your design
const sliderWidth = screenWidth;
const itemWidth = screenWidth * 0.8; // Adjust to control item width

// Sample data for the carousel
const carouselData = [
  {
    id: '1',
    title: 'Gold',
    price: '69',
    desc: 'The Perfect way to get started and get used to our tools',
    text01: '$100 Cost Per mile',
    text02: 'All featured in Standards',
    text03: 'All featured in Standards',
    tag: 'Popular',
  },
  {
    id: '2',
    title: 'Platinum',
    price: '99',
    desc: 'The Perfect way to get started and get used to our tools',
    text01: '$100 Cost Per mile',
    text02: 'All featured in Standards',
    text03: 'All featured in Standards',
  },
  {
    id: '3',
    title: 'Silver',
    price: '19',
    desc: 'The Perfect way to get started and get used to our tools',
    text01: '$100 Cost Per mile',
    text02: 'All featured in Standards',
    text03: 'All featured in Standards',
  },
];

const MyCarousel = ({navigation}) => {
  const [entries, setEntries] = useState(carouselData);
  const [focusedItemIndex, setFocusedItemIndex] = useState(0);
  const ItemsWithCheck = ({title = '',isFocused=false}) => {
    return (
      <Container extraStyle={{flexDirection: 'row', gap: 10}}>
        {/* <LocalImage source={}/> */}
        <Icon name="check" size={20} color={isFocused ? colors.white : colors.black}/>
        <Title
          text={title}
          otherStyles={{marginBottom: 5}}
          fontSize={16}
          fontWeight={300}
          color={isFocused ? colors.white : colors.black}
        />
      </Container>
    );
  };
  const _renderItem = ({item, index}) => {
    const isFocused = index === focusedItemIndex;
    return (
      //   <View style={styles.slide}>
      //     <Text style={styles.title}>{item.title}</Text>
      //   </View>
      <Container extraStyle={styles.slide(isFocused)}>
        <Container extraStyle={{flex: 1}}>
          <Container
            extraStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Title
              text={item?.title}
              fontSize={22}
              color={isFocused ? colors.white : colors.black}
            />
            {item?.tag ? (
              <TouchableContainer
                extraStyle={{
                  paddingVertical: 12,
                  paddingHorizontal: 18,
                  backgroundColor: colors.c_3D01FF,
                  borderRadius: 20,
                }}>
                <Title text={item?.tag} color="white" fontSize={14} />
              </TouchableContainer>
            ) : null}
          </Container>

          <Container
            extraStyle={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginVertical: 15,
            }}>
            <Title text={`$${item?.price}`} fontSize={30} fontWeight={700} color={isFocused ? colors.white : colors.black}/>
            <Title
              text={`/Month`}
              otherStyles={{marginBottom: 5}}
              fontSize={18}
              color={isFocused ? colors.white : colors.black}
            />
          </Container>
          <Title
            text={item?.desc}
            otherStyles={{marginBottom: 25, marginTop: 10}}
            fontSize={16}
            fontWeight={300}
            color={isFocused ? colors.white : colors.black}
          />

          <Container extraStyle={{borderWidth: 0.41, borderColor : isFocused ? colors.white : colors.black}}></Container>
          <Container extraStyle={{gap: 15, marginTop: 25}}>
            <ItemsWithCheck title={item.text01} isFocused={isFocused}/>
            <ItemsWithCheck title={item.text02} isFocused={isFocused}/>
            <ItemsWithCheck title={item.text03} isFocused={isFocused}/>
          </Container>
        </Container>

        <Button
          text={labels.subscribeNow}
          fontWeight={400}
          backgroundColor={!isFocused ?colors.c_13053D :colors.c_7939FE}
          otherStyles={GeneralStyles.marginTop(40)}
          onPress={() => {
            navigation.navigate("AppStack" , {screen : "Payment"})
            // if(Utility.validateSignupSchema(isState)){
            //   navigation.navigate("rules" , {params : isState?.profileImage})
            // }
          }}
        />
      </Container>
    );
  };

  // Callback to handle when a new item is focused
  const handleSnapToItem = index => {
    setFocusedItemIndex(index); // Update state when a new item is focused
  };
  return (
    <ScreenBg>
      <SafeAreaView style={{flex: 1 }}>
        <ScrollViewComp contentContainerStyle={{marginBottom: 0, flexGrow: 1}}>
          <Container extraStyle={{alignItems: 'center' }}>
            <LocalImage
              source={images.splashLogo}
              otherStyle={styles.imageContainer}
              resizeMode="contain"
            />
            {/* <Container extraStyle={styles.innerContainer}> */}
            <Title
              text={labels.signIn}
              fontSize={24}
              fontFamily={fonts.poppinsSemiBold}
              fontWeight={600}
              otherStyles={{marginTop : 20}}
            />

            <Title
              text={labels.enterYourPersonal}
              fontSize={16}
              fontWeight={300}
              otherStyles={{
                marginTop: 12,
                textAlign: 'center',
                marginBottom: 30,
                maxWidth: '80%',
              }}
            />
          </Container>
          <Carousel
            data={entries}
            renderItem={_renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={true}
            onSnapToItem={handleSnapToItem}
            // Optional props to control carousel behavior
            // loop={true} // Loop the items
            // autoplay={true} // Enable auto play
            autoplayInterval={3000} // Autoplay interval (3 seconds)
          />
        </ScrollViewComp>
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  slide: isFocused => ({
    // flex: 1,
    // height : 300,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: isFocused ? colors.c_13053D : colors.white,
    borderRadius: 10,
    minHeight: 200, // Adjust based on the desired height of each item
    padding: 20,
    // iOS shadow properties
    shadowColor: '#000', // Shadow color (use a grayish color for gray shadow)
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    // Android shadow (elevation)
    elevation: 8,
  }),
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MyCarousel;
