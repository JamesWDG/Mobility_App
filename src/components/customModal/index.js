import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {images} from '../../config/Images';
import Container from '../container/Container';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import {LocalImage} from '../localImage/LocalImage';
import GeneralStyles from '../../config/GeneralStyle';
import styles from './CustomModal.style';
import colors from '../../config/Colors';

const CustomModal = ({open, close = () => {}, children}) => {
  return (
    <ReactNativeModal isVisible={open} close={close}>
      <Container extraStyle={styles.container}>
        <TouchableContainer
          extraStyle={GeneralStyles.alignItems('flex-end')}
          onPress={close}>
          <LocalImage source={images.crossIcon} tintColor={colors.c_7939FE} />
        </TouchableContainer>

        {children && children}
      </Container>
    </ReactNativeModal>
  );
};

export default CustomModal;
