import {View, Text, Platform} from 'react-native';
import React, {useState} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Image as ImageCompress, uuidv4} from 'react-native-compressor';
import Container from '../container/Container';
import Avatar from '../../components/avatar/Avatar';
import {styles} from './ProfileImageCropper.styles';
import {images} from '../../config/Images';
import {LocalImage} from '../localImage/LocalImage';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../config/Colors';
import TouchableContainer from '../touchableContainer/TouchableContainer';
const ProfileImageCropper = ({extraStyle = {}, state, setState}) => {
  const handleSelectImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      multiple: false,
      minFiles: 1,
      cropping: true,
      compressImageQuality: 0.4 || null,
      mediaType: 'photo',
    })
      .then(async res => {
        let localUri = await compressImage(res?.path);
        let imageInFormData = {
          uri: localUri,
          type: res?.mime,
          name:
            Platform.OS == 'ios' ? res?.filename : res?.path.split('/').pop(),
        };
        setState({...state, profileImage: imageInFormData});
      })
      .catch(error => console.log('error', error));
  };

  const compressImage = async uri => {
    const compressedUri = await ImageCompress.compress(uri, {
      compressionMethod: 'auto',
    });
    return compressedUri;
  };

  return (
    <Container extraStyle={[styles?.avatarContainer, extraStyle]}>
      <Container>
        <Avatar
          source={
            state?.profileImage
              ? {uri: state?.profileImage?.uri}
              : images.userPH
          }
          height={100}
          width={100}
          borderRadius={125}
          style={styles?.avatar}
        />
        <Container extraStyle={styles?.editIcon}>
          {/* <LocalImage
        source={images?.uploadImage}
        touchableIcon={true}
        onPress={handleSelectImage}
      /> */}
          <TouchableContainer
            extraStyle={styles.cameraIconStyles}
            onPress={handleSelectImage}>
            <Icon name="camera" size={20} />
          </TouchableContainer>
        </Container>
      </Container>
    </Container>
  );
};

export default ProfileImageCropper;
