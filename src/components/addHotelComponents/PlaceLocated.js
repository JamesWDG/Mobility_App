import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import colors from '../../config/Colors';
import DatePickerComp from '../datePickerComp/DatePicker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import GeneralStyles from '../../config/GeneralStyle';
import styles from './addHotel.styles';
import labels from '../../assets/labels/English.labels';
const PlaceLocated = ({
  setOpenStartPicker,
  openStartPicker,
  isState = {},
  setIsState = () => {},
  handleDecreament = () => {},
  handleIncreament = () => {},
  endTimePicker = false,
  setEndTimePicker = () => {},
}) => {
  return (
    <Container>
      <Title
        text={labels.howManyPeopleCanStay}
        fontSize={20}
        fontWeight={600}
        otherStyles={GeneralStyles.textAlign('center')}
      />
      <Container extraStyle={GeneralStyles.marginTop(30)}>
        {isState.placeLocatedData.map((ele, index) => {
          return (
            <Container key={index} extraStyle={styles.infoContainer}>
              <Title
                text={ele?.title}
                otherStyles={GeneralStyles.textTransform('capitalize')}
                fontSize={18}
              />
              <Container extraStyle={styles.increamentDecreamentConatiner}>
                <TouchableContainer
                  onPress={() => handleDecreament(index)}
                  extraStyle={styles.pluscontainer}>
                  <Title
                    text={'-'}
                    fontWeight={600}
                    fontSize={34}
                    otherStyles={GeneralStyles.marginTop(-2)}
                  />
                </TouchableContainer>
                <Title
                  text={ele?.count}
                  fontSize={20}
                  otherStyles={styles.countContainer}
                />
                <TouchableContainer
                  onPress={() => handleIncreament(index)}
                  extraStyle={styles.pluscontainer}>
                  <Title
                    text={'+'}
                    fontWeight={600}
                    fontSize={32}
                    otherStyles={GeneralStyles.marginTop(-2)}
                  />
                </TouchableContainer>
              </Container>
            </Container>
          );
        })}
      </Container>
      <Container>
        <Container extraStyle={styles.checkContainer}>
          <Title
            text={labels.checkin}
            otherStyles={GeneralStyles.textTransform('capitalize')}
            fontSize={18}
          />
          <TouchableContainer
            onPress={() => setOpenStartPicker(true)}
            extraStyle={styles.selectTimeContainer}>
            <Title
              text={
                isState?.startTime
                  ? moment(isState?.startTime).format('hh:mm:ss A')
                  : 'Select Time'
              }
            />
            <Icon name="clockcircleo" />
          </TouchableContainer>
        </Container>
        <Container extraStyle={styles.checkContainer}>
          <Title
            text={labels.checkout}
            otherStyles={GeneralStyles.textTransform('capitalize')}
            fontSize={18}
          />
          <TouchableContainer
            onPress={() => setEndTimePicker(true)}
            extraStyle={styles.selectTimeContainer}>
            <Title
              text={
                isState?.endTime
                  ? moment(isState?.endTime).format('hh:mm:ss A')
                  : 'Select Time'
              }
            />
            <Icon name="clockcircleo" />
          </TouchableContainer>
        </Container>
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
    </Container>
  );
};

export default PlaceLocated;
