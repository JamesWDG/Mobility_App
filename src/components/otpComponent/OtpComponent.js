import {View, Text} from 'react-native';
import React from 'react';
import { OtpInput } from "react-native-otp-entry";
import {styles} from './OtpComponent.styles'
import colors from '../../config/Colors';
const OtpComponent = () => {
  return (
    <OtpInput
      numberOfDigits={4}
      focusColor="green"
      autoFocus={true}
      hideStick={false}
    //   placeholder="******"
      blurOnFilled={true}
      disabled={false}
      type="numeric"
      secureTextEntry={false}
      focusStickBlinkingDuration={500}
      onFocus={() => console.log('Focused')}
      onBlur={() => console.log('Blurred')}
      onTextChange={text => console.log(text)}
      onFilled={text => console.log(`OTP is ${text}`)}
      textInputProps={{
        accessibilityLabel: 'One-Time Password',
      }}
      theme={{
        containerStyle:{},
        pinCodeContainerStyle:styles.inputFeildsStyles,
        // pinCodeTextStyle: styles.pinCodeText,
        // focusStickStyle: styles.focusStick,
        // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        // placeholderTextStyle: styles.placeholderText,
        // filledPinCodeContainerStyle: styles.filledPinCodeContainer,
        // disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
      }}
    />
  );
};

export default OtpComponent;
