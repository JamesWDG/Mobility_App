// // import React, {useRef, useState} from 'react';
// // import {
// //   Dimensions,
// //   Image,
// //   StyleSheet,
// //   Text,
// //   View,
// //   Pressable,
// // } from 'react-native';
// // import {SafeAreaView} from 'react-native-safe-area-context';
// // import Colors from '../../config/Colors';
// // import LinearGradient from 'react-native-linear-gradient';
// // import Labels from '../../assets/labels/English.labels';
// // import AppIntroSlider from 'react-native-app-intro-slider';
// // import fonts from '../../config/Fonts';
// // import {images as Assets} from '../../config/Images';
// const tourList = [
//   {
//     title: Labels.listYourHotel,
//     description: Labels.uploadAndRegisterYourHotelOnOurAPP,
//     image: Assets.firstSliderImage,
//   },
//   {
//     title: Labels.listYourCar,
//     description:
//       Labels.registerYourCarToGetYourCar,
//     image: Assets.secondSliderImage,
//   },
//   {
//     title: Labels.becomeADriver,
//     description:
//       Labels.becomeADriverToday,
//     image: Assets.thirdSliderImage,
//   },
// ];
// // // const TourScreen = ({ navigation }) => {
// // //     const slideRef = useRef();
// // //     const [activeIndex, setActiveIndex] = useState(0);

// // //     const _renderItem = ({ item }) => {
// // //         return (
// // //             <View style={styles.slide}>
// // //                 <Image source={item.image} style={styles.imageStyle} />
// // //                 <View style={styles.paginationContainer}>
// // //                     {
// // //                         tourList.map((t, index) => (
// // //                             <>
// // //                             <LinearGradient colors={['rgba(238, 96, 0, 1)', 'rgba(255, 154, 86, 1)']}
// // //                                 style={styles.paginationStyle}
// // //                             >
// // //                                 <View style={styles.innerPagination(activeIndex === index)} />
// // //                             </LinearGradient>
// // //                             </>
// // //                         ))
// // //                     }
// // //                 </View>
// // //                 <View style={styles.titleContainer}>
// // //                     <Text style={styles.title}>{item?.title}</Text>
// // //                     <Text style={styles.text}>{item?.description}</Text>
// // //                 </View>
// // //             </View>
// // //         );
// // //     };
// // //     const renderPagination = () => {
// // //         return (
// // //             <View style={styles.buttonContainer}>
// // //                 <LinearGradient colors={['rgba(255, 247, 241, 1)', 'rgba(255, 214, 186, 1)']} style={styles.buttonGradiant}>
// // //                     <Pressable
// // //                     onPress={() => navigation.navigate('NewAddNewBusiness')}
// // //                     activeOpacity={0.8}
// // //                         disabledOpacity={0.8}
// // //                         style={styles.buttonExtraStyle}>
// // //                         <View style={[styles.ButtonContainer]}>
// // //                             <Text
// // //                                 style={styles.skipButtonText}>
// // //                                 {Labels.skip}
// // //                             </Text>
// // //                         </View>
// // //                     </Pressable>
// // //                 </LinearGradient>
// // //                 <LinearGradient colors={['rgba(238, 96, 0, 1)', 'rgba(255, 154, 86, 1)']} style={styles.buttonGradiant}>
// // //                     <Pressable
// // //                         onPress={() => (activeIndex + 1) === tourList.length ? navigation.navigate('NewAddNewBusiness') : slideRef.current?.goToSlide(activeIndex + 1, true)}
// // //                         activeOpacity={0.8}
// // //                         disabledOpacity={0.8}
// // //                         style={styles.buttonExtraStyle}>
// // //                         <View >
// // //                             <Text
// // //                                 style={styles.buttonText}>
// // //                                 {Labels.Next}
// // //                             </Text>
// // //                         </View>
// // //                     </Pressable>
// // //                 </LinearGradient>
// // //             </View>
// // //         )
// // //     }
// // //     return (
// // //         <LinearGradient colors={[Colors.extraLightOrange, "#fff", "#fff"]}
// // //             style={{ flex: 1 }}
// // //         >
// // //             <SafeAreaView style={styles.container}>
// // //                 {/* <CustomHeader
// // //                     leftButton={true}
// // //                     onLeftClick={() => navigation.goBack()}
// // //                 /> */}
// // //                 <View style={styles.bodyContainer}>
// // //                     <AppIntroSlider
// // //                         ref={slideRef}
// // //                         renderItem={_renderItem}
// // //                         data={tourList}
// // //                         onSlideChange={e => setActiveIndex(e)}
// // //                         renderPagination={renderPagination}
// // //                     />
// // //                 </View>
// // //             </SafeAreaView>
// // //         </LinearGradient>
// // //     )
// // // }
// // // export default TourScreen;

// // const TourScreen = ({navigation}) => {
// //   const slideRef = useRef();
// //   const [activeIndex, setActiveIndex] = useState(0);

// //       const _renderItem = ({ item }) => {
// //         return (
// //             <View style={styles.slide}>
// //                 <Image source={item.image} style={styles.imageStyle} />
// //                 <View style={styles.paginationContainer}>
// //                     {
// //                         tourList.map((t, index) => (
// //                             <>
// //                             <LinearGradient colors={['rgba(238, 96, 0, 1)', 'rgba(255, 154, 86, 1)']}
// //                                 style={styles.paginationStyle}
// //                             >
// //                                 <View style={styles.innerPagination(activeIndex === index)} />
// //                             </LinearGradient>
// //                             </>
// //                         ))
// //                     }
// //                 </View>
// //                 <View style={styles.titleContainer}>
// //                     <Text style={styles.title}>{item?.title}</Text>
// //                     <Text style={styles.text}>{item?.description}</Text>
// //                 </View>
// //             </View>
// //         );
// //     };

// //   const renderPagination = () => {
// //     return (
// //       <View style={styles.buttonContainer}>
// //         <LinearGradient
// //           colors={['rgba(255, 247, 241, 1)', 'rgba(255, 214, 186, 1)']}
// //           style={styles.buttonGradiant}>
// //           <Pressable
// //             onPress={() => navigation.navigate('NewAddNewBusiness')}
// //             activeOpacity={0.8}
// //             disabledOpacity={0.8}
// //             style={styles.buttonExtraStyle}>
// //             <View style={[styles.ButtonContainer]}>
// //               <Text style={styles.skipButtonText}>{Labels.skip}</Text>
// //             </View>
// //           </Pressable>
// //         </LinearGradient>
// //         <LinearGradient
// //           colors={['rgba(238, 96, 0, 1)', 'rgba(255, 154, 86, 1)']}
// //           style={styles.buttonGradiant}>
// //           <Pressable
// //             onPress={() =>
// //               activeIndex + 1 === tourList.length
// //                 ? navigation.navigate('NewAddNewBusiness')
// //                 : slideRef.current?.goToSlide(activeIndex + 1, true)
// //             }
// //             activeOpacity={0.8}
// //             disabledOpacity={0.8}
// //             style={styles.buttonExtraStyle}>
// //             <View>
// //               <Text style={styles.buttonText}>{Labels.Next}</Text>
// //             </View>
// //           </Pressable>
// //         </LinearGradient>
// //       </View>
// //     );
// //   };
// //   return (
// //     <LinearGradient
// //       colors={[Colors.extraLightOrange, '#fff', '#fff']}
// //       style={{flex: 1}}>
// //       <SafeAreaView style={styles.container}>
// //         {/* <CustomHeader
// //                             leftButton={true}
// //                             onLeftClick={() => navigation.goBack()}
// //                         /> */}
// //         <View style={styles.bodyContainer}>
// //           <AppIntroSlider
// //             ref={slideRef}
// //             renderItem={_renderItem}
// //             data={tourList}
// //             onSlideChange={e => setActiveIndex(e)}
// //             renderPagination={renderPagination}
// //           />
// //         </View>
// //       </SafeAreaView>
// //     </LinearGradient>
// //   );
// // };

// // export default TourScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   imageStyle: {
// //     resizeMode: 'contain',
// //     width: Dimensions.get('screen').width - 40,
// //     height: Dimensions.get('screen').width - 40,
// //   },
// //   bodyContainer: {
// //     flex: 1,
// //     marginHorizontal: 20,
// //   },
// //   slide: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 20,
// //     lineHeight: 28,
// //     fontFamily: fonts.AXIFORMAREGULAR,
// //     fontWeight: '600',
// //     textAlign: 'center',
// //   },
// //   text: {
// //     marginTop: 10,
// //     fontSize: 16,
// //     lineHeight: 25,
// //     fontFamily: fonts.AXIFORMAREGULAR,
// //     fontWeight: '400',
// //     textAlign: 'center',
// //   },
// //   titleContainer: {
// //     marginTop: 50,
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     width: Dimensions.get('screen').width - 80,
// //   },
// //   paginationStyle: {
// //     width: 20,
// //     height: 20,
// //     margin: 5,
// //     borderRadius: 100,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   innerPagination: active => ({
// //     width: 16,
// //     borderRadius: 100,
// //     height: 16,
// //     backgroundColor: active ? 'transparent' : Colors.White,
// //   }),
// //   paginationContainer: {
// //     flexDirection: 'row',
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   buttonExtraStyle: {
// //     width: Dimensions.get('screen').width / 2.32,
// //     paddingVertical: 16,
// //   },
// //   buttonText: {
// //     textAlign: 'center',
// //     fontSize: 16,
// //     lineHeight: 25,
// //     fontFamily: fonts.AXIFORMAREGULAR,
// //     fontWeight: '500',
// //     color: Colors.White,
// //   },
// //   skipButtonText: {
// //     textAlign: 'center',
// //     fontSize: 16,
// //     lineHeight: 25,
// //     fontFamily: fonts.AXIFORMAREGULAR,
// //     fontWeight: '500',
// //     color: Colors.Black,
// //   },
// //   buttonGradiant: {
// //     borderRadius: 8,
// //   },
// // });

// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Image,
//   Pressable,
// } from 'react-native';
// import React, {useRef, useState} from 'react';
// import Container from '../../components/container/Container';
// import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
// import Colors from '../../config/Colors';
// import LinearGradient from 'react-native-linear-gradient';
// import Labels from '../../assets/labels/English.labels';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import fonts from '../../config/Fonts';
// import {images as Assets} from '../../config/Images';
// import ScreenBg from '../../components/screenBg/ScreenBg';
// const InteroSlider = () => {
//   const slideRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);
//   const insets = useSafeAreaInsets()
//   const renderPagination = () => {
//     return (
//       <View style={styles.buttonContainer}>
//         <LinearGradient
//           colors={['rgba(238, 96, 0, 1)', 'rgba(255, 154, 86, 1)']}
//           style={styles.buttonGradiant}>
//           <Pressable
//             onPress={() =>
//               activeIndex + 1 === tourList.length
//                 ? navigation.navigate('NewAddNewBusiness')
//                 : slideRef.current?.goToSlide(activeIndex + 1, true)
//             }
//             activeOpacity={0.8}
//             disabledOpacity={0.8}
//             style={styles.buttonExtraStyle}>
//             <View>
//               <Text style={styles.buttonText}>{Labels.Next}</Text>
//             </View>
//           </Pressable>
//         </LinearGradient>
//       </View>
//     );
//   };
//   const _renderItem = ({item}) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.image} style={styles.imageStyle} />
//         <View style={styles.paginationContainer}>
//           {tourList.map((t, index) => (
//             <>
//               <LinearGradient
//                 colors={['rgba(238, 96, 0, 1)', 'rgba(255, 154, 86, 1)']}
//                 style={styles.paginationStyle}>
//                 <View style={styles.innerPagination(activeIndex === index)} />
//               </LinearGradient>
//             </>
//           ))}
//         </View>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>{item?.title}</Text>
//           <Text style={styles.text}>{item?.description}</Text>
//         </View>
//       </View>
//     );
//   };
//   return (
//     // <LinearGradient
//     //       colors={[Colors.extraLightOrange, '#fff', '#fff']}
//     //       style={{flex: 1}}>
//     //       {/* <SafeAreaView style={styles.container}> */}
//     //         {/* <CustomHeader
//     //                             leftButton={true}
//     //                             onLeftClick={() => navigation.goBack()}
//     //                         /> */}
//     //         {/* <View style={styles.bodyContainer}>
//     //           <AppIntroSlider
//     //             ref={slideRef}
//     //             renderItem={_renderItem}
//     //             data={tourList}
//     //             onSlideChange={e => setActiveIndex(e)}
//     //             // renderPagination={renderPagination}
//     //           />
//     //         </View> */}
//     //         <Text>thsisisiis</Text>
//     //       {/* </SafeAreaView> */}
//     //     </LinearGradient>
//     <ScreenBg>

//         <Container
//           extraStyle={{
//             // justifyContent: 'flex-start',
//             // alignItems: 'center',
//             flex: 1,
//             backgroundColor: 'red',
//             marginTop : insets.top + 10
//           }}>
//           <AppIntroSlider
//             ref={slideRef}
//             renderItem={_renderItem}
//             data={tourList}
//             onSlideChange={e => setActiveIndex(e)}
//             //   renderPagination={renderPagination}
//           />
//         </Container>

//     </ScreenBg>
//   );
// };

// export default InteroSlider;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   imageStyle: {
//     resizeMode: 'contain',
//     // width: Dimensions.get('screen').width - 40,
//     // height: Dimensions.get('screen').width - 40,
//   },
//   bodyContainer: {
//     flex: 1,
//     marginHorizontal: 20,
//   },
//   slide: {

//     // alignItems: 'center',
//     // justifyContent: 'center',
//     backgroundColor : "blue",
//     flex : 1
//   },
//   title: {
//     fontSize: 20,
//     lineHeight: 28,
//     fontFamily: fonts.AXIFORMAREGULAR,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   text: {
//     marginTop: 10,
//     fontSize: 16,
//     lineHeight: 25,
//     fontFamily: fonts.AXIFORMAREGULAR,
//     fontWeight: '400',
//     textAlign: 'center',
//   },
//   titleContainer: {
//     marginTop: 50,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: Dimensions.get('screen').width - 80,
//   },
//   paginationStyle: {
//     width: 20,
//     height: 20,
//     margin: 5,
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   innerPagination: active => ({
//     width: 16,
//     borderRadius: 100,
//     height: 16,
//     backgroundColor: active ? 'transparent' : Colors.White,
//   }),
//   paginationContainer: {
//     flexDirection: 'row',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   buttonExtraStyle: {
//     width: Dimensions.get('screen').width * 1,
//     paddingVertical: 16,
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 16,
//     lineHeight: 25,
//     fontFamily: fonts.AXIFORMAREGULAR,
//     fontWeight: '500',
//     color: Colors.White,
//   },
//   skipButtonText: {
//     textAlign: 'center',
//     fontSize: 16,
//     lineHeight: 25,
//     fontFamily: fonts.AXIFORMAREGULAR,
//     fontWeight: '500',
//     color: Colors.Black,
//   },
//   buttonGradiant: {
//     borderRadius: 8,
//   },
// });

import {View, Text, Dimensions, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import {images} from '../../config/Images';
import labels from '../../assets/labels/English.labels';
import ScreenBg from '../../components/screenBg/ScreenBg';
import Container from '../../components/container/Container';
import AppIntroSlider from 'react-native-app-intro-slider';
import Title from '../../components/title/Title';
import {LocalImage} from '../../components/localImage/LocalImage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './IntroSlider.styles';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/button/Button';
const tourList = [
  {
    title: labels.listYourHotel,
    description: labels.uploadAndRegisterYourHotelOnOurAPP,
    image: images.firstSliderImage,
  },

  {
    title: labels.becomeADriver,
    description: labels.becomeADriverToday,
    image: images.thirdSliderImage,
  },
  {
    title: labels.listYourCar,
    description: labels.registerYourCarToGetYourCar,
    image: images.secondSliderImage,
  },
];
const InteroSlider = ({navigation}) => {
  const slideRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const insets = useSafeAreaInsets();

  //   const renderPagination = () => {
  //     return (
  //       <View style={styles?.buttonContainer}>
  //         <Container
  //           style={styles?.buttonGradiant}>
  //           <Pressable
  //             onPress={() =>
  //               activeIndex + 1 === tourList.length
  //                 ? navigation.navigate('NewAddNewBusiness')
  //                 : slideRef.current?.goToSlide(activeIndex + 1, true)
  //             }
  //             activeOpacity={0.8}
  //             disabledOpacity={0.8}
  //             style={styles?.buttonExtraStyle}>
  //             <View>
  //               <Text style={styles?.buttonText}>{labels.next}</Text>
  //             </View>
  //           </Pressable>
  //         </Container>
  //       </View>
  //     );
  //   };

  const _renderPagination = () => {
    return (
      <Container
        extraStyle={{paddingHorizontal: 20, marginBottom: insets.bottom + 20}}>
        <Button
          text={activeIndex + 1 === tourList.length ? labels.getStartted :labels.next}
          fWeight={700}
          fontSize={18}
          otherStyles={{height: 50, fontWeight: 700}}
          onPress={() => {
            // If we're on the last slide, you can navigate to a new screen or handle it differently
            if (activeIndex + 1 === tourList.length) {
              // You can navigate to a new screen if needed
                navigation.navigate('signin'); // Adjust this to your navigation flow
            } else {
              slideRef.current?.goToSlide(activeIndex + 1, true); // Move to the next slide
            }
          }}
        />
      </Container>
    );
  };

  const _renderItem = ({item}) => {
    return (
      <Container
        extraStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          //   flex : 1,
          marginTop: insets.top + 30,
        }}>
        {/* <Title text={'checkck'} /> */}
        <LocalImage
          source={item?.image}
          otherStyle={{
            width: Dimensions.get('screen').width - 40,
            height: Dimensions.get('screen').width - 40,
          }}
        />
        <View style={styles?.paginationContainer}>
          {tourList.map((t, index) => (
            <>
              <Container extraStyle={styles?.paginationStyle}>
                <View style={styles?.innerPagination(activeIndex === index)} />
              </Container>
            </>
          ))}
        </View>
        <Container
          extraStyle={{
            marginTop: 20,
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Title text={item?.title} fontSize={24} fontWeight={700} />
          <Title
            text={item?.description}
            fontSize={16}
            fontWeight={300}
            otherStyles={{textAlign: 'center', marginTop: 20}}
          />
        </Container>
      </Container>
    );
  };
  return (
    <ScreenBg>
      <Container extraStyle={{flex: 1}}>
        <AppIntroSlider
          ref={slideRef}
          data={tourList}
          renderItem={_renderItem}
          contentContainerStyle={{flexGrow: 1}}
          onSlideChange={e => setActiveIndex(e)}
          showNextButton={true}
          showDoneButton={true}
          showPrevButton={false}
          showSkipButton={false}
          renderPagination={_renderPagination}
        />
      </Container>
    </ScreenBg>
  );
};

export default InteroSlider;
