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
import Entypo from 'react-native-vector-icons/Entypo';
import {
  carFeatures,
  carTypes,
  disabilityFeatures,
  manualTypes,
  powertainTypes,
} from '../../constants/addCar.constants';
import Input from '../input/Input';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import colors from '../../config/Colors';
import Utility from '../../utils/Utility';
import {showToast} from '../../utils/Toast';

const Featuress = ({isState = {}, setIsState = () => {}}) => {
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
          data={carFeatures}
          onChange={item => {
            //check if Exists

            if (!isState?.features?.find(ele => ele?.title == item?.title)) {
              const newArray = [...isState?.features, item];
              // setvehicleType(newArray);
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
          text={labels.anySpecifixFeaturesNotListed}
          fontSize={18}
          otherStyles={{marginBottom: 10, lineHeight: 25}}
        />

        <Container extraStyle={{gap: 20}}>
          {isState?.list?.map((ele, index) => {
            return (
              <Container
                extraStyle={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10,
                }}>
                <Container extraStyle={{flex: 1}}>
                  <Input
                    marginLeft={8}
                    placeholder={labels.addFeature}
                    value={isState.list?.[index]?.text}
                    keyboardType={'number-pad'}
                    onChangeText={t => {
                      const array = isState?.list;
                      array[index].text = t;
                      const lists = [...array];
                      setIsState(prevState => ({...prevState, list: lists}));
                    }}
                    marginVertical={0}
                    otherStyles={{flex: 1}}
                  />
                </Container>
                <TouchableContainer
                  onPress={() => {
                    console.log(!isState.list.find(ele => !ele), 'eleleleelel');
                    if (!isState.list.find(ele => !ele?.text) && index == 0) {
                      setIsState(prev => {
                        return {...prev, list: [...prev?.list, {text: ''}]};
                      });
                    } else {
                      // showToast('Kindly Fill This First!', 'error');

                      if (index > 0) {
                        const arraay = [...isState?.list];

                        arraay.splice(index, 1);
                        setIsState(prev => {
                          return {...prev, list: arraay};
                        });
                      }
                    }
                  }}
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
                  {index == 0 ? (
                    <Entypo name="plus" size={30} color={colors.white} />
                  ) : (
                    <Entypo name="minus" size={30} color={colors.white} />
                  )}
                </TouchableContainer>
              </Container>
            );
          })}
        </Container>
      </Container>
      <Container>
        <Title
          text={labels.disabilityFeatures}
          fontSize={18}
          otherStyles={GeneralStyles.marginBottom(10)}
        />

        <CommonCardContainer
          data={disabilityFeatures}
          onChange={item => {
            if (
              !isState?.disabilityFeatures.find(
                ele => ele?.title == item?.title,
              )
            ) {
              const newArray = [...isState?.disabilityFeatures, item];

              console.log(newArray);
              setIsState(prev => {
                return {...prev, disabilityFeatures: newArray};
              });
            } else {
              let array = isState?.disabilityFeatures.filter(
                ele => ele?.title != item?.title,
              );
              setIsState(prev => {
                return {...prev, disabilityFeatures: array};
              });
            }
          }}
          selected={isState?.disabilityFeatures}
          single={false}
        />
      </Container>
    </ScrollViewComp>
  );
};

export default Featuress;
