import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import {stepsData} from '../../constants/stepperData';
import labels from '../../assets/labels/English.labels';
import Button from '../button/Button';
import GeneralStyles from '../../config/GeneralStyle';
import Input from '../input/Input';
import styles from './addHotel.styles';
const BasicInfo = ({isState, setIsState, selectedIndex}) => {
  return (
    <Container extraStyle={GeneralStyles.flex(1)}>
      <Title text={labels.basicInfo} fontSize={20} fontWeight={600} />
      <Input
        marginLeft={18}
        placeholder={labels.roomOrPlaceName}
        value={isState?.name}
        onChangeText={t => setIsState(prevState => ({...prevState, name: t}))}
      />
      <Input
        marginLeft={18}
        multilineHeight={120}
        multilineInput={true}
        placeholder={labels.description}
        value={isState?.description}
        onChangeText={t =>
          setIsState(prevState => ({...prevState, description: t}))
        }
        otherStyles={styles.basicInfoDescriptionStyle}
      />
    </Container>
  );
};

export default BasicInfo;
