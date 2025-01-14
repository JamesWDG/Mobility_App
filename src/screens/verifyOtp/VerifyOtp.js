import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './VerifyOtp.styles';
import ScreenBg from '../../components/screenBg/ScreenBg';
import Container from '../../components/container/Container';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import Title from '../../components/title/Title';
import labels from '../../assets/labels/English.labels';
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';
import RadioButton from '../../components/radioButton/RadioButton';
import colors from '../../config/Colors';
import Button from '../../components/button/Button';
import fonts from '../../config/Fonts';
import GeneralStyles from '../../config/GeneralStyle';
import Input from '../../components/input/Input';
import Icon from 'react-native-vector-icons/AntDesign';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import PasswordIcon from 'react-native-vector-icons/Feather';
import ScrollViewComp from '../../components/scrollViewComp/ScrollViewComp';
import ProfileImageCropper from '../../components/profileImageCropper/ProfileImageCropper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import OtpComponent from '../../components/otpComponent/OtpComponent';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
const data = [
  {
    id: 1,
    //   label: 'English',
    desc: 'Remember Me',
    value: 'english',
  },
];
const VerifyOTP = ({navigation , route}) => {
  const params = route?.params?.params
  // States
  const [selectedId, setSelectedId] = useState(1);
  const [isState, setIsState] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profileImage: '',
  });
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const insets = useSafeAreaInsets();
  return (
    <ScreenBg>
      <SafeAreaView style={{flex: 1}}>
        <ScrollViewComp>
            <PrimaryHeader goBack={true} navigation={navigation}/>
          <Container extraStyle={styles.mainContainerStyles(insets?.top)}>
            <Container extraStyle={styles.upperContainer}>
              <LocalImage
                source={images.splashLogo}
                otherStyle={styles.imageContainer}
                resizeMode="contain"
              />
              <Container extraStyle={styles.innerContainer}>
                <Title
                  text={labels.verificationCode}
                  fontSize={24}
                  fontFamily={fonts.poppinsSemiBold}
                  fontWeight={700}
                />

                <Title
                  text={labels.enterYourVerificationCodeSent}
                  fontSize={16}
                  fontWeight={300}
                  otherStyles={{
                    marginTop: 12,
                    textAlign: 'center',
                    marginBottom: 30,
                  }}
                />
                <OtpComponent />

                <Container extraStyle={[styles.notAUserText , GeneralStyles.marginTop(40)]}>
                <Title text={labels.didNotReceiveCoDE} />
                <Pressable 
                // onPress={() => navigation.navigate('Signup')}
                    >
                  <Title
                    text={labels.resendCode}
                    color={colors.c_7939FE}
                    fontWeight={600}
                  />
                </Pressable>
              </Container>
                {/* <Input
                marginLeft={18}
                VectorIcon={() => (
                  <EmailIcon name="email" size={20} color={colors.gray} />
                )}
                placeholder={labels.emailAddress}
                value={isState.email}
                onChangeText={t =>
                  setIsState(prevState => ({...prevState, email: t}))
                }
                otherStyles={styles.inputStyles}
              /> */}

                {/* <Input
                marginLeft={18}
                VectorIcon={() => (
                  <PasswordIcon name="lock" size={20} color={colors.gray} />
                )}
                placeholder={labels.password}
                value={isState.password}
                onChangeText={t =>
                  setIsState(prevState => ({...prevState, password: t}))
                }
                RightVectorIcon={
                  !securePassword
                    ? () => (
                        <PasswordIcon
                          name="eye"
                          size={20}
                          color={colors.gray}
                        />
                      )
                    : () => (
                        <PasswordIcon
                          name="eye-off"
                          size={20}
                          color={colors.gray}
                        />
                      )
                }
                otherStyles={styles.inputStyles}
                secureEntry={securePassword}
                rightIconPress={() => setSecurePassword(!securePassword)}
              /> */}

                {/* <Container
                extraStyle={styles.rememberMeContainer}>
                <RadioButton
                  data={data}
                  marginTop={0}
                  padding={0}
                  width={'100%'}
                  selectedValue={selectedValue}
                  trueOrFalse={true}
                  setSelectedValue={setSelectedValue}
                  marginLeft={2}
                />
                <Pressable>
                  <Title text={labels.forgetPassword} color={colors.c_7939FE} />
                </Pressable>
              </Container>
               */}
              </Container>
            </Container>
            <Container extraStyle={styles.signInContainer}>
              <Button
                text={labels.next}
                otherStyles={GeneralStyles.marginTop(40)}
                onPress={() => {
                  if(params?.type == 'forgot'){
                    navigation.navigate('reset')
                  }else{
                    navigation.navigate('TabStack' , {screen : "Home"})
                  }
                }}
              />
              <Container extraStyle={styles.notAUserText}>
                <Title text={labels.notAUser} />
                <Pressable onPress={() => navigation.navigate('Signup')}>
                  <Title
                    text={labels.signUp}
                    color={colors.c_7939FE}
                    fontWeight={600}
                  />
                </Pressable>
              </Container>
            </Container>
          </Container>
        </ScrollViewComp>
      </SafeAreaView>
    </ScreenBg>
  );
};

export default VerifyOTP;
