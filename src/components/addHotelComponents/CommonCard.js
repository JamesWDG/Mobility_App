import {View, Text} from 'react-native';
import React from 'react';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import colors from '../../config/Colors';
import Title from '../title/Title';
import {LocalImage} from '../localImage/LocalImage';
import GeneralStyles from '../../config/GeneralStyle';
import styles from './addHotel.styles';
const CommonCard = ({
  onChange = () => {},
  index = -1,
  selected = false,
  ele,
}) => {
  return (
    <TouchableContainer
      key={ele?.id || index}
      onPress={() => onChange(ele)}
      extraStyle={styles.commonCardStyles(selected)}>
      <LocalImage
        source={ele?.image}
        height={40}
        otherStyle={{width: 40, height: 40}}
        tintColor={selected ? colors.white : colors.black}
      />
      <Title
        text={ele?.title}
        color={selected ? colors.white : colors.black}
        // numberOfLines={2}
        otherStyles={GeneralStyles.textAlign('center')}
      />
    </TouchableContainer>
  );
};

export default CommonCard;
