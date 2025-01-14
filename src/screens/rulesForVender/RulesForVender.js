import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import React from 'react';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import labels from '../../assets/labels/English.labels';
import Container from '../../components/container/Container';
import colors from '../../config/Colors';
import Title from '../../components/title/Title';
import {styles} from './RulesForVender.styles';
import ScrollViewComp from '../../components/scrollViewComp/ScrollViewComp';
import GeneralStyles from '../../config/GeneralStyle';
import Button from '../../components/button/Button';

const data = [
  labels.rulesForTheVendor,
  labels.followYouStateAndCountry,
  labels.makeSureThatAllTheLisForRent,
  labels.offersOnlyQualityProduct,
  labels.refrainFromGiving,
  labels.respectCostsLessButIsVery,
  labels.disrespectCostsHightButNothing,
  labels.zeroTolerenceForSexualHrassment,
  labels.accomodatePeopleWith,
  labels.maintainHouseInsurance,
  labels.provideGuestParkingAnd,
  labels.cancellationMustBeWithIn72Hours,
  labels.CheckTheBoxToAcknowledge,
];
const RulesForVender = ({navigation, route}) => {
  const params = route?.params;

  return (
    <SafeAreaView>
      <PrimaryHeader
        goBack={true}
        rightImage={true}
        antdesign={true}
        navigation={navigation}
        title={labels.rulesForTheVendor}
        image={params?.params}
      />

      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => (
          <Container extraStyle={styles.bulletPointsContainer} key={index}>
            <Container extraStyle={styles?.bulletPoint}></Container>
            <Title text={item} otherStyles={GeneralStyles.flexShrink(1)} />
          </Container>
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => (
          <Container extraStyle={GeneralStyles.marginTop(40)}>
            <Button
              text={labels.accept}
              onPress={() =>
                navigation.navigate('thankYou', {
                  params: {
                    title: labels.thankYou,
                    signUp: true,
                    description: labels.youAreNowRegistered,
                    btnText: labels.signInNow,
                    onPress: () =>
                      navigation.navigate('TabStack', {screen: 'Home'}),
                  },
                })
              }
            />
          </Container>
        )}
      />
    </SafeAreaView>
  );
};

export default RulesForVender;
