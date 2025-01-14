import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import ScrollViewComp from '../scrollViewComp/ScrollViewComp';
import {houseTypes} from '../../utils/addHotel.constants';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import {LocalImage} from '../localImage/LocalImage';
import colors from '../../config/Colors';
import labels from '../../assets/labels/English.labels';
import CommonCard from './CommonCard';
import CommonCardContainer from './CommonCardContainer';
import styles from './addHotel.styles';

const PlaceSelection = ({firstStepInfo, setFirstStepInfo}) => {
  return (
    <Container extraStyle={styles.placeSelectionContainer}>
      <Title
        text={labels.whatTypeOfPlaceDoYouHave}
        fontSize={20}
        fontWeight={600}
      />

      <ScrollViewComp>
        <CommonCardContainer
          onChange={item => {
            console.log('onChange', item);
            setFirstStepInfo(prev => {
              return {...prev, describeYourPlaceImage: item};
            });
          }}
          selected={firstStepInfo?.describeYourPlaceImage?.title}
          data={houseTypes}
        />
      </ScrollViewComp>
    </Container>
  );
};

export default PlaceSelection;
