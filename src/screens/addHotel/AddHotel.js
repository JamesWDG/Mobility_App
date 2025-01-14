import {View, Text, SafeAreaView, FlatList, Dimensions} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import ScreenBg from '../../components/screenBg/ScreenBg';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import labels from '../../assets/labels/English.labels';
import Container from '../../components/container/Container';
import Title from '../../components/title/Title';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import colors from '../../config/Colors';
import Steps from '../../components/steps/Steps';
import {stepsData} from '../../constants/stepperData';
import {styles} from './AddHotel.styles';
import ScrollViewComp from '../../components/scrollViewComp/ScrollViewComp';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import GeneralStyles from '../../config/GeneralStyle';
import BasicInfo from '../../components/addHotelComponents/BasicInfo';
import {houseFeatures, houseTypes} from '../../utils/addHotel.constants';
import TouchableContainer from '../../components/touchableContainer/TouchableContainer';
import PlaceSelection from '../../components/addHotelComponents/PlaceSelection';
import Utility from '../../utils/Utility';
import {showToast} from '../../utils/Toast';
import GuestWant from '../../components/addHotelComponents/GuestWant';
import DatePickerComp from '../../components/datePickerComp/DatePicker';
import PlaceLocated from '../../components/addHotelComponents/PlaceLocated';
import CommonCard from '../../components/addHotelComponents/CommonCard';
import BasicsAboutYourPlace from '../../components/addHotelComponents/BasicsAboutYourPlace';
import Specifications from '../../components/addHotelComponents/Specifications';
import AddDiscount from '../../components/addHotelComponents/AddDiscount';
import UploadFile from '../../components/addHotelComponents/UploadFile';
import Preview from '../../components/addHotelComponents/Preview';
import CustomModal from '../../components/customModal';
import Agreements from '../../components/addHotelComponents/Agreements';
const items = ['Budget', 'Standard', 'Luxury'];

const AddHotel = () => {
  const [firstStepInfo, setFirstStepInfo] = useState('');
  const [steps, setSteps] = useState(stepsData);
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
    disabilities: [],
    safties: [],
    name: '',
    price: 0,
    discount: null,
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

  console.log(firstStepInfo, 'steppppp');
  return (
    <ScreenBg>
      <SafeAreaView style={{flex: 1}}>
        <PrimaryHeader
          goBack={true}
          title={labels.createNewListing}
          rightImage={true}
        />

        {/* <Container extraStyle={{height: Dimensions.get('screen').height}}> */}
        {/* <Container
          extraStyle={{
            marginHorizontal: 20,
            backgroundColor: colors.c_bdc3c7,
            borderRadius: 8,
            marginTop: 20,
          }}>
          <Container
            extraStyle={{
              height: 30,
              backgroundColor: colors.c_7939FE,
              width: `${(selectedIndex / 8) * 100}%`,
              borderRadius: 8,
              //   alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Title
              //   text={`${((selectedIndex + 1) / 8) * 100}%`}
              text={
                (selectedIndex / 8) * 100 > 0
                  ? `${(selectedIndex / 8) * 100}%`
                  : ''
              }
              fontSize={12}
              color="white"
              otherStyles={{padding: 7, paddingpaddingHorizontal: 10}}
            />
          </Container>
        </Container> */}

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
            <PlaceSelection
              firstStepInfo={isState}
              setFirstStepInfo={setIsState}
            />
          ) : null}
          {selectedIndex === 1 ? (
            <BasicInfo
              isState={isState}
              setIsState={setIsState}
              selectedIndex={selectedIndex}
            />
          ) : null}
          {selectedIndex === 2 ? (
            <GuestWant GuestHave={isState} setGuestHave={setIsState} />
          ) : null}
          {selectedIndex === 3 ? (
            <PlaceLocated
              openStartPicker={openStartPicker}
              setOpenStartPicker={setOpenStartPicker}
              endTimePicker={endTimePicker}
              isState={isState}
              setIsState={setIsState}
              setEndTimePicker={setEndTimePicker}
              handleDecreament={handleDecreament}
              handleIncreament={handleIncreament}
            />
          ) : null}
          {selectedIndex === 4 ? (
            <BasicsAboutYourPlace
              isState={isState}
              setIsState={setIsState}
              features={features}
              setFeatures={setFeatures}
              data={houseFeatures}
              safties={safties}
              setSafties={setSafties}
              disabilities={disabilities}
              setDisabilities={setDisabilities}
              specialfeatures={specialfeatures}
              setSpecialFeatures={setSpecialFeatures}
            />
          ) : null}
          {selectedIndex === 5 ? (
            <Specifications isState={isState} setIsState={setIsState} />
          ) : null}
          {/* {selectedIndex === 6 ? <AddDiscount /> : null} */}
          {selectedIndex == 6 ? (
            <AddDiscount selected={isState} setSelected={setIsState} />
          ) : null}

          {selectedIndex == 7 ? (
            <UploadFile selected={discount} setSelected={setdiscount} />
          ) : null}
          {selectedIndex == 8 ? (
            <Preview data={isState} setSelectedIndex={setSeletecdIndex} />
          ) : null}
          {selectedIndex == 9 ? <Agreements isState={isState} /> : null}

          {console.log(selectedIndex, 'indndndndndn')}
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
                  if (!isState.describeYourPlaceImage) {
                    showToast('Kindly Select at least One Place', 'error');
                  } else {
                    setSeletecdIndex(selectedIndex + 1);
                    setSteps(
                      steps.map((ele, index) => {
                        if (index == selectedIndex + 1) {
                          return {...ele, selected: true, completed: false};
                        }
                        return ele;
                      }),
                    );
                  }
                  return;
                } else if (selectedIndex == 1) {
                  if (Utility.roomRentSchemaValidation(isState)) {
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
                  if (!isState?.guestHave) {
                    showToast('To Continue , Kindly Select One ', 'error');
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
                  if (Utility.placeLocatedSchema(isState)) {
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
                  }
                  return;
                } else if (selectedIndex == 4) {
                  if (
                    Utility.basicsABoutYourPlace({
                      features: isState?.features,
                      specialfeatures: isState?.specialfeatures,
                      disabilities: isState?.disabilities,
                      safties: isState?.safties,
                    })
                  ) {
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
                  }
                  return;
                } else if (selectedIndex == 5) {
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
                } else if (selectedIndex == 8) {
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
      </SafeAreaView>
    </ScreenBg>
  );
};

export default AddHotel;
