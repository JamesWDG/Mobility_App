import React, {memo} from 'react';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../config/Colors';
import styles from './CheckBoxComp.styles';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Title from '../title/Title';
import Container from '../container/Container';
const CheckBoxComp = ({
  boxType = 'square',
  value,
  onValueChange,
  title,
  ...props
}) => {
  return (
    <Container extraStyle={[styles.mainContainer, styles.container]}>
      <TouchableContainer
        onPress={onValueChange}
        activeOpacity={0.7}
        // extraStyle={[styles.container]}
      >
        <CheckBox
          disabled={false}
          value={value}
          boxType={boxType}
          onFillColor={colors.primary}
          fillColor={colors.primary}
          onTintColor={colors.primary}
          tintColor={colors.primary}
          onCheckColor={colors.white}
          checkColor={colors.white}
          onAnimationType="fade"
          style={styles.checkBoxStyle}
          tintColors={{true: colors.primary, false: colors.gray}}
        />
      </TouchableContainer>
      {/* <LocalImage source={value ?  : images.checkimages.unCheck} /> */}
      <TouchableContainer onPress={onValueChange} activeOpacity={0.7}>
        <Title text={title} otherStyles={styles.titleStyle} />
      </TouchableContainer>
    </Container>
  );
};

export default memo(CheckBoxComp);
