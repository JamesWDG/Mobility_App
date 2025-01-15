import React, {memo, useEffect, useState} from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import GeneralStyles from '../../config/GeneralStyle';
import {LocalImage} from '../localImage/LocalImage';
import {styles} from './UploadImage.styles';
import fonts from '../../config/Fonts';
import colors from '../../config/Colors';
import {Image as ImageCompress, uuidv4} from 'react-native-compressor';
import ImageCropPicker from 'react-native-image-crop-picker';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import {height, IOS} from '../../utils/Utility';
import Avatar from '../../components/avatar/Avatar';
import ScrollViewComp from '../scrollViewComp/ScrollViewComp';
// import {LocalImages as LocalImages} from '../../'
import {images} from '../../config/Images';
const UploadImage = ({
  title = '',
  uploadIcon,
  uploadLabel = '',
  mT = 0,
  mB = 0,
  multiple = false,
  callBack = () => {},
  height = 200,
  scaleY = 400,
  scaleX = 300,
  uri,
  uris = [],
}) => {
  const [LocalImages, setLocalImages] = useState([]);

  useEffect(() => {
    if (uris.length > 0) {
      setLocalImages(uris);
    }
  }, [uris]);

  const handleSelectImage = () => {
    ImageCropPicker.openPicker({
      height: scaleY,
      width: scaleX,
      multiple: multiple, // allow multiple selections
      minFiles: 1,
      cropping: true,
      compressImageQuality: 0.4 || null,
      mediaType: 'photo',
    })
      .then(async res => {
        if (multiple) {
          // Use Promise.all to wait for all LocalImages to be processed
          const array = await Promise.all(
            res?.map(async ele => {
              let localUri = await compressImage(ele.path);
              let imageInFormData = {
                id: uuidv4().toString(),
                uri: localUri,
                type: ele?.mime,
                name: IOS ? ele?.filename : ele?.path.split('/').pop(),
              };

              return imageInFormData;
            }),
          );

          setLocalImages(LocalImages => [...LocalImages, ...array]);

          callBack([...LocalImages, ...array]);
        } else {
          // Handle single image case
          let localUri = await compressImage(res?.path);
          let imageInFormData = {
            uri: localUri,
            type: res?.mime,
            name: IOS ? res?.filename : res?.path.split('/').pop(),
          };

          setLocalImages([imageInFormData]);
          callBack([imageInFormData]);
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const compressImage = async uri => {
    const compressedUri = await ImageCompress.compress(uri, {
      compressionMethod: 'auto',
    });
    return compressedUri;
  };

  const onDeletePress = id => {
    const newImages = LocalImages.filter(ele => ele.id != id);

    setLocalImages(newImages);
    callBack(newImages);
  };
  return (
    <Container extraStyle={styles.container(mT, mB)}>
      <Container extraStyle={GeneralStyles.alignItems('flex-start')}>
        <Title
          text={title}
          fontFamily={fonts.gabaritoRegular}
          fontSize={14}
          color={colors.c_747688}
          otherStyles={GeneralStyles.marginBottom(15)}
        />
      </Container>
      <TouchableContainer
        onPress={handleSelectImage}
        extraStyle={styles.uploadimageContainer(height, LocalImages == null)}>
        {!multiple && LocalImages.length != 0 ? (
          <Avatar
            source={LocalImages[0]}
            height={'100%'}
            width={'100%'}
            borderRadius={12}
          />
        ) : (
          <Container extraStyle={styles.uploadBoxStyling}>
            <LocalImage source={uploadIcon} />
            <Title
              text={uploadLabel}
              fontFamily={fonts.gabaritoSemiBold}
              fontSize={14}
              otherStyles={GeneralStyles.marginTop(10)}
              color={colors.c_747688}
            />
          </Container>
        )}
      </TouchableContainer>
      <Container>
        {multiple && LocalImages ? (
          <ScrollViewComp
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{flexGrow: 1, gap: 20, marginTop: 20}}
            style={{flex: 1, minHeight: 140}}>
            {LocalImages?.map((ele, index) => {
              return (
                <Container>
                  <TouchableContainer
                    extraStyle={styles.crossIconStyle}
                    onPress={() => onDeletePress(ele.id)}>
                    <LocalImage
                      source={images.crossIcon}
                      width={40}
                      tintColor={'black'}
                      height={40}
                    />
                  </TouchableContainer>
                  <Avatar
                    source={ele}
                    height={100}
                    width={100}
                    borderRadius={12}
                  />
                </Container>
              );
            })}
          </ScrollViewComp>
        ) : (
          <></>
        )}
      </Container>
    </Container>
  );
};

export default UploadImage;
