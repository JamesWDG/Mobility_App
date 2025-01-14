import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import ScreenBg from '../../components/screenBg/ScreenBg';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import labels from '../../assets/labels/English.labels';
import Container from '../../components/container/Container';
import Title from '../../components/title/Title';
import Steps from '../../components/steps/Steps';
import {myCarsStepsData, stepsData} from '../../constants/stepperData';
import {styles} from './AddCars.styles';
import Button from '../../components/button/Button';
import GeneralStyles from '../../config/GeneralStyle';
import BasicInfo from '../../components/addCarsCompenents/BasicInfo';
import {houseFeatures, houseTypes} from '../../utils/addHotel.constants';
import Utility from '../../utils/Utility';
import {showToast} from '../../utils/Toast';

import Specifications from '../../components/addCarsCompenents/Specifications';
import AddDiscount from '../../components/addCarsCompenents/AddDiscount';
import UploadFile from '../../components/addCarsCompenents/UploadImages';
import Preview from '../../components/addCarsCompenents/Preview';
import CustomModal from '../../components/customModal';
import Agreements from '../../components/addHotelComponents/Agreements';
import Featuress from '../../components/addCarsCompenents/Features';
import Pricing from '../../components/addCarsCompenents/Pricing';
const items = ['Budget', 'Standard', 'Luxury'];

const AddCars = () => {
  const [firstStepInfo, setFirstStepInfo] = useState('');
  const [steps, setSteps] = useState(myCarsStepsData);
  const tabRef = useRef(null);
  const [selectedIndex, setSeletecdIndex] = useState(0);
  const [openStartPicker, setOpenStartPicker] = useState(false);
  const [endTimePicker, setEndTimePicker] = useState(false);
  const [features, setFeatures] = useState([]);
  const [specialfeatures, setSpecialFeatures] = useState([]);
  const [disabilities, setDisabilities] = useState([]);
  const [safties, setSafties] = useState([]);
  const [price, setPrice] = useState(0);
  const [agreemenyVisible, setAgreementVisible] = useState(false);
  const [discount, setdiscount] = useState(null);
  const [isState, setIsState] = useState({
    features: [],
    specialfeatures: [],
    vehicleMake: [],
    vehicleModel: [],
    powertain: [],
    disabilityFeatures: [],
    manualTypes: [],
    list: [{text: ''}],
    disabilities: [],
    safties: [],
    vehicleType: [],
    name: '',
    price: 0,
    discount: [],
    description: '',
    describeYourPlaceImage: '',
    guestHave: '',
    startTime: '',
    endTime: '',
    placeLocatedData: [
      {
        title: 'guests',
        count: 1,
      },
      {
        title: 'bedrooms',
        count: 1,
      },
      {
        title: 'bad',
        count: 1,
      },
      {
        title: 'bathrooms',
        count: 1,
      },
    ],
  });

  const stepsRenderItem = ({item, index}) => {
    return (
      <Steps
        key={index}
        item={item}
        index={index}
        stepperEvent={setSeletecdIndex}
      />
    );
  };
  const handleNext = () => {
    if (selectedIndex !== stepsData.length - 1) {
      if (selectedIndex >= 1) {
        tabRef?.current?.scrollToIndex({
          index: selectedIndex + 1,
          animated: true,
        });
      }

      let mappedOut = stepsData?.map((item, index) => {
        if (index < selectedIndex + 1) {
          return {...item, completed: true, selected: true};
        } else if (index === selectedIndex + 1) {
          return {...item, selected: true, completed: false};
        } else {
          return {...item, selected: false, completed: false};
        }
      });
      setSeletecdIndex(selectedIndex + 1);
      setSteps(mappedOut);
    }
  };
  const handleBack = () => {
    if (selectedIndex > 0) {
      // Scroll to the previous step in the tab view
      tabRef?.current?.scrollToIndex({
        index: selectedIndex <= 2 ? 0 : selectedIndex - 1,
        animated: true,
      });

      // Update state with the new selected index and steps data

      setSteps(
        steps.map((ele, index) => {
          if (index == selectedIndex) {
            return {...ele, selected: false};
          }
          return ele;
        }),
      );
      setSeletecdIndex(selectedIndex - 1);
    }
  };
  const handleStepClick = stepIndex => {
    tabRef?.current?.scrollToIndex({
      index: stepIndex,
      animated: true,
    });

    // Update steps data based on the clicked step
    const updatedSteps = stepsData.map((item, index) => {
      if (index < stepIndex) {
        // All previous steps should be marked as completed but not selected
        return {...item, completed: true, selected: false};
      } else if (index === stepIndex) {
        // The clicked step should be marked as selected and completed
        return {...item, completed: true, selected: true};
      } else {
        // All following steps should be deselected and marked as incomplete
        return {...item, completed: false, selected: false};
      }
    });

    // Update the state with the new selected index and steps data
    setSeletecdIndex(stepIndex);
    // setSteps(updatedSteps);
  };

  const onScrollToIndexFailed = info => {
    if (tabRef?.current !== null && tabRef?.current !== undefined) {
      const wait = new Promise(resolve => setTimeout(resolve, 500));
      wait.then(() => {
        tabRef?.current?.scrollToIndex({
          index: info.index || 0,
          animated: true,
        });
      });
    }
  };

  const handleDecreament = index => {
    const newArray = [...isState?.placeLocatedData];
    if (newArray?.[index]?.count > 1) {
      newArray[index] = {
        ...newArray[index],
        count: newArray?.[index]?.count - 1,
      };
      setIsState(prev => {
        return {...prev, placeLocatedData: [...newArray]};
      });
    }
  };
  const handleIncreament = index => {
    const newArray = [...isState?.placeLocatedData];
    if (newArray?.[index]?.count < 100) {
      newArray[index] = {
        ...newArray[index],
        count: newArray?.[index]?.count + 1,
      };
      setIsState(prev => {
        return {...prev, placeLocatedData: [...newArray]};
      });
    }
  };

  console.log(isState, 'steppppp');
  return (
    <ScreenBg>
      <SafeAreaView style={{flex: 1}}>
        <PrimaryHeader
          goBack={true}
          title={labels.createNewListing}
          rightImage={true}
        />

        <KeyboardAvoidingView
          contentContainerStyle={{flex: 1}}
          style={{flex: 1}}
          behavior="padding">
          <Title
            text={steps[selectedIndex]?.label}
            otherStyles={{textAlign: 'center'}}
            fontSize={24}
          />
          <Container extraStyle={styles.stepsContainer}>
            <FlatList
              data={steps}
              ref={tabRef}
              renderItem={stepsRenderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              contentContainerStyle={styles.stepsContentContainer}
              onScrollToIndexFailed={info => onScrollToIndexFailed(info)}
            />
          </Container>

          <Container
            extraStyle={{
              flexGrow: 1,

              paddingHorizontal: 20,
            }}>
            {selectedIndex == 0 ? (
              <BasicInfo isState={isState} setIsState={setIsState} />
            ) : null}
            {selectedIndex === 1 ? (
              <Specifications isState={isState} setIsState={setIsState} />
            ) : null}
            {selectedIndex === 2 ? (
              <Featuress isState={isState} setIsState={setIsState} />
            ) : null}
            {selectedIndex === 3 ? (
              <Pricing isState={isState} setIsState={setIsState} />
            ) : null}
            {selectedIndex === 4 ? (
              <AddDiscount selected={isState} setSelected={setIsState} />
            ) : null}
            {selectedIndex === 5 ? (
              <UploadFile isState={isState} setIsState={setIsState} />
            ) : null}
            {/* {selectedIndex === 6 ? <AddDiscount /> : null} */}
            {selectedIndex == 6 ? (
              <Preview data={isState} setSelectedIndex={setSeletecdIndex} />
            ) : null}

            {selectedIndex == 7 ? (
              <UploadFile selected={discount} setSelected={setdiscount} />
            ) : null}
            {selectedIndex == 8 ? (
              <Preview data={isState} setSelectedIndex={setSeletecdIndex} />
            ) : null}
            {selectedIndex == 9 ? <Agreements /> : null}
          </Container>
          <Container
            extraStyle={{
              flexDirection: 'row',
              // flex: 1,
              width: '100%',
              gap: 15,
              paddingHorizontal: 20,
              // backgroundColor: 'red',
              marginVertical: 20,
            }}>
            {selectedIndex != 0 ? (
              <Button
                text={labels.back}
                otherStyles={GeneralStyles.flex(1)}
                onPress={handleBack}
              />
            ) : null}
            {selectedIndex != steps?.length - 1 ? (
              <Button
                text={labels.next}
                otherStyles={GeneralStyles.flex(1)}
                onPress={() => {
                  if (selectedIndex == 0) {
                    // if (!isState.describeYourPlaceImage) {
                    //   showToast('Kindly Select at least One Place', 'error');
                    // } else {

                    if (Utility.basicInfoCarListing(isState)) {
                      setSeletecdIndex(selectedIndex + 1);
                      setSteps(
                        steps.map((ele, index) => {
                          if (index == selectedIndex + 1) {
                            return {...ele, selected: true, completed: false};
                          }
                          return ele;
                        }),
                      );
                      // }
                    }
                    return;
                  } else if (selectedIndex == 1) {
                    if (Utility.locationAddCar(isState)) {
                      setSteps(
                        steps.map((ele, index) => {
                          if (index == selectedIndex + 1) {
                            return {...ele, selected: true, completed: false};
                          }
                          return ele;
                        }),
                      );
                      setSeletecdIndex(selectedIndex + 1);
                    } else {
                    }
                    return;
                  } else if (selectedIndex == 2) {
                    if (!isState?.features?.length) {
                      showToast(
                        'To Continue , Kindly Select One Feature',
                        'error',
                      );
                    } else {
                      setSteps(
                        steps.map((ele, index) => {
                          if (index == selectedIndex + 1) {
                            return {...ele, selected: true, completed: false};
                          }
                          return ele;
                        }),
                      );
                      setSeletecdIndex(selectedIndex + 1);
                    }
                    return;
                  } else if (selectedIndex == 3) {
                    if (isState?.price <= 0) {
                      showToast('Price must be greater than zero', 'error');
                    } else {
                      setSteps(
                        steps.map((ele, index) => {
                          if (index == selectedIndex + 1) {
                            return {...ele, selected: true, completed: false};
                          }
                          return ele;
                        }),
                      );
                      setSeletecdIndex(selectedIndex + 1);
                    }
                    return;
                  } else if (selectedIndex == 4) {
                    // if (
                    //   Utility.basicsABoutYourPlace({
                    //     features: isState?.features,
                    //     specialfeatures: isState?.specialfeatures,
                    //     disabilities: isState?.disabilities,
                    //     safties: isState?.safties,
                    //   })
                    // ) {
                    // showToast('To Continue , Kindly Select One ', 'error');
                    // } else {
                    setSteps(
                      steps.map((ele, index) => {
                        if (index == selectedIndex + 1) {
                          return {...ele, selected: true, completed: false};
                        }
                        return ele;
                      }),
                    );
                    setSeletecdIndex(selectedIndex + 1);
                    // }
                    return;
                  } else if (selectedIndex == 5) {
                    // if (isState?.price <= 0) {
                    //   showToast('Price must be greater than zero', 'error');
                    // } else {
                    setSteps(
                      steps.map((ele, index) => {
                        if (index == selectedIndex + 1) {
                          return {...ele, selected: true, completed: false};
                        }
                        return ele;
                      }),
                    );
                    setSeletecdIndex(selectedIndex + 1);
                    // }
                    return;
                  } else if (selectedIndex == 6) {
                    console.log(price);
                    // if (!discount) {
                    //   showToast('Price must be greater than zero', 'error');
                    // } else {
                    setSteps(
                      steps.map((ele, index) => {
                        if (index == selectedIndex + 1) {
                          return {...ele, selected: true, completed: false};
                        }
                        return ele;
                      }),
                    );
                    setSeletecdIndex(selectedIndex + 1);
                  } else if (selectedIndex == 7) {
                    console.log(price);
                    // if (!discount) {
                    //   showToast('Price must be greater than zero', 'error');
                    // } else {
                    setSteps(
                      steps.map((ele, index) => {
                        if (index == selectedIndex + 1) {
                          return {...ele, selected: true, completed: false};
                        }
                        return ele;
                      }),
                    );
                    setSeletecdIndex(selectedIndex + 1);
                  }
                  return;
                  // }
                }}
              />
            ) : null}

            {selectedIndex == steps.length - 1 ? (
              <Button
                text={labels.done}
                otherStyles={GeneralStyles.flex(1)}
                onPress={handleBack}
              />
            ) : null}
          </Container>

          <CustomModal
            open={agreemenyVisible}
            close={() => setAgreementVisible(false)}>
            {/* <Container> */}

            <Title text="WAIVER OF LIABILITY" />
            <Title text="Acceptance" />
          </CustomModal>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScreenBg>
  );
};

export default AddCars;
