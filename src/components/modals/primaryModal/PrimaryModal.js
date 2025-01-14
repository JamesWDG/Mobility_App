import {View, Text, Image} from 'react-native';
import React from 'react';
import Title from '../../title/Title';
import {images} from '../../../config/Images';
import colors from '../../../config/Colors';
import labels from '../../../assets/labels/English.labels';
import fonts from '../../../config/Fonts';
import {styles} from './PrimaryModal.styles';
import Container from '../../container/Container';
import {LocalImage} from '../../localImage/LocalImage';
import GeneralStyles from '../../../config/GeneralStyle';
const PrimaryModal = ({iconVisible = true, icon, title, description , height=25 , width=25 }) => {
  return (
    <Container
      extraStyle={[
        GeneralStyles.alignItems('center'),
        GeneralStyles.paddingBottom(10),
      ]}>
      {iconVisible ? (
        <Container extraStyle={styles.imageContainer}>
          <LocalImage
            source={icon || images?.hourglass}
            width={45}
            height={45}
            tintColor={colors.c_7939FE}
            otherStyle={styles.imageIconStyles(height , width)}
          />
        </Container>
      ) : null}

      <Title
        text={title}
        fontSize={20}
        fontWeight={700}
        otherStyles={{textAlign : "center"}}
      />
      <Title
        text={description}
        otherStyles={styles.textCenter}
        color={colors.c_9B9B9B}
        fontSize={14}
      />
    </Container>
  );
};

export default PrimaryModal;
