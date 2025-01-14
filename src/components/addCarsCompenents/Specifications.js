import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import labels from '../../assets/labels/English.labels';
import CommonCard from '../addHotelComponents/CommonCard';
import CommonCardContainer from '../addHotelComponents/CommonCardContainer';
import ScrollViewComp from '../scrollViewComp/ScrollViewComp';
import {
  disabilityItems,
  houseFeatures,
  safetyFeatures,
  specialFeatures,
} from '../../utils/addHotel.constants';
import GeneralStyles from '../../config/GeneralStyle';
import {
  carTypes,
  manualTypes,
  powertainTypes,
} from '../../constants/addCar.constants';
import Input from '../input/Input';

const Specifications = ({isState = {}, setIsState = () => {}}) => {
  // console.log(isState);
  // features: [],
  // specialfeatures: [],
  // disabilities: [],
  // safties: [],
  return (
    <ScrollViewComp contentContainerStyle={{gap: 30}}>
      <Container>
        <Title
          text={labels.vehicleType}
          fontSize={18}
          otherStyles={GeneralStyles.marginBottom(10)}
        />

        <CommonCardContainer
          data={carTypes}
          onChange={item => {
            //check if Exists

            if (!isState?.vehicleType?.find(ele => ele?.title == item?.title)) {
              const newArray = [item];
              // setvehicleType(newArray);
              setIsState(prev => {
                return {...prev, vehicleType: newArray};
              });
            } else {
              let array = isState?.vehicleType.filter(
                ele => ele?.title != item?.title,
              );
              setIsState(prev => {
                return {...prev, vehicleType: array};
              });
            }
          }}
          selected={isState?.vehicleType}
          single={false}
        />
        {/* </Container> */}
      </Container>

      <Input
        title={labels?.enterNumberOfDoors}
        marginLeft={8}
        placeholder={labels.enterNumberOfDoors}
        value={isState.numberOfDoors}
        keyboardType={'number-pad'}
        onChangeText={t =>
          setIsState(prevState => ({...prevState, numberOfDoors: t}))
        }
        marginVertical={0}
        //   otherStyles={styles.inputStyles}
      />
      <Input
        title={labels?.enterNumberOfSeats}
        marginLeft={8}
        placeholder={labels.enterNumberOfSeats}
        value={isState.numberOfSeats}
        keyboardType={'number-pad'}
        onChangeText={t =>
          setIsState(prevState => ({...prevState, numberOfSeats: t}))
        }
        marginVertical={0}
        //   otherStyles={styles.inputStyles}
      />
      <Container>
        <Title
          text={labels.powertain}
          fontSize={18}
          otherStyles={GeneralStyles.marginBottom(10)}
        />
        {console.log(isState?.powertain, 'cjkdhufyewus')}

        <CommonCardContainer
          data={powertainTypes}
          onChange={item => {
            if (!isState?.powertain.find(ele => ele?.title == item?.title)) {
              const newArray = [item];

              console.log(newArray);
              setIsState(prev => {
                return {...prev, powertain: newArray};
              });
            } else {
              let array = isState?.powertain.filter(
                ele => ele?.title != item?.title,
              );
              setIsState(prev => {
                return {...prev, powertain: array};
              });
            }
          }}
          selected={isState?.powertain}
          single={false}
        />
      </Container>
      <Container>
        <Title
          text={labels.transmission}
          fontSize={18}
          otherStyles={GeneralStyles.marginBottom(10)}
        />

        <CommonCardContainer
          data={manualTypes}
          onChange={item => {
            //check if Exists

            if (!isState?.manualTypes.find(ele => ele?.title == item?.title)) {
              const newArray = [item];

              setIsState(prev => {
                return {...prev, manualTypes: newArray};
              });
            } else {
              let array = isState?.manualTypes.filter(
                ele => ele?.title != item?.title,
              );
              setIsState(prev => {
                return {...prev, manualTypes: array};
              });
            }
          }}
          selected={isState?.manualTypes}
          single={false}
        />
      </Container>
    </ScrollViewComp>
  );
};

export default Specifications;
