import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import labels from '../../assets/labels/English.labels';
import CommonCard from './CommonCard';
import CommonCardContainer from './CommonCardContainer';
import ScrollViewComp from '../scrollViewComp/ScrollViewComp';
import {
  disabilityItems,
  houseFeatures,
  safetyFeatures,
  specialFeatures,
} from '../../utils/addHotel.constants';
import GeneralStyles from '../../config/GeneralStyle';

const BasicsAboutYourPlace = ({isState = {}, setIsState = () => {}}) => {
  // console.log(isState);
  // features: [],
  // specialfeatures: [],
  // disabilities: [],
  // safties: [],
  return (
    <ScrollViewComp contentContainerStyle={{gap: 30}}>
      <Container>
        <Title
          text={labels.features}
          fontSize={18}
          otherStyles={GeneralStyles.marginBottom(10)}
        />

        <CommonCardContainer
          data={houseFeatures}
          onChange={item => {
            //check if Exists

            if (!isState?.features.find(ele => ele?.title == item?.title)) {
              const newArray = [...isState?.features, item];
              // setFeatures(newArray);
              setIsState(prev => {
                return {...prev, features: newArray};
              });
            } else {
              let array = isState?.features.filter(
                ele => ele?.title != item?.title,
              );
              setIsState(prev => {
                return {...prev, features: array};
              });
            }
          }}
          selected={isState?.features}
          single={false}
        />
        {/* </Container> */}
      </Container>
      <Container>
        <Title
          text={labels.specialFeatures}
          fontSize={18}
          otherStyles={GeneralStyles.marginBottom(10)}
        />

        <CommonCardContainer
          data={specialFeatures}
          onChange={item => {
            if (
              !isState?.specialfeatures.find(ele => ele?.title == item?.title)
            ) {
              const newArray = [...isState?.specialfeatures, item];

              setIsState(prev => {
                return {...prev, specialfeatures: newArray};
              });
            } else {
              let array = isState?.specialfeatures.filter(
                ele => ele?.title != item?.title,
              );
              setIsState(prev => {
                return {...prev, specialfeatures: array};
              });
            }
          }}
          selected={isState?.specialfeatures}
          single={false}
        />
      </Container>
      <Container>
        <Title
          text={labels.doYouHaveAnyOfTheseSafetyItems}
          fontSize={18}
          otherStyles={GeneralStyles.marginBottom(10)}
        />

        <CommonCardContainer
          data={safetyFeatures}
          onChange={item => {
            //check if Exists

            if (!isState?.safties.find(ele => ele?.title == item?.title)) {
              const newArray = [...isState?.safties, item];

              setIsState(prev => {
                return {...prev, safties: newArray};
              });
            } else {
              let array = isState?.safties.filter(
                ele => ele?.title != item?.title,
              );
              setIsState(prev => {
                return {...prev, safties: array};
              });
            }
          }}
          selected={isState?.safties}
          single={false}
        />
      </Container>
      <Container>
        <Title
          text={labels.doYouHaveAnyOfTheseDisabilityItems}
          fontSize={18}
          otherStyles={GeneralStyles.marginBottom(10)}
        />

        <CommonCardContainer
          data={disabilityItems}
          onChange={item => {
            console.log('itemmmmmmmmm0110', item);
            //check if Exists
            if (!isState?.disabilities.find(ele => ele?.id == item?.id)) {
              const newArray = [...isState?.disabilities, item];

              setIsState(prev => {
                return {...prev, disabilities: newArray};
              });
            } else {
              let array = isState?.disabilities.filter(
                ele => ele?.id != item?.id,
              );
              console.log('itemmmmmmmmm0110', array);
              setIsState(prev => {
                return {...prev, disabilities: array};
              });
            }
          }}
          single={false}
          selected={isState?.disabilities}
        />
        {/* </Container> */}
      </Container>
    </ScrollViewComp>
  );
};

export default BasicsAboutYourPlace;
