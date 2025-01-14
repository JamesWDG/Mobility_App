import {Input} from '@rneui/themed';
import React, {memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Title from '../title/Title';
import {styles as Styles} from './Input.styles';
import GeneralStyles from '../../config/GeneralStyle';
import colors from '../../config/Colors';
import {images} from '../../config/Images';
import fonts from '../../config/Fonts';

const PhoneInput = ({
  label,
  placeholder,
  onChangeText,
  autoCapitalize = 'none',
  value,
  keyboardType = 'default',
  selectedCountry,
  openModal = () => {},
  additionalStyle = {},
  leftSideDisabled = true,
}) => {
  return (
    <View style={[GeneralStyles.width('100%'), additionalStyle]}>
      {/* {label ? <Title otherStyle={Styles.labelStyle} title={label} /> : null} */}
      <Input
        placeholder={placeholder}
        containerStyle={GeneralStyles.paddingHorizontal(0)}
        errorStyle={Styles.errorStyle}
        inputContainerStyle={[Styles.inputContainerStyle]}
        inputStyle={Styles.inputStyle}
        placeholderTextColor={colors.grey}
        leftIcon={() => (
          <TouchableOpacity
            onPress={() => {
              openModal?.();
            }}
            disabled={leftSideDisabled}>
            <View style={Styles.flexRow}>
              <Title text={selectedCountry?.emoji} />
              <Title
                otherStyle={Styles.inputStyle}
                color={colors.dark}
                fontFamily={fonts.gabaritoRegular}
                text={` ${selectedCountry?.code}`}
              />
              <Entypo
                name={'chevron-small-down'}
                size={15}
                color={colors.gray}
                // style={GeneralStyles.paddingTop(0)}
              />
              {/* <Image source={images.downArrow} style={Styles.arrowStyle} /> */}
            </View>
          </TouchableOpacity>
        )}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        value={value}
        keyboardType={keyboardType}
        maxLength={selectedCountry?.code === 'OM' ? 13 : 16}
      />
    </View>
  );
};

export default memo(PhoneInput);
