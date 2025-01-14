import {View, Text, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import labels from '../../assets/labels/English.labels';
import Input from '../input/Input';
import Dropdown from '../dropdown/Dropdown.js';
import colors from '../../config/Colors.js';
import DateInput from '../dateInput.js/DateInput.js';
import DatePickerComp from '../datePickerComp/DatePicker.js';
import GeneralStyles from '../../config/GeneralStyle.js';
import ScrollViewComp from '../scrollViewComp/ScrollViewComp.js';
import moment from 'moment';
import {car_makes} from '../../constants/car_make.js';
import {car_models} from '../../constants/car_model.js';
const BasicInfo = ({isState = {}, setIsState = () => {}}) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openStartPicker, setOpenStartPicker] = useState(false);
  const [endTimePicker, setEndTimePicker] = useState(false);

  console.log(isState, 'statatatatattata');
  return (
    <Container extraStyle={{flex: 1}}>
      <ScrollViewComp
        contentContainerStyle={{flexGrow: 1, gap: 10}}
        style={{flex: 1}}>
        <Container>
          <Title
            text={labels?.titleOfListing}
            otherStyles={{marginBottom: 8}}
            fontSize={20}
            fontWeight={600}
          />
          <Input
            marginLeft={8}
            placeholder={labels.enteryourTitleOfListing}
            value={isState.name}
            marginVertical={0}
            onChangeText={t =>
              setIsState(prevState => ({...prevState, name: t}))
            }
            //   otherStyles={styles.inputStyles}
          />
        </Container>
        <Title
          text={labels?.basicInfo}
          otherStyles={{marginBottom: 8, marginTop: 15}}
          fontSize={18}
          fontWeight={600}
        />
        <Container extraStyle={{gap: 15}}>
          <Container>
            <Title text={labels?.vehicleMake} />
            <Dropdown
              onSelect={selected => {
                // console.log('checkkkkkkkk', selected);
                setIsState(prev => {
                  return {
                    ...prev,
                    vehicleMake: [car_makes[selected]],
                  };
                });
              }}
              // value={[isState?.vehicleMake] || labels.carMake}
              value={labels.carMake}
              options={car_makes?.map(item => item?.title)}
              optionsHeight={120}
              marginLeft={8}
              borderRadius={40}
              marginTop={5}
              optionsWidth={'92%'}
              backgroundColor={colors.c_F5F5F5}
              color={
                isState?.vehicleMake?.make ? colors.black : colors.c_747688
              }
              defaultTextStyle={
                //   params?.type == 'edit'
                //     ? GeneralStyles.color(colors?.black)
                // :
                GeneralStyles.color(colors?.c_818181)
              }
            />
          </Container>
          <Container>
            <Title text={labels?.vehicleModel} />
            <Dropdown
              onSelect={selected => {
                // console.log('checkkkkkkkk', selected);
                setIsState(prev => {
                  return {
                    ...prev,
                    vehicleModel: [car_models[selected]],
                  };
                });
              }}
              value={isState?.vehicleModel?.title || labels.vehicleModel}
              options={car_models
                .filter(ele => ele?.make_id == isState?.vehicleMake?.[0]?.id)
                ?.map(item => item?.model)}
              optionsHeight={120}
              marginLeft={8}
              borderRadius={40}
              marginTop={5}
              optionsWidth={'92%'}
              backgroundColor={colors.c_F5F5F5}
              color={isState?.city ? colors.black : colors.c_747688}
              defaultTextStyle={
                //   params?.type == 'edit'
                //     ? GeneralStyles.color(colors?.black)
                // :
                GeneralStyles.color(colors?.c_818181)
              }
            />
          </Container>

          <DateInput
            marginVertical={0}
            title={labels.registrationYear}
            value={
              isState?.registrationNumber
                ? moment(isState?.registrationNumber).format('DD-MM-YYYY')
                : '-- -- ----'
            }
            calender={true}
            onPress={() => setOpenDatePicker(true)}
          />
          <Input
            title={labels?.licenseNumber}
            marginLeft={8}
            placeholder={labels.licenseNumber}
            value={isState.licenseNumber}
            onChangeText={t =>
              setIsState(prevState => ({...prevState, licenseNumber: t}))
            }
            marginVertical={0}
            //   otherStyles={styles.inputStyles}
          />
          <Input
            title={labels?.platenumber}
            marginLeft={8}
            placeholder={labels.platenumber}
            value={isState.platenumber}
            onChangeText={t =>
              setIsState(prevState => ({...prevState, platenumber: t}))
            }
            marginVertical={0}
            //   otherStyles={styles.inputStyles}
          />
          <Input
            title={labels?.vehiclesMileage}
            marginLeft={8}
            keyboardType={'number-pad'}
            placeholder={labels.enterMileage}
            value={isState.milage}
            marginVertical={0}
            onChangeText={t =>
              setIsState(prevState => ({...prevState, milage: t}))
            }
            //   otherStyles={styles.inputStyles}
          />
        </Container>
        <Container extraStyle={{gap: 20, marginTop: 10}}>
          <DateInput
            marginVertical={0}
            title={labels.enterPickupTime}
            value={
              isState?.startTime
                ? moment(isState?.startTime).format('hh:mm:ss A')
                : '--:--:--'
            }
            calender={false}
            onPress={() => setOpenStartPicker(true)}
          />
          <DateInput
            marginVertical={0}
            title={labels.enterDropOffTime}
            value={
              isState?.endTime
                ? moment(isState?.endTime).format('hh:mm:ss A')
                : '--:--:--'
            }
            calender={false}
            onPress={() => setEndTimePicker(true)}
          />

          <Input
            marginLeft={8}
            marginVertical={0}
            multilineHeight={120}
            multilineInput={true}
            placeholder={labels.description}
            value={isState?.description}
            title={labels.description}
            onChangeText={t =>
              setIsState(prevState => ({...prevState, description: t}))
            }
            otherStyles={{height: 120, borderRadius: 18}}
          />
          <Input
            marginLeft={8}
            marginVertical={0}
            multilineHeight={120}
            multilineInput={true}
            placeholder={labels.importantNotes}
            value={isState?.importantNotes}
            onChangeText={t =>
              setIsState(prevState => ({...prevState, importantNotes: t}))
            }
            title={labels.importantNotes}
            otherStyles={{height: 120, borderRadius: 18}}
          />
        </Container>
      </ScrollViewComp>
      {/* </KeyboardAvoidingView> */}

      <DatePickerComp
        openDate={openDatePicker}
        closeDate={() => setOpenDatePicker(false)}
        mode={'date'}
        value={isState.registrationNumber || new Date()}
        onChange={time => {
          setOpenDatePicker(false);
          setIsState(prev => {
            return {...prev, registrationNumber: time};
          });
        }}
      />
      <DatePickerComp
        openDate={openStartPicker}
        closeDate={() => setOpenStartPicker(false)}
        mode={'time'}
        value={isState.startTime || new Date()}
        onChange={time => {
          setOpenStartPicker(false);
          setIsState(prev => {
            return {...prev, startTime: time};
          });
        }}
      />
      <DatePickerComp
        openDate={endTimePicker}
        closeDate={() => setEndTimePicker(false)}
        mode={'time'}
        value={isState.endTime || new Date()}
        onChange={time => {
          setEndTimePicker(false);
          setIsState(prev => {
            return {...prev, endTime: time};
          });
          // setState({...state, endTime: time});
        }}
      />
    </Container>
  );
};

export default BasicInfo;
