import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import UploadImage from '../uploadImage/UploadImage';
import labels from '../../assets/labels/English.labels';
import {images} from '../../config/Images';
const UploadFile = () => {
  return (
    <Container>
      <UploadImage
        // uris={[{uri: image}]}
        title={labels.uploadPhoto}
        uploadIcon={images.uploadFile}
        uploadLabel={labels.uploadImage}
        multiple={true}
        height={140}
        callBack={imagess => {
          console.log(imagess, 'ekjdsjwsdjnwejh');
          setIsState(prev => {
            return {...prev, images: imagess};
          });
        }}
      />
    </Container>
  );
};

export default UploadFile;
